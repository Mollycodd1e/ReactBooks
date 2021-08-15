import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import userEvent from '@testing-library/user-event';
import {Router} from 'react-router-dom';
import configureStore from 'redux-mock-store';
import {createMemoryHistory} from 'history';
import Book from './book.jsx';

let store;
let mockStore;
let history;

const MOCK_BOOK = {
  volumeInfo: {
    categories: ['Computers'],
    title: 'JavaScript',
    description: 'About JS',
    authors: ['Ivan'],
    imageLinks: undefined,
  },
};

describe('Component: Book', () => {
  beforeAll(() => {
    mockStore = configureStore({});
    history = createMemoryHistory();
  });

  it('should render correctly', () => {
    store = mockStore({
      DATA: {books: (MOCK_BOOK), isDataLoaded: true},
      CHANGER: {activeCategories: 'all', activeType: 'relevance'},
    });

    render(
      <Provider store={store}>
        <Router history={history}>
          <Book book={MOCK_BOOK} onBookHover={jest.fn()}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/Computers/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Book image/i)).toBeInTheDocument();
  });

  it('onOfferHover should called when user hover Book', () => {
    const onBookHover = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Book book={MOCK_BOOK} onBookHover={onBookHover}/>
        </Router>
      </Provider>,
    );

    userEvent.hover(screen.getByLabelText('article'));
    expect(onBookHover).toBeCalled();
  });
});
