import React, { useEffect, useState } from 'react'
import { useMember } from '../components/MemberContext/MemberContext'
import axios from 'axios';
import TitleBlock from '../components/TitleBlock/TitleBlock'

function Homegroup() {
    const { member } = useMember()
    const [homegroup, setHomegroup] = useState({})

    useEffect(() => {
        axios.get('http://localhost:4000/api/meetings')
            .then(response => setHomegroup(response.data.filter(meeting => meeting.name === member.homegroup)[0]))
    }, [])

    return (
        <>
            <TitleBlock subTitle="My Homegroup" titleStart={homegroup.name} titleFill={""} />
        </>
    )
}

export default Homegroup