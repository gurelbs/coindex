import React,{useState,useEffect} from 'react'
import './searchBox.css'
import CoinGecko from 'coingecko-api'
import { Link } from 'react-router-dom'
export default function SerachBox() {
    const [allCoinNames, setAllCoinNames] = useState([])
    const [search, setSearch] = useState('')
    const CoinGeckoClient = new CoinGecko()

    useEffect(() => {
        const fetchData = async () => {
            let {data} = await CoinGeckoClient.coins.list();
            setAllCoinNames(data)
        }
        fetchData()
    },[])
    let searchResult = allCoinNames.filter(s => 
        s.name.toLowerCase()
              .startsWith(search) || 
        s.symbol.startsWith(search))

    const showResult = (e) => {
        setSearch(e.target.value)
        console.log(searchResult);
    }
    return (
        <div className='serach-box'>
            <input 
                type='search'
                value={search}
                onChange={showResult}
                placeholder='Search Cryptocurrency...'
                autoFocus
            />
            {search.length > 0 && 
            <div className='search-result-wrap'>
                <div>
                    {console.log(allCoinNames)}
                    {searchResult.map(item =>
                        <Link key={item.id} to={`/cryptocurrencies/${item.id}`}>
                            {item.name}
                        </Link>)}
                </div>
            </div>}
        </div>
    )
}
