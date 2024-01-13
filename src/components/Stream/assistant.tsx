import Markdown from 'react-markdown';
import { uid } from 'uid';
import { useAppSelector } from '../../hooks';
import { isNonEmptyArr } from '../../utils';
import { getConfig } from '../../store/slices/config';
import { getChat } from '../../store/slices/chat';
import { getMeta } from '../../store/slices/meta';
import { flickerEffect } from './variants';
import OptionList from './options';
import MarkdownLink from '../Markdown/link';

interface TextMessage {
  type: 'text';
  text: string;
  sequence: number;
  id: string;
}

export interface ButtonOptions {
  sequence: number; value: string; text: string; id: string; link: string; noStream: boolean;
}

interface ButtonsMessage {
  type: 'buttons';
  buttons: ButtonOptions[];
  sequence: number;
  id: string;
}

interface PaymentMessage {
  type: 'payment';
  payment: string;
  sequence: number;
  id: string;
}

interface EmailMessage {
  type: 'email';
  email: string;
  sequence: number;
  id: string;
}

interface VideoMessage {
  type: 'video';
  video: {
    url: string, title: string | null
  };
  sequence: number;
  id: string;
  title: string;
}

interface ImageMessage {
  type: 'image';
  image: { url: string, alt: string | null };
  sequence: number;
  id: string;
}

type MessageType = TextMessage | ButtonsMessage | PaymentMessage | EmailMessage | VideoMessage | ImageMessage;

type AssistantProps = {
  message: Array<MessageType>;
  isLast?: boolean;
}

export const Assistant = ({ message = [], isLast = false }: AssistantProps) => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { isStreaming } = useAppSelector(getChat);
  const { pd } = useAppSelector(getMeta);
  const { base: baseFlicker } = flickerEffect({ isTyping: isStreaming && isLast, theme });

  return (
    <>
      {message.map(it => {
        if (it.type === 'text') {
          return (
            <div
              key={uid()}
              className="tw--flex tw--flex-col tw--space-y-[10px]"
            >
              <span
                className={baseFlicker()}
                data-e2e="stream-assistant-msg"
              >
                <Markdown components={{
                  a(props) { return <MarkdownLink properties={props} />; }
                }}
                >{it[it.type]}
                </Markdown>
              </span>
            </div>
          );
        }

        if (it.type === 'buttons' && isNonEmptyArr(it.buttons) && isLast) {
          return (
            <div key={uid()} className="tw--flex tw--flex-col tw--space-y-[10px]">
              <OptionList options={it[it.type]} />
            </div>
          );
        }

        if (it.type === 'video') {
          return (
            <iframe
              className="w-full tw--h-80 tw--py-4" key={uid()}
              title={it[it.type].title || 'Missing title'} src={it[it.type].url + '?enablejsapi=1&rel=0'}
              allow="fullscreen"
            />
          );
        }

        if (it.type === 'image') {
          return (
            <img
              key={uid()}
              className="w-full tw--h-auto tw--py-4"
              src={it[it.type].url}
              alt={it[it.type].alt || 'chat-image'}
            />
          );
        }

        if (it.type === 'payment') return it[it.type] + ' ' + pd.displayPlanPrice + ' ' + pd.billingFrequencyTmsg;

        if (it.type === 'email') return it[it.type];
      })}
    </>
  );
};

export default Assistant;
