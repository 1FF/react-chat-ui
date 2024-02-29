import { uuidV4 } from '../../utils';
import { Btn } from '../Button';
import { Link } from '../Link';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { track } from '../../services/tracking';
import { fillUserHistoryData, setOutgoing, userMessageFindOne } from '../../store/slices/chat';
import { getMeta } from '../../store/slices/meta';
import { AllEvents, Roles } from '../../config/enums';
import { OptionsListProps } from '../../interfaces/index';

export const OptionList = ({ options = [] }: OptionsListProps) => {
  const dispatch = useAppDispatch();
  const meta = useAppSelector(getMeta);
  const isFirstUserMessage = !useAppSelector(userMessageFindOne);

  const setOption = (val: string, sequence: number) => {
    dispatch(fillUserHistoryData({ id: uuidV4(), sequence: 1, role: Roles.user, content: { sequence: 1, message: val, resend: false, sent: true, groupId: '' } }));
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
    dispatch(fillUserHistoryData({
      id: uuidV4(),
      sequence: 1,
      role: Roles.user,
      content: {
        sequence: 1,
        message: val,
        resend: false,
        sent: true,
        groupId: ''
      }
    }));
  };

  return [...options].sort((a, b) => a.sequence - b.sequence).map(({ value, link, sequence, noStream }) => (
    link
      ? (
        <Link
          key={uuidV4()}
          text={value}
          href={link}
        />
      )
      : (
        <Btn
          key={uuidV4()}
          text={value}
          onClick={noStream ? () => setMessage(value) : () => setOption(value, sequence)}
          e2e="option-button"
        />
      )
  ));
};

export default OptionList;
