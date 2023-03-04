// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import { Provider } from "react-redux";
import App from './App';

ReactDOM.render(
    <Provider store= {store}>
    <App />,
    </Provider>,
  document.getElementById('root'),
);
