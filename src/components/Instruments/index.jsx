import { useAppDispatch, useAppSelector } from '@/hooks';
import { setTheme } from '@/store/slices/config';

const Instruments = () => {
  const dispatch = useAppDispatch();
  const setUiTheme = (theme = null) => dispatch(setTheme(theme));
  const isVisible = useAppSelector((state) => state.config.isVisible);
  return (
    <div className="tw--fixed tw--flex tw--gap-2 tw--p-3 tw--bg-black tw--text-white">
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
