import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const MeetingForm = ({ meetings, params }) => {

    const [meeting, setMeeting] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setMeeting(values => ({ ...values, [name]: value }))
    }

    const handleDays = (e) => {
        const daysArray = meeting.days || []
        e.target.checked ? daysArray.push(e.target.value) : daysArray.splice(daysArray.indexOf(e.target.value), 1)
        setMeeting(values => ({ ...values, days: daysArray }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const feedback = document.querySelector('.feedback')
        feedback.innerHTML = ""
        if (!meeting.days) {
            feedback.innerHTML = "Please select one or more days of the week"
            return
        }
        if (!meeting.type) {
            feedback.innerHTML = "Please select a meeting type"
            return
        }
        if (meetings) {
            editMeeting(meeting)
        } else {
            addMeeting(meeting)
        }
        navigate( "/meetings")
    }

    const checkDays = (days) => {
        if (days) {
            days.forEach(day => {
                let el = document.getElementById(day.trim());
                el.checked = true
            });
        }
    }

    const checkType = (type) => {
        if (type) {
            let el = document.getElementById(type.split(' ')[0]);
            el.checked = true
        }
    }

    useEffect(() => {
        let defaults = meetings
            ? meetings.filter(meeting => meeting._id === params.id)[0]
            : {}
        setMeeting({ ...defaults })
    }, [meetings])

    useEffect(() => {
        const meetingDays = meeting.days
        const meetingType = meeting.type
        checkDays(meetingDays)
        checkType(meetingType)
    }, [meeting])

    const addMeeting = (meeting) => {
        axios.post('http://localhost:4000/api/create-meeting', meeting)
    }

    const editMeeting = (meeting) => {
        axios.put(`http://localhost:4000/api/update-meeting/${meeting._id}`, meeting)
    }

    function deleteMeeting(e) {
        const id = e.target.dataset.id
        axios.delete(`http://localhost:4000/api/delete-meeting/${id}`)
         window.location = '/meetings '
    }

    return (
        <Form onSubmit={handleSubmit}>
            <br/>
            <Form.Group>
                <Form.Label>Meeting Name:</Form.Label>
                <Form.Control className="my-2" type="text" name="name" required value={meeting.name || ""} onChange={handleChange} />
                <Form.Label>Location:</Form.Label>
                <Form.Control className="my-2" type="text" name="location" required value={meeting.location || ""} onChange={handleChange} />
                <Form.Label>Avg. # Attending</Form.Label>
                <Form.Control className="my-2" type="number" name="members" required value={meeting.members || ""} onChange={handleChange} />
                <Form.Label>Time:</Form.Label>
                <Form.Control className="my-2" type="time" name="time" required value={meeting.time || ""} onChange={handleChange} />
                <Form.Label>Description:</Form.Label>
                <Form.Control className="my-2" as="textarea" rows="5" type="text" placeholder="Enter a brief summary..." name="description" required value={meeting.description || ""} onChange={handleChange} />
            </Form.Group>
            <Form.Group >
                <Form.Label column>Meets on:</Form.Label>
                <div>
                    <Form.Check inline id="Monday" label="Monday" type="checkbox" value="Monday" onChange={handleDays} />
                    <Form.Check inline id="Tuesday" label="Tuesday" type="checkbox" value="Tuesday" onChange={handleDays} />
                    <Form.Check inline id="Wednesday" label="Wednesday" type="checkbox" value="Wednesday" onChange={handleDays} />
                    <Form.Check inline id="Thursday" label="Thursday" type="checkbox" value="Thursday" onChange={handleDays} />
                    <Form.Check inline id="Friday" label="Friday" type="checkbox" value="Friday" onChange={handleDays} />
                    <Form.Check inline id="Saturday" label="Saturday" type="checkbox" value="Tuesday" onChange={handleDays} />
                    <Form.Check inline id="Sunday" label="Sunday" type="checkbox" value="Sunday" onChange={handleDays} />
                </div>
            </Form.Group>
            <hr />
            <Form.Group>
                <Form.Label>Type:</Form.Label>
                <div>
                    <Form.Check inline id="Open" type="radio" label="Open" name="type" value="Open Meeting" onChange={handleChange} />
                    <Form.Check inline id="Closed" type="radio" label="Closed" name="type" value="Closed Meeting" onChange={handleChange} />
                    <Form.Check inline id="Speaker" type="radio" label="Speaker" name="type" value="Speaker Meeting" onChange={handleChange} />
                </div>
            </Form.Group>
            <hr />
            <h4 className="m-3 feedback"></h4>
            <Button variant={meetings ? "secondary" : "primary"} className="m-3" type="submit">{meetings ? "Edit" : "Add"} Meeting</Button>
            <br/>
            {meetings ? <Button variant="danger" className="delete m-3" data-id={meeting._id} onClick={deleteMeeting}>Delete Meeting</Button> : null }
        </Form>
    )
}

export default MeetingForm