import './App.css';
import React, { Component } from 'react'
import CoinGecko from 'coingecko-api'
let CoinGeckoClient = new CoinGecko()

export default class Top100 extends Component {
  state = {data: []}
  componentDidMount(){
    this.interval = setInterval(() => {
      this.saveCoinData()
    },3000)
  }
  componentWillUnmount(){
    return this.state.data !== [] ? clearInterval(this.interval) : null
  }
  saveCoinData = async () => {
    let res = await CoinGeckoClient.coins.markets()
    let data = res.data
    return this.setState({data: data})
  }
  render(){
    let {data} = this.state
    let formated = x => new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(x)
    return (
      <div className="top-100-table">
        <table>
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
          {
            data.map((coin,i) => {
            return (
              <tr key={i} className='tr-wrap'>
                  <td className='coin-name-td'>
                    <div className='coin-name-div'>
                      <img src={coin.image} alt={`${coin.name}-icon`}></img>
                      <div>
                        <h5>{coin.name}</h5>
                        <p>
                          <span>{coin.market_cap_rank}</span>
                          <span>{coin.symbol}</span>
                        </p>
                      </div>
                    </div>
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
    );
  }
}