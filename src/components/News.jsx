import React, { useEffect, useState } from 'react'
// import NewsAPI from 'newsapi'
import axios from 'axios'
import Spinner from './Spinner'
import './news.css'
export default function News() {
    const [news,setNews] = useState([])
    const [isLoad,setIsLoad] = useState(true)
    const url = `https://hejs.cf/api/news?q=ביטקוין`
    useEffect(() => {
        const fetchData =  async () => {
            setIsLoad(true)
            let {data} = await axios.get(url)
            setNews(data)
            setIsLoad(false)
        }
        fetchData()
    },[])
    useEffect(() => {
        console.log(news);
    },[news])
    return (
        <div  className="page">
            {isLoad ? <Spinner/> : <div className="news-wrap">
                {news.map( (newsDetails,i) => <div className="news-card" key={i}>
                <a href={newsDetails.url} target='_blank'>
                    <span className="news-tagname">{newsDetails.origin}</span>
                    <code>{newsDetails.time}</code>
                    <h1>{newsDetails.header}</h1>
                </a>
                </div>)}
            </div>}
        </div>
    )
}