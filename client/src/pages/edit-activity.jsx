import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ActivityForm from '../components/ActivityForm/ActivityForm'

const EditActivity = () => {
    const [activities, setActivities] = useState([])
    const params = useParams()

    useEffect(() => {
        axios.get('http://localhost:4000/api/activities')
        .then(response => setActivities(response.data))
    }, [])

    return (
        <>
            <ActivityForm activities={activities} params={params}/>
            <hr/>
        </>
    )
}

export default EditActivity