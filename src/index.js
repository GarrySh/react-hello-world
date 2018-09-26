import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
  tracks: [
    'smells like teen spirit',
    'enter sandman',
  ]
}
const playlist = (state = initialState, action) => {
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

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
