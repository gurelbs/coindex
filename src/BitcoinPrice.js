import React, {useState, useEffect} from 'react';
import CoinGecko from 'coingecko-api'
let CoinGeckoClient = new CoinGecko()
const BitcoinPrice = () => {
    const [price, setPrice] = useState(0)
    useEffect(() => {
        const fetchData = async () => {
            let { data } = await CoinGeckoClient.simple.price({ids: 'bitcoin'})
            let bitcoinPrice = data.bitcoin.usd
            setPrice(bitcoinPrice)
            console.log(bitcoinPrice)
        }
        setInterval(() => fetchData(),5000)
        return () => clearInterval(price)
    },[price])

    return (
        <div>
            <h1>bitcoin price: {price}</h1>
        </div>
    );
}

export default BitcoinPrice;
