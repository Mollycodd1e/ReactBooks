import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import App from './components/app/app';
import reducer from './store/reducer';
import {fetchBooks} from './store/api-action';
import {createAPI} from './components/services/api';

const store = configureStore({reducer: reducer, middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: createAPI(),
    },
  }),
});

store.dispatch(fetchBooks());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
