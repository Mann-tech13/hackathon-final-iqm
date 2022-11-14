import React, { useState, useEffect } from 'react'
import Header from '../header/header'
import { Home } from '../home/Home'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Subscribe } from '../subscribe/subscribe'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'

function Dashboard({ setBoolean }) {
	let navigate = useNavigate()
	const [booleans, setBooleans] = useState(false)
	const [news, setNews] = useState([])
	const [news1, setNews1] = useState([])
	const [categoryData, setCategoryData] = useState('ALL')
	const [searched, setSearched] = useState('')

	const handleClick = (e) => {
		// e.preventDefault();
		// console.log(e.target.innerHTML)
		const data = e.target.innerHTML
		console.log(data)
		setCategoryData(data)
		console.log(categoryData)
	}
	const navigateToSubscribe = () => {
		// 👇️ navigate to /contacts
		navigate('/subscribe')
	}

	const url = `https://newsapi.org/v2/everything?q=${categoryData}&apiKey={YOUR_API_KEY}`
	const url1 = `https://newsapi.org/v2/everything?q=trending&apiKey={YOUR_API_KEY}`
	// console.log(categoryData);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(url)
			if (response) {
				console.log(response.data.articles)
				setNews(response.data.articles)
			}
		}
		fetchData()
	}, [url])

	useEffect(() => {
		const fetchData1 = async () => {
			const response1 = await axios.get(url1)
			if (response1) {
				console.log(response1.data.articles)
				setNews1(response1.data.articles)
			}
		}
		fetchData1()
	}, [url1])

	const handleSearchClick = () => {
		setCategoryData(searched)
	}
	const handleChange = (e) => {
		setSearched(e.target.value)
	}
	return (
		<div>
			<Header />

			{setBoolean == undefined ? (
				<Home />
			) : (
				<div className='container'>
					<div className='news cursor' onClick={handleClick}>
						NEWS
					</div>
					<div className='ENTERTAINMENT cursor' onClick={handleClick}>
						ENTERTAINMENT
					</div>
					<div className='technology cursor' onClick={handleClick}>
						TECHNOLOGY
					</div>
					<div className='travel cursor' onClick={handleClick}>
						TRAVEL
					</div>
					<div className='food cursor' onClick={handleClick}>
						FOOD
					</div>
					<div className='sports cursor' onClick={handleClick}>
						SPORTS
					</div>
					<div className='searchplace'>
						<input
							type='text'
							className='search'
							placeholder='Search'
							onChange={handleChange}
						/>
						<input
							type='submit'
							value='🔎'
							className='search-btn'
							onClick={handleSearchClick}
						/>
					</div>
				</div>
			)}

			<div className='news-container'>
				<div className='dflex'>
					<div className='api-container'>
						{setBoolean == undefined
							? news.slice(0, 12).map((response) => {
									return (
										<div className='data-news'>
											<a href={response.url}>
												<img
													src={response.urlToImage}
													className='imgs'
													alt=''
												/>
											</a>
											<h5 className='h3-heading'>{response.title}</h5>
										</div>
									)
							  })
							: news.map((response) => {
									return (
										<div className='data-news'>
											<a href={response.url}>
												<img
													src={response.urlToImage}
													className='imgs-sub'
													alt=''
												/>
											</a>
											<h5 className='h3-heading'>{response.title}</h5>
											<div className='content'>{response.description}</div>
										</div>
									)
							  })}
						{/* If user subscribed.. */}
					</div>

					<div className='trending'>
						<div className='txt'>
							<h3>Trending🔥</h3>
						</div>
						{setBoolean == undefined
							? news1.slice(0, 5).map((response1) => {
									return (
										<div className='data-news1'>
											<a href={response1.url}>
												<img
													src={response1.urlToImage}
													className='imgs'
													alt=''
												/>
											</a>
											<h6 className='h3-heading'>{response1.title}</h6>
											<hr />
										</div>
									)
							  })
							: news1.map((response1) => {
									return (
										<div className='data-news1'>
											<a href={response1.url}>
												<img
													src={response1.urlToImage}
													className='imgs'
													alt=''
												/>
											</a>
											<h6 className='h3-heading'>{response1.title}</h6>
											<hr />
										</div>
									)
							  })}
					</div>
				</div>
				{setBoolean == undefined ? (
					<div className='readMore'>
						<Button
							onClick={navigateToSubscribe}
							className='bttn'
							variant='danger'
						>
							Read More
						</Button>
					</div>
				) : (
					<div className=''></div>
				)}
			</div>
		</div>
	)
}

export default Dashboard
