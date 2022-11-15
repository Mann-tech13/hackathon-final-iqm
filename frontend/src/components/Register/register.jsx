import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './register.css'
import Back from '../../images/background.png'

function Register() {
	const myStyle = {
		backgroundImage: `url(${Back})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}
	// const [userLoginData, setUserLoginData] = useState("")
	let navigate = useNavigate()
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		reEnterPassword: '',
	})
	const handleChange = (e) => {
		const { name, value } = e.target
		setUser({
			...user,
			[name]: value,
		})
	}
	
	
	const registration = () => {
		const { name, email, password, reEnterPassword } = user
		if (name && email && password && password === reEnterPassword) {
			axios.post('http://localhost:8000/register', user).then((res) => {
				alert(res.data.message)
				navigate('/login')
			})
		} else {
			alert('false')
		}
	}
	// console.log("HI" + userLoginData)
	return (
		<>
			<div style={myStyle} className='register'>
				<div className='form-reg'>
					<h1 className='ch1'>Register</h1>
					<input
						type='text'
						name='name'
						value={user.name}
						placeholder='Enter your Name'
						onChange={handleChange}
					/>
					<input
						type='text'
						name='email'
						value={user.email}
						placeholder='Enter your Email'
						onChange={handleChange}
					/>
					<input
						type='password'
						name='password'
						value={user.password}
						placeholder='Enter your password'
						onChange={handleChange}
					/>
					<input
						type='password'
						name='reEnterPassword'
						value={user.reEnterPassword}
						placeholder='Re-enter your password'
						onChange={handleChange}
					/>
					<div className='button' onClick={registration}>
						Register
					</div>
				</div>
			</div>
		</>
	)
}

export default Register
// export {MyName};
// export {userLoginData};
