import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css'

import Home from "./pages/home"
import NextMeeting from './pages/next-meeting'
import Activities from './pages/activities'
import CreateActivity from './pages/create-activity'
import EditActivity from './pages/edit-activity'
import Meetings from './pages/meetings'
import CreateMeeting from './pages/create-meeting'
import EditMeeting from './pages/edit-meeting'
import Homegroup from './pages/homegroup'
import Sponsor from './pages/sponsor'
import CreateAccount from './pages/create-account'
import EditAccount from './pages/edit-account'
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Admin from './pages/admin'
import MemberList from './pages/member-list'
import NotFound from './pages/not-found'

import MemberContext from './components/MemberContext/MemberContext'
import Header from './components/Header/Header'
import Clock from './components/Clock/Clock'
import MeetingBtn from './components/MeetingBtn/MeetingBtn'
import Footer from './components/Footer/Footer'

const App = () => {
    return (
        <MemberContext>
            <Router>
                <Header />
                <Clock>
                    <MeetingBtn />
                </Clock>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/next-meeting" element={<NextMeeting />} />

                    <Route path="/activities" element={<Activities />} />
                    <Route path="/add-activity" element={<CreateActivity />} />
                    <Route path="/edit-activity/:id" element={<EditActivity />} />

                    <Route path="/meetings" element={<Meetings />} />
                    <Route path="/add-meeting" element={<CreateMeeting />} />
                    <Route path="/edit-meeting/:id" element={<EditMeeting />} />

                    <Route path="/homegroup" element={<Homegroup />} />
                    <Route path="/sponsor" element={<Sponsor />} />

                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/edit-account" element={<EditAccount />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/admin" element={<Admin />} />
                    <Route path="/member-list" element={<MemberList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </MemberContext>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)