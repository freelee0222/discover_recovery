import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const ActivityForm = ({ activities, params }) => {
    const [activity, setActivity] = useState({})

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setActivity(values => ({ ...values, [name]: value }))
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (activities) {
            editActivity(activity)
        } else {
            addActivity(activity)
        }
        useNavigate("/activities")
    }

    useEffect(() => {
        let defaults = activities
            ? activities.filter(activity => activity._id === params.id)[0]
            : {}
        setActivity({ ...defaults })
    }, [activities])


    const addActivity = (activity) => {
        axios.post('http://localhost:4000/api/create-activity', activity)
    }

    const editActivity = (activity) => {
        axios.put(`http://localhost:4000/api/update-activity/${activity._id}`, activity)
    }

    function deleteActivity(e) {
        const id = e.target.dataset.id
        axios.delete(`http://localhost:4000/api/delete-activity/${id}`)
        window.location = '/activities'
    }

    return (
        <Form onSubmit={handleSubmit}>
            <br />
            <Form.Group>
                <Form.Label>Activity Name:</Form.Label>
                <Form.Control className="my-2" type="text" name="name" required={true} value={activity.name || ""} onChange={handleChange} />
                <Form.Label>Location:</Form.Label>
                <Form.Control className="my-2" type="text" name="location" required={true} value={activity.location || ""} onChange={handleChange} />
                <Form.Label>Date:</Form.Label>
                <Form.Control className="my-2" type="date" name="date" value={activity.date || ""} onChange={handleChange} />
                <Form.Label>Time:</Form.Label>
                <Form.Control className="my-2" type="time" name="time" value={activity.time || ""} onChange={handleChange} />
                <Form.Label>Decription</Form.Label>
                <Form.Control as="textarea" rows="5" className="my-2" type="text" placeholder="Enter a brief summary..." name="description" value={activity.description || ""} onChange={handleChange} />
            </Form.Group>
            <hr />
            <h4 className="feedback"></h4>
            <Button variant={activities ? "secondary" : "primary"} className="m-3" type="submit">{activities ? "Edit" : "Add"}  Activity</Button>
            <br/>
            {activities ? <Button variant="danger" className="delete m-3" data-id={activity._id} onClick={deleteActivity}>Delete Activity</Button> : null }
        </Form>
    )
}

export default ActivityForm