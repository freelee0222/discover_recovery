import React from 'react'
import { Link } from 'react-router-dom'
import { useMember } from '../components/MemberContext/MemberContext'
import TitleBlock from '../components/TitleBlock/TitleBlock'

const Admin = () => {
    const { member } = useMember()

    return (
        <>
            <TitleBlock titleStart="Admin." titleMid="Tools">
            <div className="headerBox boxCenter">
                <Link to="/member-list"><button className="btn btn-secondary m-3">View Members</button></Link>
                <Link to="/add-activity"><button className="btn btn-secondary m-3">Add an Activity</button></Link>
                <Link to="/add-meeting"><button className="btn btn-secondary m-3">Add a Meeting</button></Link>
                <p>{`Made Administrator by: ${member.madeAdminBy}`}</p>
            </div>
            </TitleBlock>
        </>
    )
}

export default Admin