import React, {useState} from 'react'
import Header from "../components/header/header"
import {Home} from "../components/home/Home"
import Dashboard from "../components/Dashboard/dashboard"
import Footer from "../components/footer/footer"

function SubscriberUserAccount() {
    const [boolean, setBoolean] = useState(true)
  return (
    <div>
        <Dashboard setBoolean={boolean}/>
    </div>
  )
}

export default SubscriberUserAccount