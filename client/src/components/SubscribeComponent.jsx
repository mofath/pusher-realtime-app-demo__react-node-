import React, { useEffect, useState, useContext } from "react";
import { PusherContext } from "../context";

const SubscribeComponent = () => {
  const [state, setState] = useState({ title: "", evenName: "", data: "" });
  const { pusherClient } = useContext(PusherContext);

  useEffect(() => {
    if (!navigator.onLine) {
      return null;
    }

    const channel = pusherClient.subscribe("channel");
    var callback = (eventName, data) => {
      setState({
        title: "bind global channel:",
        evenName: eventName,
        data: JSON.stringify(data),
      });
    };
    channel.bind_global(callback);
  }, []);

  return (
    <div>
      <h4>
        Title: <span style={{ color: "blue" }}> {state.title}</span>
      </h4>
      <h4>
        Event Name: <span style={{ color: "blue" }}>{state.evenName} </span>
      </h4>
      <h4>
        Data: <span style={{ color: "blue" }}>{state.data}</span>
      </h4>
    </div>
  );
};

export default SubscribeComponent;
