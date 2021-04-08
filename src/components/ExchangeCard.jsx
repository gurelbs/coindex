import React, { useState,useEffect } from 'react'
import CoinGecko from 'coingecko-api'
import {Link } from "react-router-dom";
import './exchange.css'
function ExchangeCard({data}) {
    const CoinGeckoClient = new CoinGecko()
    const [btcRate, setBtcRate] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            let btcUsdRate = await CoinGeckoClient.simple.price({
                ids: 'bitcoin',
                vs_currencies: 'usd',
            });
            setBtcRate(btcUsdRate.data.bitcoin.usd)
        }
        fetchData()
    },[data])
    const {id,name,country,img,score,
        scoreRank,year,urls,tickers,
        btcTradeVolume24h,notice} = data
    const formated = x => new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
        }).format(x)
    const formatedNum = x => new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
        }).format(x)
    return (
        <div>
            <div className="exchange-card">
                <div className="exchange-card-flexdiv">
                    <h1 className="exchange-card-name">{name}</h1>
                    <img src={img} alt={`${name}-icon`}/>
                </div>
                <div className="exchange-card-prices">
                    <p className="usd-price">{formated(btcTradeVolume24h * btcRate)}</p>
                    <p className="btc-price">{btcTradeVolume24h.toFixed(2)} BTC</p>
                </div>
                <div className="exchange-card-score">
                    <p>{notice}</p>
                </div>
            </div>
            <div className="exchanges-links-wrap">
                <p className="tag">Rank: <span className="score-bg">{scoreRank}</span></p> 
                {urls.map( (url,i) => url !== '' && <p className="exchanges-links tag" key={i}>
                    <a href={url}>
                        <i class="fas fa-link"></i>
                        {name} link {i+1}
                    </a>
                </p>)}
                <p className="tag">country: {country}</p>
                    
            </div>
            <table className="exchanges-table">
                <thead>
                    <tr className="">
                        <th>#</th>                
                        <th>Currency</th>
                        <th>Pair</th>
                        <th>spread</th>
                        <th colspan={3}>
                            Price
                            <div className="flex-th-price">
                                <td>btc</td>
                                <td>eth</td>
                                <td>usd</td>
                            </div>
                        </th>
                        <th colspan={3}>
                            converted volume
                            <div className="flex-th-price">
                                <td>btc</td>
                                <td>eth</td>
                                <td>usd</td>
                            </div>
                        </th>
                        <th>trust score</th>
                    </tr>
                </thead>
                <tbody>
                {tickers.map( (coin,i) => <tr key={i}>
                        <td>{i+1}</td>
                        <td><Link to={`/cryptocurrencies/${coin.coin_id}`}>
                            {coin.coin_id && coin.coin_id.split('-').join(' ')}</Link>
                        </td>
                        <td>
                            <a href={coin.trade_url}>{coin.base}/{coin.target}</a>
                        </td>
                        <td>{coin.bid_ask_spread_percentage.toFixed(3)}%</td>
                        <td>{coin.converted_last.btc}</td>
                        <td>{coin.converted_last.eth}</td>
                        <td>{formated(coin.converted_last.usd)}</td>
                        <td>{formatedNum(coin.converted_volume.btc)}</td>
                        <td>{formatedNum(coin.converted_volume.eth)}</td>
                        <td>{formated(coin.converted_volume.usd)}</td>
                        <td>{coin.trust_score ? <i>&#10004;</i> : <i>&#10006;</i>}</td>
                    </tr> )}
                </tbody>
            </table>
            
        </div>
    )
}

export default ExchangeCard
