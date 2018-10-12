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
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

const newRoute = () => <div>New route</div>
const Error = () => <div>Error</div>

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Menu />
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/dropdown" component={Dropdown} />
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
