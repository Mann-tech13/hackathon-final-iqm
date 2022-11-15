import 'bootstrap/dist/css/bootstrap.css'
import Back from '../../images/background.png'
import React from 'react'
import './home.css'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
	let navigate = useNavigate()
	const myStyle = {
		backgroundImage: `url(${Back})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
	}

	return (
		<div style={myStyle} className='home'>
			<div className='head'>
				<h1>Get Informed </h1>
				<h1>Get Inspired.</h1>
				<br></br>
				<h3>The Perfect News Letter for you !</h3>
			</div>
			<br />
			<Button
				onClick={() => navigate('/subscribe')}
				className='bttn'
				variant='danger'
			>
				Subscribe
			</Button>
		</div>
	)
}
