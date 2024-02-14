import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { useMember } from '../../components/MemberContext/MemberContext'
import axios from 'axios'
import moment from 'moment'
import '../../styles/card.css'

const MeetingCard = ({ meeting }) => {
    const navigate = useNavigate()
    const { member, setMember } = useMember()
    const hourMin = meeting.time.split(':')

    function updateHomegroup(e) {
        setMember(values => ({ ...values, homegroup: e.target.dataset.id }))
        axios.put('http://localhost:4000/api/edit-account', member)
        navigate('/dashboard')
    }

    return (
        <>
            <Card className="card">
                <Card.Body>
                    <Card.Title className="cardTitle">{meeting.name}</Card.Title>
                    <Card.Subtitle className="cardSubtitle mb-2 text-muted">{meeting.type}</Card.Subtitle>
                    <hr />
                    <Card.Text className="cardTime"> {moment({hours: hourMin[0], minutes:hourMin[1]}).format('h:mm a')}</Card.Text>
                    <Card.Text className="cardDays">{meeting.days.join(', ')}.</Card.Text>
                    <Card.Text className="cardDescription">{meeting.description}</Card.Text>
                    <div className="block"></div>
                    <Card.Text className="cardLocation">{meeting.location}</Card.Text>
                    <hr/>
                    {member && member.isAdmin ? <Link to={`/edit-meeting/${meeting._id}`}><Button variant="secondary" className="edit">Edit this meeting</Button></Link> : null }
                    {member && member.homegroup === meeting.name ? <Link to='/homegroup'><Button variant="warning">My Homegroup</Button></Link> : null }
                    {member && member.homegroup !== meeting.name ? <Button variant="primary" data-id={meeting.name} onClick={updateHomegroup}>Make this my homegroup.</Button>: null }
                </Card.Body>
            </Card>
        </>
    )
}

export default MeetingCard