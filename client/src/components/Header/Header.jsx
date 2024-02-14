import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import { useMember } from '../../components/MemberContext/MemberContext'
import './header.css'

function Header() {
    const { member } = useMember()

    return (
        <>
            <Navbar className="sticky-top" expand="md" variant="dark" bg="dark">
                <Navbar.Toggle aria-controls="navbar-nav" className="m-3" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto nav-links">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/activities" className="nav-item">Activities</Link>
                        <Link to="/meetings" className="nav-item">Meetings</Link>
                        <Link to="/sponsor" className="nav-item">Sponsorship</Link>
                        {
                            member ?
                                <Link to="/dashboard" className="nav-item">My Profile</Link> :
                                <Link to="/create-account" className="nav-item">Join Us!</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header