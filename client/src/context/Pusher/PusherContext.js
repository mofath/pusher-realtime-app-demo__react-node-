import { createContext } from "react";

const INITIAL_STATE = {
  setupPusherChannel: () => {
    return {
      channel: null,
      pusherClient: null,
    };
  },
};

const PusherContext = createContext({ ...INITIAL_STATE });

export default PusherContext;
