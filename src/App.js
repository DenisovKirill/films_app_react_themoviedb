import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';

import { Login } from './modules/login/Login.jsx';
import { Main } from './modules/main/Main';
import { About } from './modules/about/About.jsx';

const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/films' component={Main} />
                    <Route exact path='/favourite' component={Main} />
                    <Route exact path='/about/:id' component={About} />
                </Switch>
            </BrowserRouter>
        </Provider>
    )
};

export default App;
