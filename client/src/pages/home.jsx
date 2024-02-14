import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.css'
import TitleBlock from '../components/TitleBlock/TitleBlock'

const Home = () => {
    return (
        <>
            <TitleBlock subTitle={"Welcome To"} titleStart={"Discover"} titleMid={"Recovery"} titleFill={"A place to guide you into recovery with Narcotics Anonymous. Come join us at an upcoming meeting or activity. Everyone is welcome."} />
            <main className="headerBox">
                    <Link to="/create-account" className="home-link">Become a Member!</Link><br/>
                    <Link to="/meetings" className="home-link">Get a Homegroup!</Link><br/>
                    <Link to="/activities"  className="home-link">Get Involved!</Link><br/>
                    <hr/>
                <small className="float-right m-3"><u>If you're already a member, Log in here!</u></small>
                <Link to="/login"><button className="btn btn-primary m-2">Member Login</button></Link>
            </main>
        </>)
}

export default Home