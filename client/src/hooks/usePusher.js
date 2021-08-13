import { useEffect, useState } from "react";

export const usePusher = ({ channel }) => {
  const [payloads, setPayloads] = useState([]);

  useEffect(() => {
    channel.bind_global((eventName, payload) => {
      setPayloads(() => payload);
    });

    return () => {
      channel.unbind();
    };
  }, [channel]);

  return payloads;
};
