import React, {useState, useEffect, useRef} from 'react'
import CoinGecko from 'coingecko-api'
import Spinner from './Spinner'
import Thead from './Thead'
import InfinitiiTr from './InfinitiiTr'

export default function Cryptocurrencies() {
    const [isLoad, setIsLoad] = useState(false)
    let [pageNumber, setPageNumber] = useState(1)
    const [coinListData, setCoinListData] = useState([])
    const CoinGeckoClient = new CoinGecko()
    const infinitable = useRef()
    useEffect(() => {
      fetchData()
    },[pageNumber])
    const fetchData = async () => {
      try {
        let {data} = await CoinGeckoClient.coins.markets({
          page: pageNumber
        });
        if (data){
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
      } catch (e) {
        console.log(e);
      }
      setIsLoad(false)
    }
    const hendleLoadMoreData = () => {
      setIsLoad(true)
      setPageNumber(prev => prev = pageNumber + 1)
    }
    return (
      <div className="page">
        <div ref={infinitable}  className="fluid-table">
        <table className="table">
          <Thead/>
          <tbody >
          { coinListData.length === 0 ? <Spinner/> :  
          coinListData.map((coin,i) => 
              <InfinitiiTr
              key={i}
              coin={coin}
            />)
          }
          </tbody>
        </table>
        <div className="load-more" onClick={() => hendleLoadMoreData()}>
          {isLoad ? <span className="mini-spinner"></span> : coinListData.length === 0 ? '' : <h1>load more</h1>}
        </div>
        </div>
    </div>
    )
}