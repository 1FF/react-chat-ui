import { useAppSelector } from '@/hooks';

import { getConfig } from '@/store/slices/config';

import { Input } from '@/components/Input';
import { Btn } from '@/components/Button';

import { layoutFoot as variant } from './variants';

export const LayoutFoot = () => {
  const { themeId: theme } = useAppSelector(getConfig);
  const { base, input, button } = variant({ theme });

  const inputType = 'email'; // DEV Note: determine the type base on the stream parameter
  const inputLoadingState = false; // DEV Note: determine the isLoading base on the stream parameter

  return (
    <div className={ base() }>
      <div className={ input() }>
        <Input
          type={ inputType } isLoading={ inputLoadingState }
          placeholder="test placeholder text"
        />
      </div>

      <div className={ button() }>
        <Btn text="Submit" />
      </div>
    </div>
  );
};

export default LayoutFoot;
