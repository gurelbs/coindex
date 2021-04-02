import React from 'react'
import CountUp from 'react-countup';

export default function GlobalDataSection({cryptocurrencies,marketCap,exchanges}) {
    return (
        <section className="global-data-section">
                    <div className="details-num-card">
                        <h1><CountUp end={cryptocurrencies || ''}/></h1>
                        <h2>Cryptocurrencies</h2>
                    </div>
                    <div className="details-num-card">
                        <h1>$
                            <CountUp
                                className='' 
                                separator=","
                                decimals={3}
                                decimal=","
                                duration={2}
                                end={marketCap || ''}
                            /></h1>
                        <h2>MarketCap</h2>
                    </div>
                    <div className="details-num-card">
                        <h1>
                            <CountUp end={exchanges || ''}/>
                        </h1>
                        <h2>Exchanges</h2>
                    </div>
            </section>
    )
}