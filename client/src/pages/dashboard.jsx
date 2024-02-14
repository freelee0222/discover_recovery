import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useMember } from '../components/MemberContext/MemberContext'

const Dashboard = () => {
    const { member } = useMember()

    return (
        <>
            {member ?
                <main className="headerBox">
                    <h1 className="col-md-12 headerBlue">{member.firstName} <span className="headerBlack"> {member.lastName[0]}.</span> {""}</h1>
                    <h2 className="col-md-12">{moment(member.cleanDay).format("MMMM Do YYYY")}</h2>
                    <div className="block col-md-3"></div>
                    <hr />

                    <h2 className="col-md-12 subHeader">Sponsor</h2>
                    {member.sponsorName === 'none' ?
                        <>
                            <h2 className="headerBlue">NONE</h2>
                            <p className="warning">Get a Sponsor!</p>
                            <Link to="/sponsor">Sponsors</Link>
                        </> : <p>{member.sponsorName}</p>
                    }
                    <hr />

                    <h2 className="col-md-12 subHeader">HomeGroup</h2>
                    {member.homegroup === 'none' ?
                        <>
                            <h2 className="headerBlue">NONE</h2>
                            <p className="warning">Get a Homegroup!</p>
                            <Link to="/meetings">Meetings</Link>
                        </> : <p>{member.homegroup}</p>
                    }
                    <hr />
                    
                    <Link to="/edit-account"><button className="btn btn-secondary m-3">Edit Profile</button></Link>
                </main> : null}
        </>
    )
}

export default Dashboard