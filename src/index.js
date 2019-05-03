import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import store from './components/app/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App} path="/"></Route>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
