import React from 'react';
import Markdown from 'react-markdown';

import { Definition } from '../../config/enums';
import { useAppSelector } from '../../hooks';
import { AssistantProps } from '../../interfaces/component';
import { getChat, sortBySequence } from '../../store/slices/chat';
import { getConfig } from '../../store/slices/config';
import { getMeta } from '../../store/slices/meta';
import { uuidV4 } from '../../utils';
import MarkdownLink from '../Markdown/link';
import { Iframe } from '../Video';
import OptionList from './options';
import { flickerEffect } from './variants';

const Assistant = ({ message, itemId }: AssistantProps) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { isStreaming } = useAppSelector(getChat);
  const { pd } = useAppSelector(getMeta);
  const isLast = useAppSelector((state) => state.chat.historyIds.length - 1 === state.chat.historyIds.indexOf(itemId));
  const { base: baseFlicker } = flickerEffect({ isTyping: isStreaming && isLast, theme });
  const sortedContent = [...message.content].sort(sortBySequence);

  return (
    <>
      {sortedContent.map((it) => {
        if (it.type === Definition.text) {
          return (
            <div
              key={uuidV4()}
              className="tw--flex tw--flex-col tw--space-y-[10px]"
            >
              <span className={baseFlicker()}>
                <Markdown components={{
                  a(props) { return <MarkdownLink properties={props} />; }
                }}
                >{it[it.type]}
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
            <Iframe
              key={uuidV4()}
              title={it[it.type]?.title || 'video'}
              url={it[it.type]?.url || 'https://www.youtube.com/embed/g4B8Dhl4pxY'}
            />
          );
        }

        if (it.type === Definition.image) {
          return (
            <img
              key={uuidV4()}
              className="w-full tw--h-auto tw--py-4"
              src={it[it.type]?.url}
              alt={it[it.type]?.alt || 'chat-image'}
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
