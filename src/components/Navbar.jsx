import React from 'react'
import './style.css'
import './nav.css'
import Logo from './Logo'
import SerachBox from './SerachBox'
import { Link } from "react-router-dom";

export default function Navbar(){
    const routes = [
        { path: '/cryptocurrencies', name: 'Cryptocurrencies'},
        { path: '/exchanges', name: 'Exchanges'},
        { path: '/watchlist', name: 'Watchlist'},
        { path: '/news', name: 'News'},
        { path: '/about', name: 'About'},
    ]
    return (
        <nav>
            <Logo/>
            <div className="menu">
            {routes.map( route => {
                return <Link 
                    to={route.path}
                    key={route.path}
                    activeclassname='active'
                    exact="true"
                >{route.name}</Link>
            })}
            </div>
            <SerachBox/>
        </nav>
    )
}