import  { useState, useEffect } from 'react'
import moment from 'moment'
import './clock.css'

const Clock = ({children}) => {

    const [time, setTime] = useState(new Date().toLocaleTimeString())
    const [day, setDay] = useState(moment().format("dddd"))
    const [date, setDate] = useState(moment().format("MMMM Do YYYY"))

    useEffect(() => {
        setInterval(tick, 1000)
    }, [])

    const tick = () => {
        setTime(new Date().toLocaleTimeString())
        setDate(moment().format("MMMM Do YYYY"))
        setDay(moment().format("dddd"))
    }

    return (
        <div className="clockBlock">
             {children}
            <h1 className="day">{day}</h1> 
            <h2 className="date">{date}</h2> 
            <h4 className="time">{time}</h4>
        </div>
    )
}

export default Clock