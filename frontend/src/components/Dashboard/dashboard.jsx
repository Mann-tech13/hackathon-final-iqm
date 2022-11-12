import React, { useState, useEffect } from 'react'
import Header from '../header/header'
import { Home } from '../home/Home'
import axios from 'axios'
import './dashboard.css'

function Dashboard() {
	const [news, setNews] = useState([])
	const [categoryData, setCategoryData] = useState('ALL')

	const handleClick = (e) => {
		// e.preventDefault();
		// console.log(e.target.innerHTML)
		const data = e.target.innerHTML
		console.log(data)
		setCategoryData(data)
		console.log(categoryData)
	}
	const url = `https://newsapi.org/v2/everything?q=${categoryData}&apiKey=4305a04eeaf746ad949f84e528cba4b5`
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

	return (
		<div>
			<Header />
			<Home />
			<div className='container'>
				<div className='news cursor' onClick={handleClick}>
					NEWS
				</div>
				<div className='entertainment cursor' onClick={handleClick}>
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
			</div>

			<div className='news-container'>
				<div className='api-container'>
					{news.map((response) => {
						return (
							<div className='data-news'>
								<h3 className='h3-heading'>{response.title}</h3>
								<img src={response.urlToImage} className='imgs' alt='' />
								<div className='content'>{response.description}</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Dashboard
