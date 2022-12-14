import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './login.css'
import Back from '../../images/background.png'

function Login({ setLoginUser }) {
	const myStyle = {
		backgroundImage: `url(${Back})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}
	let navigate = useNavigate()
	const [user, setUser] = useState({
		name: '',
		password: '',
	})
	const handleChange = (e) => {
		const { name, value } = e.target
		setUser({
			...user,
			[name]: value,
		})
	}
	const login = () => {
		axios.post('http://localhost:8000/login', user).then((res) => {
			alert(res.data.message)
			setLoginUser(res.data.user)
			navigate('/')
		})
	}

	// const handleClick = async (e) => {
	// 	e.preventDefault()
	// 	const response = await fetch('http://localhost:8000/sendemail', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({
	// 			user,
	// 		}),
	// 	})
	// 	console.log(response)
	// }
	return (
		<div style={myStyle} className='login'>
			<div className='login-form'>
				<h1>Login</h1>
				<input
					type='text'
					name='name'
					value={user.name}
					placeholder='Enter your Name'
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					value={user.password}
					placeholder='Enter your password'
					onChange={handleChange}
				/>
				{/* <div className='forgot-pwd' onClick={handleClick}>
					Forgot Password?
				</div> */}
				<div className='button' onClick={login}>
					Login
				</div>
				<div className='textInsideLogin'>or</div>
				<div className='button' onClick={() => navigate('/register')}>
					Register
				</div>
			</div>
		</div>
	)
}

export default Login
