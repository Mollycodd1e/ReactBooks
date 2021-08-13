import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './header';
import {createMemoryHistory} from 'history';
import {configureStore} from '@reduxjs/toolkit';

let store;
let mockStore;
let history;

const MOCK_BOOKS = {
  items: {
    0: {
      volumeInfo: '',
      categories: ['1'],
      description: '',
      authors: ['1', '2'],
    },
    1: {
      volumeInfo: '',
      categories: ['1'],
      description: '',
      authors: ['1', '2'],
    },
    2: {
      volumeInfo: '',
      categories: ['1'],
      description: '',
      authors: ['1', '2'],
    }
  }
};

describe('Component: Header', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  })

  it('should render correctly', () => {
    store = mockStore({
      DATA: {books: MOCK_BOOKS},
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
