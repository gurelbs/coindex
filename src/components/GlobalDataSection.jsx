import CountUp from 'react-countup';

export default function GlobalDataSection({cryptocurrencies,marketCap,exchanges}) {
    return (
        <section className="global-data-section">
                    <div className="details-num-card">
                        <h1><CountUp end={cryptocurrencies || 0}/></h1>
                        <h2>Cryptocurrencies</h2>
                    </div>
                    <div className="details-num-card">
                        <h1>$<CountUp
                                start={0}
                                decimals={0}
                                separator={'.'}
                                end={Math.round(marketCap / 1000000000) || 0}
                            />T</h1>
                        <h2>Global Market Cap</h2> 
                    </div>
                    <div className="details-num-card">
                        <h1>
                            <CountUp end={exchanges || 0}/>
                        </h1>
                        <h2>Exchanges</h2>
                    </div>
            </section>
    )
}