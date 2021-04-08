import React,{useState,useEffect} from 'react'
import Card  from './Card'
import CoinGecko from 'coingecko-api'
import Spinner from './Spinner'
import axios from 'axios'
export default function CoinCard(name) {
      const CoinGeckoClient = new CoinGecko()
    const [coinData,setCoinData] =  useState(null)
    useEffect(() => {
        const source = axios.CancelToken.source()
        const fetchData = async () => {
            let id = name.match.params.id
            let { data } = await CoinGeckoClient.coins.fetch(id)
            console.log(data);
            setCoinData({
                id: data.id,
                change24: data.market_data.price_change_percentage_24h,
                img: data.image.large,
                name: data.name,
                symbol: data.symbol,
                rank: data.market_cap_rank,
                hpLink: data.links.homepage[0],
                price: data.market_data.current_price.usd,
                description: data.description.en,
                ...data

            })
        }
        fetchData()
        return () => source.cancel()
    },[])
        return (

            <div className="page">
                {!coinData ? <Spinner/> : <Card data={coinData}/>}
            </div>
    )
}