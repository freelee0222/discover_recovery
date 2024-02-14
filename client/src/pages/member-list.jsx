import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useMember } from '../components/MemberContext/MemberContext'

const MemberList = () => {
    const { member } = useMember()

    const [members, setMembers] = useState([])
    const [memberToEdit, setMemberToEdit] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:4000/api/members')
            .then(response => setMembers(response.data))
    }, [memberToEdit])
    
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setMemberToEdit(values => ({...values, [name]: value}))
        setMemberToEdit(values => ({...values, madeAdminBy: member.email}))
    }

    function editMember() {
        axios.put('http://localhost:4000/api/edit-account', memberToEdit)
        setMemberToEdit()
    }

    return (
        <>
            {memberToEdit ?
                <div className="headerBox editBox">
                    <h1><u>{memberToEdit.firstName} {memberToEdit.lastName[0]}</u></h1>
                    <Form.Group>
                        <Form.Label>Sponsor:</Form.Label>
                        <Form.Check inline id="Yes" type="radio" label="Yes" name="isSponsor" value={true} onChange={handleChange} checked={memberToEdit.isSponsor || memberToEdit.isSponsor === "true" ? true : false}/>
                        <Form.Check inline id="No" type="radio" label="No" name="isSponsor" value={false} onChange={handleChange} checked={!memberToEdit.isSponsor || memberToEdit.isSponsor === "false" ? true : false}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Admin:</Form.Label>
                        <Form.Check inline id="Yes" type="radio" label="Yes" name="isAdmin" value={true} onChange={handleChange} checked={memberToEdit.isAdmin || memberToEdit.isAdmin === "true" ? true : false}/>
                        <Form.Check inline id="No" type="radio" label="No" name="isAdmin" value={false} onChange={handleChange} checked={!memberToEdit.isAdmin || memberToEdit.isAdmin === "false" ? true : false}/>
                    </Form.Group>
                    <Button variant="secondary"  className="m-3"onClick={editMember}>Done</Button>
                </div> :
                <ol>
                    {members.map(member => {
                        return (
                            <div key={member._id}>
                                <li><Link className="memberLink" onClick={() => setMemberToEdit(member)}>{member.firstName} {member.lastName[0]}</Link></li>
                            </div>
                        )
                    })}
                </ol>}

        </>
    )
}

export default MemberList


