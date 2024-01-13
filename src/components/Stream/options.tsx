import { uid } from 'uid';
import { Btn } from '../Button';
import { Link } from '../Link';
import { roles } from '../../config';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { track } from '../../services/tracking';
import { fillUserHistoryData, setOutgoing } from '../../store/slices/chat';
import { getMeta } from '../../store/slices/meta';
import { ButtonOptions } from './assistant';
import { AllEvents } from '../../config/analytics';

export interface BaseOptions extends ButtonOptions {
  id: string, link: string, noStream: boolean
}

interface OptionsListProps {
  options: BaseOptions[]
}

type HistoryId = string

export const OptionList = ({ options = [] }: OptionsListProps) => {
  const dispatch = useAppDispatch();
  const meta = useAppSelector(getMeta);
  const isFirstUserMessage = !useAppSelector(state => state.chat.historyIds.find((historyId: HistoryId) => state.chat.historyData[historyId][0] === roles.user));

  const setOption = (val: string, sequence: number) => {
    dispatch(fillUserHistoryData({ content: val }));
    dispatch(setOutgoing(val));
    if (isFirstUserMessage) {
      track({
        eventType: AllEvents.buttonClick + sequence,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
      });
    }
  };

  const setMessage = (val: string) => {
    dispatch(fillUserHistoryData({ content: val }));
  };

  return options.map(({ id, text, value, link, sequence, noStream }) => (
    link
      ? (
        <Link
          key={uid()}
          text={text}
          href={link}
        />
      )
      : (
        <Btn
          key={uid()}
          text={text}
          onClick={noStream ? () => setMessage(value) : () => setOption(value, sequence)}
          e2e="option-button"
        />
      )
  ));
};

export default OptionList;
