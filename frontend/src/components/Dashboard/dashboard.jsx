import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./dashboard.css"

function Dashboard() {
    const [news, setNews] = useState([])
    // const options = {
    //     method: 'GET',
    //     url: 'https://extract-news.p.rapidapi.com/v0/article',
    //     params: {
    //         url: 'https://www.theverge.com/2020/4/17/21224728/bill-gates-coronavirus-lies-5g-covid-19'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': '5182f24adcmsh95a5bfed385303dp104125jsnd9ca2b9a7921',
    //         'X-RapidAPI-Host': 'extract-news.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response);
    //     setNews([...news, ...response.data.article.images])
    // }).catch(function (error) {
    //     console.error(error);
    // });
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2022-10-12&sortBy=publishedAt&apiKey=4305a04eeaf746ad949f84e528cba4b5"

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);
            if (response) {
                console.log(response.data.articles)
                setNews([...news, ...response.data.articles])
            }
        };
        fetchData();
    }, [url]);

    return (
        <div>
            <div className="container">
                <div className="news">
                    NEWS
                </div>
                <div className="ENTERTAINMENT">
                    ENTERTAINMENT
                </div>
                <div className="technology">
                    TECHNOLOGY
                </div>
                <div className="travel">
                    TRAVEL
                </div>
                <div className="food">
                    FOOD
                </div>
                <div className="sports">
                    SPORTS
                </div>
            </div>

            <div className="news-container">
                <div className="api-container">
                    {
                        news.map((response) => {
                            return (
                                <div className="data-news">
                                    <h3 className='h3-heading'>{response.author}</h3>
                                    <img src={response.urlToImage} className="imgs" alt="" />
                                    <div className="content">
                                        {response.description}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dashboard