import React from 'react';
// components
import Navbar from './Navbar'
import HomePage from './HomePage'
import Cryptocurrencies from './Cryptocurrencies'
import Watchlist from './Watchlist'
import Exchanges from './Exchanges'
import About from './About'
import News from './News'
import { CSSTransition} from "react-transition-group";
// router
import {BrowserRouter as Router, Route, } from "react-router-dom";
export default function Coindex() {
    const routes = [
        { path: '/cryptocurrencies', name: 'Cryptocurrencies', Component: Cryptocurrencies },
        { path: '/exchanges', name: 'Exchanges', Component: Exchanges },
        { path: '/watchlist', name: 'Watchlist', Component: Watchlist },
        { path: '/news', name: 'News', Component: News },
        { path: '/about', name: 'About', Component: About },
        { path: '/', name: 'HomePage', Component: HomePage },
    ]
    return (
        <div className='container'>
        <Router>
            <Navbar />
            <Route path='/' exact Component={HomePage} />
            {routes.map(({path, Component}) => (
                <Route exact key={path} path={path}>
                {({ match }) => (
                    <CSSTransition
                        in={match !== null}
                        timeout={200}
                        classNames='page'
                        unmountOnExit 
                    >
                        <div className='page'>
                            <Component/>
                        </div>
                    </CSSTransition>
                )}
                </Route>
            ))}
        </Router>
        </div>
    );
}
