import React, {useState, useEffect} from 'react'
import CoinGecko from 'coingecko-api'
import axios from 'axios'
import InfinitiiTr from './InfinitiiTr'
import InfiniteScroll from 'react-infinite-scroll-component';
import {Link } from "react-router-dom";
import Spinner from './Spinner'

export default function Cryptocurrencies() {
    const [namesIndex, setNamesIndex] = useState([])
    const [coinListData, setCoinListData] = useState(null)
    const [isFetch,setIsFetch] = useState(false)
    const CoinGeckoClient = new CoinGecko()
    useEffect(() => {
        const fetchNames = async () => {
            setIsFetch(true)
            let {data} = await CoinGeckoClient.coins.list();
            let names = data.map(coin => coin.id)
            setNamesIndex(names)
            setIsFetch(false)
        }
        
        fetchData()
        fetchNames()
    },[])
    const fetchData = async () => {
        let {data} = await CoinGeckoClient.coins.markets();
            console.log(data);
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
        setCoinListData(data)
    }
    const fetchMoreData = async () => {
        let {data} = await CoinGeckoClient.coins.markets();
            console.log(data);
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
        setCoinListData(coinListData.concat(data))
    }
    const formated = x => new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(x)
    return (
        <div className="page">
            <div className="table-fluid">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>price</th>
              <th>market cap</th>
              <th>change 24h</th>
              <th>high 24h</th>
              <th>low 24h</th>
            </tr>
          </thead>
          <tbody>
          { !coinListData ? <Spinner/> :
            coinListData.map(coin=> {
            return (
                <>
              <tr className='tr-wrap' key={coin.id}>
                  <td className='coin-name-td'>
                <Link to={`/cryptocurrencies/${coin.id}`}>
                    <div className="card-flex">
                        <img src={coin.image} alt={`${coin.name}-icon img`}></img>
                        <div className="coin-name">
                          <h5>{coin.name}</h5>
                          <div className="coin-mini-details">
                            <p className="rank">{coin.market_cap_rank}</p>
                            <p className="symbol-name">{coin.symbol}</p>
                          </div>
                        </div>
                    </div>
                  </Link>
                  </td>
                  <td
                  className="bold"
                  style={{color: coin.market_cap_change_percentage_24h < 0 ? '#cf4f4f' : '#107210'}}
                  >{formated(coin.current_price) || 0}</td>
                  <td>{formated(coin.market_cap.toFixed() || 0)}</td>
                  <td
                    className="bold"
                    style={{color: coin.market_cap_change_percentage_24h < 0 ? '#cf4f4f' : '#107210'}}
                  >{coin.market_cap_change_percentage_24h.toFixed(2)}%</td>
                  <td>{formated(coin.high_24h)}</td>
                  <td>{formated(coin.low_24h)}</td>
              </tr>
              
              {/* <InfiniteScroll
                dataLength={coinListData.length} //This is important field to render the next data
                next={fetchMoreData}    
                hasMore={true}
                
                loader={<h4>Loading...</h4>}>
                    <InfinitiiTr coin={coinListData}/>
            </InfiniteScroll> */}
            </>
            )
          })
          
          }
          </tbody>
        </table>
      </div>
    </div>
    )
}