import React, { useState } from 'react'
import Header from './components/header/header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/dashboard'
import Register from './components/Register/register'
import Login from './components/Login/login'
import Footer from './components/Footer/footer'

import './App.css'
import { Home } from './components/home/Home'

function App() {
	const [user, setLoginUser] = useState({})
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route exact path='/' element={<Dashboard />} />
					<Route
						exact
						path='/login'
						element={<Login setLoginUser={setLoginUser} />}
					/>
					<Route exact path='/register' element={<Register />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	)
}

export default App