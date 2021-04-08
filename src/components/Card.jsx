import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
function Card({data}) {
    let priceColor = data.change24 > 0 ? 'rgb(0, 210, 0)' : 'rgb(255, 101, 0)'
    const formated = x => new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(x)
    const  createMarkup = x => ({__html:x})
    const formatedUsd = x => new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
    }).format(x)
    return (
        <div data-name={data.id} className="card">
            <section className="card-cover">
                <div className="data-basic">
                    <div className="data-basic-details">
                        <img className="coin-symbol-img" src={data.img} alt="coin"></img>
                        <h1 className="coin-name">{data.name}</h1>
                        <p className="coin-symbol">{data.symbol}</p>
                    </div>
                    <div className="cards-details-btns">
                        <p className="data-basic-rank">rank #{data.rank}</p>
                        <a className="data-basic-link" target="_blank" href={data.hpLink}>homepage</a>
                    </div>
                </div>
                <div className="data-price-wrap">
                    <p className="data-price-txt">{data.name} Price 
                    <span className="data-price-symbol">({data.symbol})</span></p>
                    <h1 
                    style={{color: priceColor}}
                    className="data-price">{formatedUsd(data.price)}</h1>
                    <p 
                        style={{color: priceColor}} 
                        className="data-price-change">
                        <span class={`fas ${data.change24 > 0 ? 'fa-sort-up' : data.change24 < 0 ? 'fa-sort-down' : ''}`}></span>
                        {formated(data.change24)}%</p>
                </div>
            </section>
            <section className="main-section">
                <div className="coin-description">
                    <p dangerouslySetInnerHTML={createMarkup(data.description.en)} />
                </div>
                <div className="coin-statistics">
                    <div>
                        <h1 className="categories-txt">categories</h1>
                        <div className="categories">
                            {data.categories.map((category,i) => 
                                <i key={i}
                                    className="category">
                                    {category}
                                </i>)}
                        <div>
                            <p>{data.market_data.current_price.btc}BTC</p>
                            <p>{data.market_data.current_price.eth}ETH</p>
                            <td>1h price change: {data.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)}$</td>
                            <table className="coin-price--mini-table">
                                <thead>
                                    <tr>
                                        <th>24h</th>
                                        <th>7d</th>
                                        <th>14d</th>
                                        <th>30d</th>
                                        <th>60d</th>
                                        <th>200d</th>
                                        <th>1y</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="prices">
                                        <td>{data.market_data.price_change_24h.toFixed(1)}%</td>
                                        <td>{data.market_data.price_change_percentage_7d.toFixed(1)}%</td>
                                        <td>{data.market_data.price_change_percentage_14d.toFixed(1)}%</td>
                                        <td>{data.market_data.price_change_percentage_30d.toFixed(1)}%</td>
                                        <td>{data.market_data.price_change_percentage_60d.toFixed(1)}%</td>
                                        <td>{data.market_data.price_change_percentage_200d.toFixed(1)}%</td>
                                        <td>{data.market_data.price_change_percentage_1y.toFixed(1)}%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {data.status_updates.map( (item,i) => <div key={i}>
                                 <p>{item.description}</p>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Card
