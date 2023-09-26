import { object } from 'prop-types';
import { useAppDispatch } from '@/hooks';

import { setConfig } from '@/store/slices/config';
import { setMeta } from '@/store/slices/meta';
import * as nodeEvents from 'events';
import { LayoutBase, LayoutHead, LayoutFoot } from '@/components/Layout';
import { StreamBase } from '@/components/Stream';
import Instruments from '@/components/Instruments';

const eventEmitter = new nodeEvents.EventEmitter();
export const AppBase = ({ config = {} }) => {
  const dispatch = useAppDispatch();
  console.log(eventEmitter);
  // Set defaults
  dispatch(setMeta(config.meta));
  dispatch(setConfig(config.app));

  return (
    <>
      <Instruments />
      <LayoutBase
        head={ <LayoutHead /> }
        stream={ <StreamBase /> }
        foot={ <LayoutFoot /> }
      />

    </>
  );
};

AppBase.propTypes = {
  config: object.isRequired,
};

export default AppBase;
