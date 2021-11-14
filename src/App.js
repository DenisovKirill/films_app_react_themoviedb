import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';

import { Main } from './modules/main/Main';

import './App.css';

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Main} />
                    </Switch>
                </BrowserRouter>
            </Provider>

        )
    }
}

export default App;
