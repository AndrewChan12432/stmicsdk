import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="error">
            <h1>404 Error</h1>
            <Link to="/">
            <p>Home</p>
            </Link>
        </div>
    )
}
