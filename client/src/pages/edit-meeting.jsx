import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import MeetingForm from '../components/MeetingForm/MeetingForm'

const EditMeeting = () => {
    const [meetings, setMeetings] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/api/meetings')
        .then(response => setMeetings(response.data))
    }, [])

    return (
        <>
            <MeetingForm meetings={meetings} params={params}/>
            <hr/>
        </>
    )
}

export default EditMeeting