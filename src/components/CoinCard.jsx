import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card  from './Card'
import CoinGecko from 'coingecko-api'
import Spinner from './Spinner'
export default function CoinCard(name) {
      const CoinGeckoClient = new CoinGecko()
    const [coinData,setCoinData] =  useState(null)
    useEffect(() => {
        const fetchData = async() => {
            let id = name.match.params.id
            let {data} = await CoinGeckoClient.coins.fetch(id)
            setCoinData(data)
        }
        fetchData()
    },[coinData])
        return (

            <div>
                {console.log(coinData)}
                {!coinData ? <Spinner/> : <Card data={coinData}/>}
            </div>
    )
}