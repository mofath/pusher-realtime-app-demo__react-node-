import React, { useCallback, useContext } from 'react';
import { PusherContext } from '../context';
import { usePusher } from '../hooks/usePusher';

const SubscribeComponent = () => {
  const { setupPusherChannel } = useContext(PusherContext);
  
  const { channel } = setupPusherChannel('channel');

  const payloads = usePusher({ channel });

  return (
    <div>

    </div>
  );
};

export default SubscribeComponent;
