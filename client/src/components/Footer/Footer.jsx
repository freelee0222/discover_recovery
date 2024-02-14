import React from 'react'
import { Link } from 'react-router-dom'
import { useMember } from '../../components/MemberContext/MemberContext'
import './footer.css'

function Footer() {
    const { member, setMember } = useMember()

    function logout() {
        setMember(null)
        window.location = '/'
    }

    return (
        <footer className="footer fixed-bottom">
            Discover Recovery &copy; 2023
            {member && member.isAdmin ? <Link to='/admin'><small className="adminText">Admin. Tools</small></Link> : null}
            {member ? <Link onClick={logout}><small className="adminText">Log Out</small></Link> : null}
        </footer>
    )
}

export default Footer