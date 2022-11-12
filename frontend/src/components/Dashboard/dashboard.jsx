import React, { useState, useEffect } from 'react'
import Header from '../header/header'
import { Home } from '../home/Home'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import { Subscribe } from '../subscribe/subscribe'
import './dashboard.css'
import {useNavigate} from 'react-router-dom'

function Dashboard() {
<<<<<<< HEAD
	const [news, setNews] = useState([])
	const [categoryData, setCategoryData] = useState('ALL')
	const [searched, setSearched] = useState('')
=======
	let navigate = useNavigate()
    const [news, setNews] = useState([])
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
>>>>>>> e62b5a4e07f58af9151bec98a1e7c1456ae0e2c5

	const handleClick = (e) => {
		// e.preventDefault();
		// console.log(e.target.innerHTML)
		const data = e.target.innerHTML
		// console.log(data)
		setCategoryData(data)
		// console.log(categoryData)
	}
	const url = `https://newsapi.org/v2/everything?q=${categoryData}&apiKey=4305a04eeaf746ad949f84e528cba4b5`
	// console.log(categoryData);
	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get(url)
			if (response) {
				// console.log(response.data.articles)
				setNews(response.data.articles)
			}
		}
		fetchData()
	}, [url])

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

			<div className='news-container'>
				<div className='api-container'>
					{news.slice(0, 12).map((response) => {
						return (
							<div className='data-news'>
								<h3 className='h3-heading'>{response.title}</h3>
								<img src={response.urlToImage} className='imgs' alt='' />
								<div className='authorLink'>{response.author}</div>
								<div className='content'>{response.description}</div>
								<a href={response.url} target='_blank'>
									<div className='btn'>Read More...</div>
								</a>
							</div>
						)
					})}
					{/* Activate IF Logic when Subscription Implemented */}
					{/* {news.slice(0, 12).map((response) => {
						return (
							<div className='data-news'>
								<h3 className='h3-heading'>{response.title}</h3>
								<img src={response.urlToImage} className='imgs' alt='' />
								<div className='content'>{response.description}</div>
							</div>
						)
					})} */}
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
