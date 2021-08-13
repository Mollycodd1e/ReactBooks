import React from 'react';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import App from './components/app/app';
import reducer from './store/reducer';
import {fetchBooks} from './store/api-action';
import {createAPI} from './components/services/api';
import browserHistory from './browser-history';

export const store = configureStore({reducer: reducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: createAPI(
        () => store.dispatch(fetchBooks())),
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
