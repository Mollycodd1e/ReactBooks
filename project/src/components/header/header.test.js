import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './header.jsx';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';

let store;
let mockStore;
let history;

const MOCK_BOOKS = {
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
};

describe('Component: Header', () => {
  beforeAll(() => {
    mockStore = configureStore();
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
          <Header />
        </Router>
      </Provider>
    )

    expect(screen.getByText(/Not Found books/i)).toBeInTheDocument();
  });
});
