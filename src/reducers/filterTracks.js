const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FIND_TRACK': {
      console.log('find track', action.payload)
      return action.payload;
    }
    default: {
      return state;
    }
  }
};