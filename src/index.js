import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Reducers from './Reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/bootstrap/bootstrap.min.css';
import './styles/app.css';

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
