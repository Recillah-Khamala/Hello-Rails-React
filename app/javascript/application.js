// Entry point for the build script in your package.json
import React from 'react';
import '@hotwired/turbo-rails';
import './controllers';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

ReactDOM.render(
    <Provider store= {store}>
    <App />,
    </Provider>,
    document.getElementById('root'),
);
