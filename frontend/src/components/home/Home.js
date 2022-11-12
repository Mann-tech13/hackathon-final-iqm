import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button'

export const Home = () => {
	return (
		<div className='home'>
			<div className='head'>
				<h1>Get Informed </h1>
				<h1>Get Inspired</h1>
				<br></br>
				<p>The Perfect News Letter for you !</p>
			</div>
			<br />
			<Button className='bttn' variant='danger'>
				Sign Up
			</Button>
		</div>
	)
}
