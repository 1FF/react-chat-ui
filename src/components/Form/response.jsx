import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { isNonEmptyStr } from '@/utils';
import { getResponseIntentions, setResponse, setResponseLoadingStatus } from '@/store/slices/intentions';
import { getConfig } from '@/store/slices/config';
import { useAppSelector } from '@/hooks';
import { Input } from '@/components/Input';
import { IconBtn } from '@/components/Button';

import { layoutFoot as variant } from '../Layout/variants';

// DEV NOTE: Keep the form as close as possible to the email form so we can extract an abstract component on a later stage
export const ResponseForm = () => {
  const dispatch = useDispatch();
  const { themeId: theme } = useAppSelector(getConfig);
  const { isLoading, error } = useAppSelector(getResponseIntentions);
  const { base, input, button } = variant({ theme });

  const [response, setCurrentResponse] = useState('');
  const [isValidResponse, setIsValidResponse] = useState(true);

  const handleInputChange = (e) => {
    const currentValue = e.target.value.trim();
    setCurrentResponse(currentValue);
    setIsValidResponse(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (isNonEmptyStr(response)) {
      setIsValidResponse(false);
      return;
    }

    dispatch(setResponseLoadingStatus(true));
    dispatch(setResponse(response));
    setCurrentResponse('');
    setIsValidResponse(true);
  };

  return (
    <>
      { /* DEV NOTE: Fix this validation response messages on a later stage || Abstract the form as it different only by the placeholder and type values */ }
      { (!isValidResponse || error) && <div className="tw--pl-[35px] tw--text-[#ff0043] tw--font-medium">{ error || 'Invalid response' }</div> }
      <form className={ base() } onSubmit={ handleFormSubmit }>
        <div className={ input() }>
          <Input
            type="response"
            name="response"
            value={ response }
            placeholder="Type your answer ..."
            onChange={ handleInputChange }
            isLoading={ isLoading }
          />
        </div>
        <div className={ button() }>
          <IconBtn onClick={ handleFormSubmit }>
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
    </>
  );
};

export default ResponseForm;
