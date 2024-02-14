import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm'

const Login = () => {

    return (
        <>
                <main className="headerBox">
                    <h2 className="col-md-12 subHeader">Members</h2>
                    <h1 className="headerBlue">Login <span className="headerBlack"> Here</span></h1>
                    <div className="block col-md-3"></div>
                    <small>Not a member? <a href="/create-account">Join us!</a></small>
                    <LoginForm />
                </main>
            <hr />
        </>
    )
}

export default Login