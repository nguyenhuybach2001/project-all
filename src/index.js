import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
// import './index.css';

import { createStore, applyMiddleware } from 'redux';
import App from "./App";
import { loadPosts } from "./redux/actions/postAction";
import rootReducer from './redux/reducers';
import reportWebVitals from "./reportWebVitals";
const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(loadPosts());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <App />
    </Provider>
);

reportWebVitals();
