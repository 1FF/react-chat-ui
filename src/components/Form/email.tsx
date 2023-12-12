import { useEffect, useRef, useState } from 'react';

import { AllEvents } from '../../config/enums';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { intent } from '../../services/intentions';
import { track } from '../../services/tracking';
import { getConfig } from '../../store/slices/config';
import { getEmailIntentions, setEmail, setIsEmailLoading } from '../../store/slices/intentions';
import { IconBtn } from '../Button';
import { Input } from '../Input/basic';
import { layoutFoot as variant } from '../Layout/variants';

export const EmailForm = () => {
  const dispatch = useAppDispatch();
  const meta = useAppSelector((state) => state.meta);
  const { translations } = useAppSelector(getConfig);
  const { isLoading } = useAppSelector(getEmailIntentions);
  const { base, input, button } = variant();
  const [email, setCurrentEmail] = useState<string | ''>('');
  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    track({
      eventType: AllEvents.emailField,
      systemType: meta.systemType,
      utmParams: meta.marketing.lastUtmParams,
      customerUuid: meta.cid,
    });

    setTimeout(() => {
      if (!inputElement.current) { return }
      inputElement.current.focus();
    }, 500);
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value.trim();
    setCurrentEmail(currentValue);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (email === '') {
      return;
    }

    dispatch(setIsEmailLoading(true));
    dispatch(setEmail(email));
    intent.core.emit(intent.type.email, { email });
    setCurrentEmail('');
  };

  return (
    <form
      className={base()} onSubmit={handleFormSubmit}
      data-e2e="email-form"
    >
      <div className={input()}>
        <Input
          e2e="email-input"
          isLoading={isLoading}
          name="email"
          onChange={handleInputChange}
          ref={inputElement}
          placeholder={translations.emailPlaceholder}
          type="email"
          value={email}
        />
      </div>
      <div className={button()}>
        <IconBtn onClick={handleFormSubmit} e2e="email-validate-btn">
          <svg
            fill="currentColor" viewBox="0 0 24 24"
            width="20px" height="20px"
          >
            <path
              // eslint-disable-next-line max-len
              d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"
            />
          </svg>
        </IconBtn>
      </div>
    </form>
  );
};

export default EmailForm;
