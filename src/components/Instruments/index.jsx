import { useAppDispatch, useAppSelector } from '@/hooks';
import { getConfig, setTheme } from '@/store/slices/config';
import buttons from './variants';

const Instruments = () => {
  const dispatch = useAppDispatch();
  const setUiTheme = (theme = null) => dispatch(setTheme(theme));
  const { tools: hasTools } = useAppSelector(getConfig);
  const { base } = buttons({ hidden: !hasTools });

  return (
    <div className={ base() }>
      <button
        type="button"
        onClick={ () => setUiTheme('light') }
      >
        Light
      </button>

      <button
        type="button"
        onClick={ () => setUiTheme('dark') }
      >
        Dark
      </button>
    </div>
  );
};

export default Instruments;
