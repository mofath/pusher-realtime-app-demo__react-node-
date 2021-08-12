import { createContext } from 'react';

const INITIAL_STATE = {
  pusherClient: null,
};

const PusherContext = createContext({ ...INITIAL_STATE });

export default PusherContext;
