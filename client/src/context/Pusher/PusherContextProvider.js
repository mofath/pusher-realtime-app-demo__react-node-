import React, { useEffect, useMemo } from 'react';
import Pusher from 'pusher-js';
import config from '../../config';
import PusherContext from './PusherContext';

const PusherContextProvider = (props) => {
  const pusherClient = useMemo(
    () => new Pusher(config.pusher.key, { cluster: config.pusher.cluster }),
    []
  );

  useEffect(() => () => pusherClient.disconnect(), [pusherClient]);

  return (
    <PusherContext.Provider value={{ pusherClient }}>
      {props.children}
    </PusherContext.Provider>
  );
};

export default PusherContextProvider;
