import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom' 
import { Button } from 'react-bootstrap'
import axios from 'axios'
import MeetingCard from '../components/MeetingCard/MeetingCard'
import TitleBlock from '../components/TitleBlock/TitleBlock'

const Meetings = () => {
    const [meetings, setMeetings] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/meetings')
            .then(response => setMeetings(response.data))
    }, [])

    return (
        <>
            <TitleBlock subTitle={"Meetings"} titleStart={"Keep"} titleMid={"Coming"} titleEnd={"Back"} titleFill={"Attending meetings is the backbone of a solid program of recovery. Regularly identifying as an addict is very important. Sharing your experience, strength, and hope is helpful for you, as well as others. After all, we can only keep what we have by giving it away. A homegoup is the meeting you attend regularly and where you offer a majority of your service. If you don't already have a homegroup, select one now by clicking the link in the descriptions below."} />
            {
                meetings.length > 0 ? meetings.map((meeting, id) => (
                    <MeetingCard key={id} meeting={meeting} />
                )) :
                    <>
                        <h2 className="mx-5">No meetings are currently listed...</h2>
                        <Link to="/add-meeting"><Button variant="primary" className="m-3"> Add a meeting</Button></Link>
                    </>
            }
            <hr />
        </>
    )
}

export default Meetings