import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios'
import TitleBlock from '../components/TitleBlock/TitleBlock'

const NextMeeting = () => {
    const [today] = useState(moment(new Date()).format('dddd'))
    const [hour, setHour] = useState(Number(moment(new Date()).format('k')))
    const [minute, setMinute] = useState(Number(moment(new Date()).format('mm')))
    const [allMeetings, setAllMeetings] = useState([])
    const [todaysMeetings, setTodaysMeetings] = useState([])
    const [upcomingMeetings, setUpcomingMeetings] = useState([])
    const [nextMeeting, setNextMeeting] = useState()
    const [warning, setWarning] = useState("")

    useEffect(() => {
        setInterval(() => {
            setMinute(Number(moment(new Date()).format('mm')))
        }, 1000)
        axios.get('http://localhost:4000/api/meetings')
            .then(response => setAllMeetings(response.data))
    }, [])

    useEffect(() => {
        setHour(Number(moment(new Date()).format('k')))
    }, [minute])

    useEffect(() => {
        const sorted = []
        allMeetings.forEach(meeting => {
            if (meeting.days.includes(today)) {
                sorted.push(meeting)
            }
        })
        setTodaysMeetings(sorted)
    }, [allMeetings])

    useEffect(() => {
        const sorted = []
        todaysMeetings.forEach(meeting => {
            const meetingHour = Number(meeting.time.split(":")[0])
            const meetingMinute = Number(meeting.time.split(":")[1])
            if (meetingHour > hour) {
                sorted.push(meeting)
            }
            else if (meetingHour === hour && meetingMinute > minute) {
                sorted.push(meeting)
            }
        })
        setUpcomingMeetings(sorted.sort((a, b) => a.time.split("")[0] - b.time.split("")[0]))
    }, [todaysMeetings, minute])

    useEffect(() => {
        if(upcomingMeetings.length > 0){
            setNextMeeting(upcomingMeetings[0])
            let minutesTill = upcomingMeetings[0].time.split(":")[1] - minute
            if((hour == upcomingMeetings[0].time.split(":")[0]) && ( minutesTill< 15)){
                setWarning(`Starts in ${minutesTill} minute${minutesTill !== 1 ? "s" : ""}!`)
            }else {
                setWarning("")
            }
        }
    }, [upcomingMeetings])

    return (
        <>
            <hr />
            {nextMeeting ?
                <TitleBlock subTitle={nextMeeting.name} titleStart={moment({hours: nextMeeting.time.split(":")[0], minutes:nextMeeting.time.split(":")[1]}).format('h:mm a')} titleMid={"@"} titleEnd={nextMeeting.location} titleFill={nextMeeting.description} warning={warning} />
                : <TitleBlock subTitle="No more meetings today" titleStart="Call" titleMid="Us" titleFill="1-800-555-1234" />
            }
        </>
    )
}

export default NextMeeting