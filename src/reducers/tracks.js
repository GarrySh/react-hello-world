const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRACK': {
      return [...state, action.payload];
    }
    case 'REMOVE_TRACK': {
      return state;
    }
    default: {
      return state;
    }
  }
};