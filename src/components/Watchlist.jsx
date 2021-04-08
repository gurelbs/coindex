import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Table from './Table'
import { Link } from 'react-router-dom'
import './watchList.css'
export default function Watchlist() {
    const [watchList, setWatchList] = useState([])
    const url = 'https://606e00260c054f00176564d4.mockapi.io/coins'
    useEffect(() => {
        const fetchData =  async () => {
            let {data} = await axios.get(url)
            setWatchList(data)
        }
        fetchData()
    },[])
    const removeFromWatchList = async coin => {
        let i = watchList.find( e => coin.id === e.id)
        let fil = watchList.filter(list => list !== i)
        setWatchList(fil)
        await axios.delete(`${url}/${i.id}`)
    }
    return (
        <div  className="page">
            {
                watchList.length === 0 
                ? <div className="txt-nothing-msg">
                    <h1>There Is Nothing Here...</h1>
                    <p>
                        Click <i className='far fa-star'/> to Add Your Favorite Coin To the  WatchList or click <i className='fas fa-star'/> again to remove it
                    </p>
                    <Link to='/'>Top 100 Coin</Link>
                </div>
                : <Table data={watchList} handleAddToWatchList={coin => removeFromWatchList(coin)}/>
            }
        </div>
    )
}

 
