const initialState = [
  'My home playlist',
  'My work playlist',
];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PLAYLIST': {
      return [...state, action.payload];
    }
    case 'REMOVE_PLAYLIST': {
      return state;
    }
    default: {
      return state;
    }
  }
};