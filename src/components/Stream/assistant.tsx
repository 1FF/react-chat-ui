import React from 'react';
import Markdown from 'react-markdown';

import { Definition } from '../../config/enums';
import { useAppSelector } from '../../hooks';
import { AssistantProps } from '../../interfaces/component';
import { getLastHistoryId, sortBySequence } from '../../store/slices/chat';
import { getMeta } from '../../store/slices/meta';
import { extractVideoCode, uuidV4 } from '../../utils';
import { replaceNewRowSymbols } from '../../utils/formatting';
import MarkdownLink from '../Markdown/link';
import { Media } from '../Media';
import OptionList from './options';
import { flickerEffect } from './variants';

const Assistant = ({ message, itemId }: AssistantProps) => {
  const { pd } = useAppSelector(getMeta);
  const isLast = useAppSelector(getLastHistoryId) === itemId;
  const { base: baseFlicker } = flickerEffect({ isTyping: !!message.isStreaming });
  const sortedContent = [...message.content].sort(sortBySequence);

  return (
    <>
      {sortedContent.map((it) => {
        if (it.type === Definition.text) {
          return (
            <div key={uuidV4()} className="tw--flex tw--flex-col tw--space-y-[10px]" data-e2e="assistant-text">
              <span className={baseFlicker()}>
                <Markdown
                  key={uuidV4()}
                  components={{
                    a(props) {
                      return <MarkdownLink properties={props} />;
                    },
                  }}
                >
                  {replaceNewRowSymbols(it[it.type] || '')}
                </Markdown>
              </span>
            </div>
          );
        }

        if (it.type === Definition.buttons && isLast) {
          return (
            <div key={uuidV4()} className="tw--flex tw--flex-col tw--space-y-[10px]">
              <OptionList options={it[it.type]} />
            </div>
          );
        }

        if (it.type === Definition.video) {
          return (
            <Media
              e2e="assistant-iframe"
              key={uuidV4()}
              title={it[it.type]?.title || ''}
              background={`url(https://img.youtube.com/vi/${extractVideoCode(it[it.type]?.url)}/hqdefault.jpg)`}
              url={extractVideoCode(it[it.type]?.url || 'https://www.youtube.com/embed/g4B8Dhl4pxY')}
              type={Definition.video}
            />
          );
        }

        if (it.type === Definition.image) {
          return (
            <Media
              key={uuidV4()}
              e2e="assistant-img"
              image={it[it.type]?.url || ''}
              background={`url("${it[it.type]?.url}")`}
              type={Definition.image}
              title={it[it.type]?.title}
            />
          );
        }

        if (it.type === Definition.payment) {
          return `${it[it.type]} ${pd.displayPlanPrice} ${pd.billingFrequencyTmsg}`;
        }

        if (it.type === Definition.email) {
          return it[it.type];
        }
      })}
    </>
  );
};

export const MemoizedAssistant = React.memo(Assistant);

export default MemoizedAssistant;
