import CoinGecko from 'coingecko-api'
import React, {useState, useEffect} from 'react'
import Spinner from './Spinner'
import {Link } from "react-router-dom";
import './exchange.css'
export default function Exchanges() {
    const CoinGeckoClient = new CoinGecko()
    const [exchangesList, setExchangesList] = useState([])
    const [btcRate, setBtcRate] = useState(0)
    const [isLoad, setIsLoad] = useState(false)
    useEffect(() => {
        let fetchDetails = async () => {
            setIsLoad(true)
            let {data} = await CoinGeckoClient.exchanges.all()
            let btcUsdRate = await CoinGeckoClient.simple.price({
                ids: 'bitcoin',
                vs_currencies: 'usd',
            });
            let newData = data.map(exchange => ({
                id: exchange.id,
                name: exchange.name,
                img: exchange.image,
                vol24: exchange.trade_volume_24h_btc_normalized,
                score: exchange.trust_score_rank,
                url: exchange.url,
                year: exchange.year_established
            }))
            setBtcRate(btcUsdRate.data.bitcoin.usd)
            setExchangesList(newData)
            setIsLoad(false)
        }
        try {
            fetchDetails()
        } catch (error) {
            console.error(error)
        }               
    },[])
    const formated = x => new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(x)
    return (
        <div className="page">
            {
                isLoad ? <Spinner/> : 
            <table className="exchanges-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>exchange name</th>
                        <th colSpan={2}>
                                Volume(24h) price
                            <div className="flex-th-price">
                                <td>btc</td>
                                <td>usd</td>
                            </div>
                        </th>
                        <th>year established</th>
                    </tr>
                </thead>
                <tbody>
            {exchangesList.map(exchange => {
                return <tr className='tr-wrap' key={exchange.id}>
                    <td ><p>{exchange.score || '-'}</p></td>
                    <td className="flex-td">
                        <span><img className='exchange-img' src={exchange.img} alt={`${exchange.name} symbol`}/></span>
                        <h1>
                            <Link to={`/exchanges/${exchange.id}`}>
                            {exchange.name || '-'}</Link>
                        </h1>
                    </td>
                    <td className="left-price"><p>{exchange.vol24.toFixed()|| '-' } <span className="btc-tag">BTC</span> </p></td>
                    <td className="right-price"><p>{formated(exchange.vol24 * btcRate)}</p></td>
                    <td><p>{exchange.year || '-'}</p></td>
                </tr>
            })}
                </tbody>
            </table>
            }
        </div>
    )
}


