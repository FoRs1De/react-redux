import * as a from './actionTypes';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  if (action.type === a.ADD_BOOK) {
    return [...state, action.payload];
  } else if (action.type === a.DELETE_BOOK) {
    const id = action.payload;
    return state.filter((item) => item.id !== id);
  } else {
    return state;
  }
};

export default booksReducer;
