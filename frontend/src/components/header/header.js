import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import './header.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useNavigate } from 'react-router-dom'
// import { MyName } from "../Register/register"


import TCQ from '../../images/tcq.png'
import axios from "axios";

function NavScrollExample() {
	let navigate = useNavigate()
	
	const fetchData = async() => {
		const {data} = await axios.get("http://localhost:8000/getData")
		console.log(data);
	}

	useEffect(() => {
	  fetchData()
	}, [])
	

	return (
<<<<<<< HEAD
		<div>
			<Navbar className='main' bg='light' expand='lg'>
				{/* {console.log(accountHolder)} */}
				<Container fluid>
					<img className='icon' src={TCQ}></img>
					<Navbar.Brand href='#'></Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav
							className='me-auto my-2 my-lg-0'
							style={{ maxHeight: '100px' }}
							navbarScroll
						>
							<Nav.Link href='#action1'>Home</Nav.Link>
							<Nav.Link href='#action2'>News Letters</Nav.Link>

						</Nav>
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
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
=======
		<Navbar className='main' bg='light' expand='lg'>
			<Container fluid>
				<img className='icon' src={TCQ}></img>
				<Navbar.Brand href='#'></Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav
						className='me-auto my-2 my-lg-0'
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href='#action1'>Home</Nav.Link>
						<Nav.Link href='#action2'>News Letters</Nav.Link>
						{/* <NavDropdown title="Link" id="navbarScrollingDropdown">\
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
					</Nav>
					{/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
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
				</Navbar.Collapse>
			</Container>
		</Navbar>
>>>>>>> 3fd9cbeb36171bc6e76d0135004a92b71c88f91a
	)
}

export default NavScrollExample
