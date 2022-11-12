import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/login'
import Register from './components/Register/register'
import './App.css'

function App() {
	// User
	const [user, setLoginUser] = useState({})

	return (
		<div className='App'>
			<Router>
				<Routes>
					{/* <Route path='/home' element={<Home setLoginUser={setLoginUser} />} /> */}
					<Route
						exact
						path='/login'
						element={<Login setLoginUser={setLoginUser} />}
					/>
					<Route exact path='/register' element={<Register />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
