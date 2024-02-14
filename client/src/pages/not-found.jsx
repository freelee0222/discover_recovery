import React from 'react'
import { Link } from 'react-router-dom'
import gremlin from '../assets/404Gremlin.jpg'
import '../styles/not-found.css'

const NotFound = () => {

    return (
        <>
            <main className="headerBox">
                <h2 className="col-md-12 subHeader">whoops!</h2>
                <h1 className="col-md-12 headerBlue">Not <span className="headerBlack">Found </span></h1>
                <div className="block col-md-3"></div>
                <img id="gremlin" src={gremlin} alt="404 Gremlin" />
                <hr/>
                <small className="col-md-12">Something went wrong, Please go <Link to="/">Home</Link> or try again.</small>
            </main>
        </>
    )
}

export default NotFound