import React, { useState, useEffect } from 'react'
import Header from '../header/header'
import { Home } from '../home/Home'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Subscribe } from '../subscribe/subscribe'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
	let navigate = useNavigate()
	const [news, setNews] = useState([])
	const [news1, setNews1] = useState([])
	const [categoryData, setCategoryData] = useState("ALL")
	const [searched, setSearched] = useState("")

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
		navigate('/subscribe');
	};
	
	const url = `https://newsapi.org/v2/everything?q=${categoryData}&apiKey=4305a04eeaf746ad949f84e528cba4b5`
	const url1 = `https://newsapi.org/v2/everything?q=trending&apiKey=4305a04eeaf746ad949f84e528cba4b5`
	// console.log(categoryData);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(url);
			if (response) {
				console.log(response.data.articles)
				setNews(response.data.articles)
			}
		};
		fetchData();
	}, [url]);

	useEffect(() => {
		const fetchData1 = async () => {
			const response1 = await axios.get(url1);
			if (response1) {
				console.log(response1.data.articles)
				setNews1(response1.data.articles)
			}
		};
		fetchData1();
	}, [url1]);

	const handleSearchClick = () => {
		setCategoryData(searched)
	}
	const handleChange = (e) => {
		setSearched(e.target.value)

	}
	return (
		<div>
			<Header />
			<Home />
			<div className="container">
				<div className="news" onClick={handleClick}>
					NEWS
				</div>
				<div className="ENTERTAINMENT" onClick={handleClick}>
					ENTERTAINMENT
				</div>
				<div className="technology" onClick={handleClick}>
					TECHNOLOGY
				</div>
				<div className="travel" onClick={handleClick}>
					TRAVEL
				</div>
				<div className="food" onClick={handleClick}>
					FOOD
				</div>
				<div className="sports" onClick={handleClick}>
					SPORTS
				</div>

				<div className="searchplace">
					<input type="text" className="search" placeholder='Search' onChange={handleChange} />
					<input type="submit" value="🔎" className="search-btn" onClick={handleSearchClick} />
				</div>

			</div>


			<div className='news-container'>
				<div className='dflex'>
					<div className='api-container'>
						{news.slice(0, 12).map((response) => {
							return (
								<div className='data-news'>
									<a href={response.url}><img  src={response.urlToImage} className='imgs'  alt='' /></a>
									<h5 className='h3-heading'>{response.title}</h5>
									{/* <div className='content'>{response.description}</div> */}
								</div>
							)
						})}

					</div>

					<div className='trending'>
						<div className='txt'>
							<h3>Trending Top 5</h3>
						</div>
					{news1.slice(0, 5).map((response1) => {
							return (
								<div className='data-news1'>
									<a href={response1.url}><img src={response1.urlToImage} className='imgs' alt='' /></a>
									<h6 className='h3-heading'>{response1.title}</h6>
									<hr/>
								</div>
							)
						})}
					</div>
				</div>

				<div className='readMore'>
					<Button onClick={navigateToSubscribe} className='bttn' variant='danger'>
						Read More
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
