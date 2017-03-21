import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <AppContainer>
    <App />
  </AppContainer>
  </Provider>
  , document.querySelector('.root')
);
