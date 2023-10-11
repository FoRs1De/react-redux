import * as a from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  if (action.type === a.ADD_BOOK) {
    return [...state, action.payload];
  } else {
    return state;
  }
};

export default booksReducer;
