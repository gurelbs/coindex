import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Logo() {
    return (
        <div className="logo-wrap">
            <Link to='/' className="logo">Coindex</Link>
        </div>
    )
}
