import React, {useState, useEffect} from 'react'
import CoinGecko from 'coingecko-api'
import GlobalDataSection from './GlobalDataSection'
import Table from './Table'
import './homepage.css'
import  Spinner from './Spinner'
export default function HomePage() {
    const [globalData, setGlobalData] = useState({})
    const [topCoin, setTopCoin] = useState([])
    const [isFetch,setIsFetch] = useState(false)
    const CoinGeckoClient = new CoinGecko()
    useEffect(() => {
        const fetchGlobalData = async () => {
            setIsFetch(true)
            const { data } = await CoinGeckoClient.global();
            const res = await data.data
            setGlobalData({
                exchanges: res.markets,
                cryptocurrencies: res.active_cryptocurrencies,
                marketCap: res.total_market_cap.usd,
            })
            setIsFetch(false)
        }
        const fetchTopCoinData = async () => {
            setIsFetch(true)
            let {data} = await CoinGeckoClient.coins.markets()
            data.map(item => ({
                id: item.id,
                name: item.name,
                image: item.image,
                market_cap_rank: item.market_cap_rank,
                symbol: item.symbol,
                market_cap_change_percentage_24h: item.market_cap_change_percentage_24h,
                high_24h: item.high_24h,
                low_24h: item.low_24h,
            }))
            setTopCoin(data)
            setIsFetch(false)
        }
        fetchGlobalData()
        fetchTopCoinData()
    },[globalData.marketCap])
    const {cryptocurrencies,exchanges,marketCap} = globalData
    return (
        <div className="page homepage">
            <div>
                {isFetch ? <Spinner/> :
                <>
                <GlobalDataSection 
                    cryptocurrencies={cryptocurrencies}
                    marketCap={marketCap}
                    exchanges={exchanges}
                />
                <Table data={topCoin}/>
                </>
                }
            </div>
        </div>
    )
}


