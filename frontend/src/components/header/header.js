import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './header.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
// import { MyName } from "../Register/register"

import TCQ from '../../images/tcq.png'
import axios from 'axios'

function NavScrollExample() {
	let navigate = useNavigate()
	const [value, setValue] = useState('')
	const fetchData = async () => {
		const { data } = await axios.get('http://localhost:8000/getData')
		setValue(data)
		console.log(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	const onChangeValue = (e) => {
		e.preventDefault()	
		const reValue = ""
		setValue(reValue)
		console.log(value)
	}

	return (
		<Navbar className='main' bg='light' expand='lg'>
			<Container fluid>
				<img className='icon' src={TCQ} />
				<Navbar.Brand href='#'></Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
						
					</Nav>
					{value ? (
						<div>
							{/* <div>Hello {value}</div> */}
							<Button
								className='btn'
								variant='danger'
								onClick={onChangeValue}
							>
								Logout
							</Button>
						</div>
					) : (
						<div>
							<Button
								className='btn'
								variant='danger'
								onClick={() => navigate('/Login')}
							>
								Login
							</Button>
							<Button
								className='btn'
								variant='light'
								onClick={() => navigate('/register')}
							>
								Register
							</Button>
						</div>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavScrollExample
