import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store.js';

import { Main } from './modules/main/Main';
import { About } from './modules/about/About.jsx';

import './App.css';

class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/about' component={About} />
                    </Switch>
                </BrowserRouter>
            </Provider>

        )
    }
}

export default App;
