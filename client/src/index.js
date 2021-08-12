import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { PusherContextProvider } from './context';
import registerServiceWorker from './registerServiceWorker';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <PusherContextProvider>
      <App />
    </PusherContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();
