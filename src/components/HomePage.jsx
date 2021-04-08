import React, {useState, useEffect} from 'react'
import CoinGecko from 'coingecko-api'
import GlobalDataSection from './GlobalDataSection'
import Table from './Table'
import './homepage.css'
import  Spinner from './Spinner'
import axios from 'axios'

export default function HomePage() {

    const [globalData, setGlobalData] = useState({})
    const [topCoin, setTopCoin] = useState([])
    const [isFetch,setIsFetch] = useState(false)
    const CoinGeckoClient = new CoinGecko()
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const coinsURL = 'https://606e00260c054f00176564d4.mockapi.io/coins'

    useEffect(() => {
        fetchGlobalData()
        fetchTopCoinData()
        // checkWatchList()
    },[])
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
        let newData = data.map(item => ({
            ...item,
            watchList: false
        }))
        setTopCoin(newData)
        setIsFetch(false)
    }
    const addToWatchList = async findCoinId => {
        
        let item = topCoin.find( coin => coin.id === findCoinId.id)
        const updateState = x => topCoin.map( coin => {
            return coin === item ? {...coin,watchList: x} : coin
        })
        setTopCoin(updateState(true))
        if (!item.watchList){
            await axios.post(coinsURL,{...item,watchList: true})            
        } else {
            removeFromWatchList(item)
            setTopCoin(updateState(false))
        }
        
    }
    const removeFromWatchList = async item => {
        if (item){
            let {data} = await axios.get(coinsURL,{cancelToken: source.token})
                .catch( thrown => axios.isCancel(thrown) 
                ? console.log('Request canceled', thrown.message)
                : console.log(thrown.message))
            if (data){
                let deleteItem = data.find( coin => coin.symbol === item.symbol)
                await axios.delete(`${coinsURL}/${deleteItem.id}`)
            }
        }
    }
    // const checkWatchList = async () => {
    //     let {data} = await axios.get(coinsURL)
    //     let newData = topCoin.map( coin => {
    //         if (!coin.watchList){
    //             data.map( e => {
    //                 if (coin.symbol === e.symbol){
    //                     coin.watchList = true
    //                 }
    //             })
    //         }
    //     })
    //     setTopCoin(newData)
    //     // const watchList = topCoin.filter( coin => !coin.watchList)
    //     // watchList.map( coin => {
    //     //     let updataAll = data.map( wlc => coin.symbol )
    //     //     if (coin.symbol)
    //     // })
    // }
    const {cryptocurrencies,exchanges,marketCap} = globalData
    return (
        <div className="page homepage">
            <div>
                {<GlobalDataSection 
                    cryptocurrencies={cryptocurrencies}
                    marketCap={marketCap}
                    exchanges={exchanges}
                />}
                <h1 className="top-100-txt">Top 100 Cryptocurrencies</h1>
                {isFetch 
                ? <Spinner/> 
                : <Table 
                    data={topCoin}
                    handleAddToWatchList={(e) => addToWatchList(e)}
                />}
            </div>
        </div>
    )
}


