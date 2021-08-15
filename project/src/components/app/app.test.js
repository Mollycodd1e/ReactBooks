import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './app.jsx';
import thunk from 'redux-thunk'
import {createAPI} from '../services/api.js';
import {AppRoute} from '../../const.js';

let history = null;
let store = null;
let fakeApp = null;
let api = null;
api = createAPI(() => {});
const createFakeStore = configureStore([thunk.withExtraArgument(api)]);

const MOCK_BOOKS = [{
  volumeInfo: {
    categories: ['Computers'],
    title: 'JavaScript',
    description: 'About JS',
    authors: ['Ivan'],
    imageLinks: undefined,
  },
  volumeInfo: {
    categories: ['Music'],
    title: 'Morgenshtern',
    description: 'whatta',
    authors: ['who'],
    imageLinks: undefined,
  }
}];


describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    store = createFakeStore({
      DATA: {books: (MOCK_BOOKS), isDataLoaded: true},
      CHANGER: {activeCategories: 'all', activeType: 'relevance'},
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "Main" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/No books found/i)).toBeInTheDocument();
  });
});
