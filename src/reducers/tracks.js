const initialState = [
  {
    id: 1,
    name: 'My super track',
  },
  {
    id: 2,
    name: 'My own tracks',
  }
];

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