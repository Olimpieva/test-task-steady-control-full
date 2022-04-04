import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers/';
import App from './components/App/App';

import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(reducers, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
