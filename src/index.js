import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './styles/sanitize.css';
import './styles/app.css';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
