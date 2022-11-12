import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
	let navigate = useNavigate()
	return (
		<div className='home'>
			<div className='head'>
				<h1>Get Informed </h1>
				<h1>Get Inspired</h1>
				<br></br>
				<p>The Perfect News Letter for you !</p>
			</div>
			<br />
			<Button  onClick={() => navigate('/register')} className='bttn' variant='danger'>
				Sign Up
			</Button>
		</div>
	)
}
