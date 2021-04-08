import React, { useEffect, useState } from 'react'
// import NewsAPI from 'newsapi'
import axios from 'axios'
import Spinner from './Spinner'
import './news.css'
export default function News() {
    const [news,setNews] = useState([])
    const [isLoad,setIsLoad] = useState(true)
    const newsapi = `e4183f2f5ed74608bc654d9def3ab4fb`
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newsapi}`
    useEffect(() => {
        const fetchData =  async () => {
            setIsLoad(true)
            let {data} = await axios.get(url)
            setNews(data.articles)
            setIsLoad(false)
        }
        fetchData()
    },[])
    return (
        <div  className="page">
            {isLoad ? <Spinner/> : <div className="news-wrap">
                {news.map( (newsDetails,i) => <div className="news-card" key={i}>
                <a href={newsDetails.url} target='_blank'>
                    <span className="news-tagname">{newsDetails.source.name}</span>
                    <img src={newsDetails.urlToImage} alt=""/>
                    <h1>{newsDetails.title}</h1>
                </a>
                </div>)}
            </div>}
        </div>
    )
}