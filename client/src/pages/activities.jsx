import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import TitleBlock from '../components/TitleBlock/TitleBlock'
import ActivityCard from '../components/ActivityCard/ActivityCard'

const Activities = () => {
    const [activities, setActivities] = useState([])
    const [current, setCurrent] = useState(true)

    useEffect(() => {
        current ?
            axios.get('http://localhost:4000/api/activities')
                .then(response => {
                    setActivities(response.data.filter(event => moment(event.date).isSameOrAfter(moment(Date.now()))))
                }) :
            axios.get('http://localhost:4000/api/activities')
                .then(response => {
                    setActivities(response.data.filter(event => moment(event.date).isSameOrBefore(moment(Date.now()))))
                })
    }, [current])

    return (
        <>
            <TitleBlock  titleStart={current ? "Upcoming" : "Past"} titleMid={"Activities"} titleFill={""} />
            {
                (activities.length > 0 ? activities.map((activity, id) => (
                    <ActivityCard key={id} activity={activity} />
                )) :
                    <h2 className="mx-5">No {current ? "current" : "past"} activities...</h2>)
            }
            <Button variant={current ? "secondary" : "primary"} className="m-3" onClick={() => setCurrent(!current)}>{current ? "Show Past Activities" : "Show Current Activities"}</Button>
            {
                current && activities.length === 0 ? <Link to="/add-activity"><Button variant="primary" className="m-3"> Add an activity</Button></Link> : null
            }
            <hr />
        </>
    )
}

export default Activities