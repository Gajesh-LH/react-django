import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ToastContainer} from 'react-toastify';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {MainPage} from './components/MainPage.jsx';
import {CreateUser} from './components/CreateUser.jsx';

ReactDOM.render(
        <div>
            <ToastContainer hideProgressBar={true} />
            <HashRouter>
                <Switch>
                    <Route exact={true} path="/" component={MainPage} />
                    <Route exact={true} path="/create" component={CreateUser} />
                </Switch>
            </HashRouter>
        </div>,
    document.getElementById('root')
);

