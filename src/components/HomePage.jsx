import React, {useState, useEffect, useRef} from 'react'
import CoinGecko from 'coingecko-api'
import GlobalDataSection from './GlobalDataSection'
import Top100Table from './Top100Table'
import './homepage.css'

export default function HomePage() {
    const [globalData, setGlobalData] = useState({})
    const [topCoin, setTopCoin] = useState([])
    const CoinGeckoClient = new CoinGecko()
    useEffect(() => {
        console.log(topCoin);
        const fetchGlobalData = async () => {
            const { data } = await CoinGeckoClient.global();
            const res = await data.data
            return setGlobalData({
                exchanges: res.markets,
                cryptocurrencies: res.active_cryptocurrencies,
                marketCap: res.total_market_cap.usd,
            })
        }
        const fetchTopCoinData = async () => {
            let {data} = await CoinGeckoClient.coins.markets()
            setTopCoin(data)
        }
        fetchGlobalData()
        fetchTopCoinData()
        return () => 'clean'
    },[topCoin])
    const {cryptocurrencies,exchanges,marketCap} = globalData 
    return (
        <div className="homepage">
            <GlobalDataSection 
                cryptocurrencies={cryptocurrencies}
                marketCap={marketCap}
                exchanges={exchanges}
            />
            <Top100Table data={topCoin}/>
        </div>
    )
}


