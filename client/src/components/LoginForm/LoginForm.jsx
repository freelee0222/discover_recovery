import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useMember } from '../../components/MemberContext/MemberContext'

function LoginForm() {

    const navigate = useNavigate()
    const { setMember } = useMember()
    const [inputs, setInputs] = useState({})

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        login(inputs)
    }

    function login(inputs) {
        const feedback = document.querySelector('.feedback')
        feedback.innerHTML = ""
        axios.post('http://localhost:4000/api/login', inputs)
            .then(response => {
                const { token } = response.data
                localStorage.setItem('api_token', JSON.stringify(token))
            })
            .then(() => {
                const token = JSON.parse(localStorage.getItem('api_token'))
                axios.get('http://localhost:4000/api/get-account', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                    .then(response => {
                        setMember(response.data.user)
                        navigate('/dashboard')
                    })
                    .catch(err => feedback.innerHTML += err.response.data)
            })
            .catch(err => feedback.innerHTML += err.response.data.error)
    }

    return (
        <>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="formInput" type="email" placeholder="Enter email" name="email" value={inputs.email || ""} onChange={handleChange} required />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="formInput" type="password" placeholder="Password" name="password" value={inputs.password || ""} onChange={handleChange} required />
                </Form.Group>
                <h2 className="feedback"></h2>
                <Button variant="primary" type="submit" className="m-3">Log In</Button>
            </Form>
        </>
    )
}

export default LoginForm