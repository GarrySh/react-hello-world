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

const trackListEl = document.querySelector('.trackList');
const trackInputEL = document.querySelector('.trackInput');

store.subscribe(() => {
  trackInputEL.value = '';
  trackListEl.innerHTML = '';
  store.getState().tracks.forEach((track, index) => {
    const liEl = document.createElement('li');
    liEl.textContent = track;
    trackListEl.appendChild(liEl);
  })
});

const addTrackBtn = document.querySelector('.addTrack');
addTrackBtn.addEventListener('click', (event) => {
  store.dispatch({ type: 'ADD_TRACK', payload: trackInputEL.value });
})