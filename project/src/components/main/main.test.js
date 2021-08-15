import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Main from './main.jsx';

let store;
let mockStore;
let history;

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

describe('Component: Main', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({
      DATA: {books: (MOCK_BOOKS), isDataLoaded: true},
      CHANGER: {activeCategories: 'all', activeType: 'relevance'},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Computers/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Book image/i)).toBeInTheDocument();
  });
});
