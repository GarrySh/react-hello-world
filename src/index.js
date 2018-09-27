import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './reducers';

// const initialState = [
//   'smells like teen spirit',
//   'enter sandman',
// ];

// const playlist = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_TRACK': {
//       return [...state, action.payload];
//     }
//     default: {
//       return state;
//     }
//   }
// };

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
