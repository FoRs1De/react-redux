import * as a from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  if (action.type === a.ADD_BOOK) {
    return [...state, action.payload];
  } else if (action.type === a.DELETE_BOOK) {
    const id = action.payload;
    return state.filter((item) => item.id !== id);
  } else if (action.type === a.TOGGLE_FAVORITE) {
    return state.map((book) =>
      book.id === action.payload
        ? { ...book, isFavorite: !book.isFavorite }
        : book
    );
  } else {
    return state;
  }
};

export default booksReducer;
