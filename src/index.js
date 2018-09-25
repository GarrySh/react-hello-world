// import React from 'react';
// import ReactDom from 'react-dom';
// import App from './App';

// ReactDom.render(
//   <App />,
//   document.getElementById('root')
// );

import { createStore } from 'redux';

const playlist = (state = { tracks: [] }, action) => {
  switch (action.type) {
    case 'ADD_TRACK': {
      const { tracks } = state;
      return { tracks: [...tracks, action.payload] };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(playlist);

store.subscribe(() => {
  console.log('subscribe', store.getState())
});

store.dispatch({ type: 'ADD_TRACK', payload: 'Smells like spirit' });
store.dispatch({ type: 'ADD_TRACK', payload: 'Enter Sandman' });