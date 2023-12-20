import { uid } from 'uid';
import { Btn } from '@/components/Button';
import { Link } from '@/components/Link';
import { roles } from '@/config';
import { customEvents } from '@/config/analytics';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { track } from '@/services/tracking';
import { fillUserHistoryData, setOutgoing } from '@/store/slices/chat';
import { getMeta } from '@/store/slices/meta';

export const OptionList = ({ options = [] }) => {
  const dispatch = useAppDispatch();
  const meta = useAppSelector(getMeta);
  const isFirstUserMessage = !useAppSelector(state => state.chat.historyIds.find(historyId => state.chat.historyData[historyId][0] === roles.user));

  const setOption = (val, sequence) => {
    dispatch(fillUserHistoryData({ content: val }));
    dispatch(setOutgoing(val));
    if (isFirstUserMessage) {
      track({
        eventType: customEvents.buttonClick + sequence,
        systemType: meta.systemType,
        utmParams: meta.marketing.lastUtmParams,
        customerUuid: meta.cid,
      });
    }
  };

  const setMessage = (val) => {
    dispatch(fillUserHistoryData({ content: val }));
  };

  return options.map(({ id, text, value, link, sequence, noStream }) => (
    link
      ? (
        <Link
          key={ uid() }
          text={ text }
          href={ link }
        />
      )
      : (
        <Btn
          key={ uid() }
          text={ text }
          onClick={ noStream ? () => setMessage(value) : () => setOption(value, sequence) }
          e2e="option-button"
        />
      )
  ));
};

export default OptionList;
