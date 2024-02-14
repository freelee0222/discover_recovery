import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import { useMember } from '../components/MemberContext/MemberContext'
import TitleBlock from '../components/TitleBlock/TitleBlock'

function Sponsor() {
    const navigate = useNavigate()
    const { member, setMember } = useMember()
    const [members, setMembers] = useState([])
    const [sponsors, setSponsors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/members')
            .then(response => setMembers(response.data))
    }, [])

    useEffect(() => {
        if (member) {
            setSponsors(members.filter(potential => potential.isSponsor && potential.gender === member.gender && potential._id !== member._id))
        }
    }, [members])

    function updateSponsor(e) {
        setMember(values => ({ ...values, sponsorName: e.target.dataset.id }))
        axios.put('http://localhost:4000/api/edit-account', member)
        navigate('/dashboard')
    }

    return (
        <>
        <TitleBlock subTitle={"Sponsorship"} titleStart={"Keep"} titleMid={"in"} titleEnd={"Touch"} titleFill={`Regular communication  with a sponsor is very important.`}/>
            {!member ?
                <TitleBlock subTitle="You must be logged in.">
                    <p>Please <Link to='/create-account'>Join Us</Link>!</p>
                </TitleBlock> :
                sponsors.map(sponsor => (
                    <TitleBlock key={sponsor._id} subTitle={sponsor.phone} titleStart={sponsor.firstName} titleMid={`${sponsor.lastName[0]}.`} titleEnd={`${'\u00b7'} ${sponsor.age}`} titleFill={`Clean Day: ${moment(sponsor.cleanDay).format(" MMMM Do YYYY")}`}>
                        <button className="btn btn-primary" data-id={`${sponsor.firstName} ${sponsor.lastName[0]}.`} onClick={updateSponsor}>Make this my sponsor</button>
                    </TitleBlock>
                ))
            }
        </>
    )
}

export default Sponsor