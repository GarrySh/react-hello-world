import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';
import Dropdown from './Dropdown';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import Menu from './Menu';
import history from './history';
import Track from './Track'
import { Router, Route, Switch } from 'react-router';
import { routerMiddleware } from 'connected-react-router'
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);

// const newRoute = () => <div>New route</div>
const Error = () => <div>Error</div>

ReactDom.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Menu />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/dropdown" component={Dropdown} />
          <Route path="/tracks/:id" component={Track} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
