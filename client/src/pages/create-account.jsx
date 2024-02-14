import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../styles/form.css'
import AccountForm from '../components/AccountForm/AccountForm'

const CreateAccount = () => {
    const navigate = useNavigate()
    const [newcomer, setNewcomer] = useState(false)

    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="col-md-12 subHeader">You are a member</h2>
                    <h1 className="col-md-12 headerBlue">when <span className="headerBlack">you</span> say you are.</h1>
                    <div className="block col-md-3"></div>
                    <h3 className="col-md-12 paragraphTitle">Don't wait. Become a member today.</h3>
                    <hr className="m-2" />
                </div>
            </div>
            {
                !newcomer ?
                    <div className="headerBox boxCenter">
                        <Button variant="primary" className="m-3" onClick={() => setNewcomer(true)}>Become a Member</Button>
                        <Button variant="primary" className="m-3" onClick={() => navigate('/login')}>Log-in</Button>
                    </div> : <AccountForm />
            }
        </>
    )
}

export default CreateAccount

