import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import Add from './pages/Add'
import Bookmarks from './pages/Bookmarks'

import store from './store'

render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={Add} />
                <Route exact path="/bookmarks" component={Bookmarks} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)
