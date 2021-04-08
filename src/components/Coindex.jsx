import React from 'react';
// components
import Navbar from './Navbar'
import HomePage from './HomePage'
import Cryptocurrencies from './Cryptocurrencies'
import Watchlist from './Watchlist'
import Exchanges from './Exchanges'
import About from './About'
import News from './News'
import CoinCard from './CoinCard'
import ExchangesCard from './ExchangesCard'
import NotFound from './NotFound'

import { CSSTransition,TransitionGroup} from "react-transition-group";
// router
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Coindex() {
    const routes = [
        { path: '/cryptocurrencies', name: 'Cryptocurrencies', Component: Cryptocurrencies },
        { path: '/cryptocurrencies/:id', name: 'CoinCard', Component: CoinCard },
        { path: '/exchanges', name: 'Exchanges', Component: Exchanges },
        { path: '/exchanges/:id', name: 'Exchanges', Component: ExchangesCard },
        { path: '/watchlist', name: 'Watchlist', Component: Watchlist },
        { path: '/news', name: 'News', Component: News },
        { path: '/about', name: 'About', Component: About },
        { path: '/', name: 'HomePage', Component: HomePage },
    ]
    return (
        <div className='container'>
        <Router>
            <Navbar />
            <Route render={({location}) => {
                return (<TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        timeout={200}
                        classNames='page'
                        unmountOnExit 
                    >
                    <Switch location={location}>
                        {routes.map(({path, Component}) => {
                            return <Route
                                        key={path}
                                        path={path} 
                                        component={Component}
                                        exact
                                    />
                        })}
                        <Route component={NotFound}/>
                    </Switch>
                    </CSSTransition> 
                </TransitionGroup>)
            }}/>
            </Router>
        </div>
    );
}
