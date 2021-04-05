import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'
function Card({data}) {
    let priceColor = data.market_data.price_change_percentage_24h > 0 ? 'rgb(0, 210, 0)' : 'rgb(255, 101, 0)'
    const formated = x => new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(x)
    const  createMarkup = x => ({__html: x    })
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
                        <img className="coin-symbol-img" src={data.image.large} alt="coin"></img>
                        <h1 className="coin-name">{data.name}</h1>
                        <p className="coin-symbol">{data.symbol}</p>
                    </div>
                    <div className="cards-details-btns">
                        <p className="data-basic-rank">rank #{data.market_cap_rank}</p>
                        <a className="data-basic-link" target="_blank" href={data.links.homepage[0]}>homepage</a>
                    </div>
                </div>
                <div className="data-price-wrap">
                    <p className="data-price-txt">{data.name} Price 
                    <span className="data-price-symbol">({data.symbol})</span></p>
                    <h1 
                    style={{color: priceColor}}
                    className="data-price">{formatedUsd(data.market_data.current_price.usd)}</h1>
                    <p 
                        style={{color: priceColor}} 
                        className="data-price-change">
                        <span class={`fas ${data.market_data.price_change_percentage_24h > 0 ? 'fa-sort-up' : data.market_data.price_change_percentage_24h < 0 ? 'fa-sort-down' : ''}`}></span>
                        {formated(data.market_data.price_change_percentage_24h)}%</p>
                </div>
            </section>
            <section>
                <div className="coin-description">
                    <p dangerouslySetInnerHTML={createMarkup(data.description.en)} />
                </div>
            </section>
        </div>
    )
}

export default Card
