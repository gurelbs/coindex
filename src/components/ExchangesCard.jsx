import React,{useState,useEffect} from 'react'
// import Card  from './Card'
import CoinGecko from 'coingecko-api'
import Spinner from './Spinner'
import ExchangeCard from './ExchangeCard'
import axios from 'axios'
export default function ExchangesCard(data) {
      const CoinGeckoClient = new CoinGecko()
    const [exchangesData,setExchangesData] =  useState([])
    const [isLoad,setIsLoad] =  useState(true)
    useEffect(() => {
        const source = axios.CancelToken.source()
        let id = data.match.params.id
        const fetchData = async () => {
            setIsLoad(true)
            let { data } = await CoinGeckoClient.exchanges.fetch(id)
            setExchangesData({
                id: id,
                name: data.name,
                country: data.country,
                img: data.image,
                score: data.trust_score,
                scoreRank: data.trust_score_rank,
                year: data.year_established || '',
                urls: [data.url,data.facebook_url,data.other_url_1,data.other_url_2],
                tickers: data.tickers,
                btcTradeVolume24h: (data.trade_volume_24h_btc + data.trade_volume_24h_btc_normalized) / 2,
                notice: data.alert_notice
            })
            setIsLoad(false)
        }
        fetchData()
        return () => source.cancel()
    },[])
        return (
            <div className="page">
               {isLoad ? <Spinner/> : <ExchangeCard data={exchangesData}/>}
            </div>
    )
}
