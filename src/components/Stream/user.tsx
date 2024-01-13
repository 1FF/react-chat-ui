import { useAppSelector, useAppDispatch } from '../../hooks';
import { getConfig } from '../../store/slices/config';
import { resendMessage } from '../../store/slices/chat';
import { IconBtn } from '../../components/Button';
import { roles } from '../../config';
import { streamBubble as variant } from './variants';

export type UserProps = {
  content: string,
  sent: boolean,
  resend: boolean,
}

export const User = ({ content, resend, sent }: UserProps) => {
  const dispatch = useAppDispatch();
  const { themeId: theme } = useAppSelector(getConfig);
  const { action, separator } = variant({ theme, type: roles.user });

  const onResend = (item: string) => {
    dispatch(resendMessage(item));
  };

  return (
    <div className={separator()}>
      <span>
        {content}
      </span>
      {(resend && !sent) && (
        <div className={action()}>
          <IconBtn outlined onClick={() => onResend(content)}>
            <svg
              fill="currentColor" viewBox="0 0 24 24"
              width="20px" height="20px"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
            </svg>
          </IconBtn>
        </div>
      )}
    </div>
  );
};

export default User;
