import React,{useState,useEffect,useRef} from 'react'
import {Link } from "react-router-dom";

import './table.css'
export default function Table({data,handleAddToWatchList}) {
  const [watchListBtn, setWatchListBtn] = useState(false)
  const [watchListData, setWatchListData] = useState([])
  const watchListRef = useRef()
    const formated = x => new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(x)
    return (
      <div className="fluid-table">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>watch list</th>
              <th>price</th>
              <th>market cap</th>
              <th>change 24h</th>
              <th>high 24h</th>
              <th>low 24h</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((coin,i) => {
            return (
              <tr className='tr-wrap' key={i} onClick={() => handleAddToWatchList(coin)}>
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
                  <td>
                    <i ref={watchListRef}
                      className={`${coin.watchList ? 'fas' : 'far'} fa-star`}></i>
                    </td>
                  <td
                  className="bold"
                  style={{color: coin.market_cap_change_percentage_24h < 0 ? '#cf4f4f' : '#107210'}}
                  >{formated(coin.current_price)}</td>
                  <td>{formated(coin.market_cap.toFixed())}</td>
                  <td
                    className="bold"
                    style={{color: coin.market_cap_change_percentage_24h < 0 ? '#cf4f4f' : '#107210'}}
                  >{coin.market_cap_change_percentage_24h.toFixed(2)}%</td>
                  <td>{formated(coin.high_24h)}</td>
                  <td>{formated(coin.low_24h)}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
}