// import React, {useState, useEffect} from 'react'
// import CoinGecko from 'coingecko-api'
// import './runLine.css'
// export default function RunLine() {
//     const CoinGeckoClient = new CoinGecko()
//     const [globalData, setGlobalData] = useState([]) 

//     useEffect(() => {
//         const fetchGlobalData = async () => {
//             const { data } = await CoinGeckoClient.global();
//             const res = await data.data
//             setGlobalData({
//                 globalMarketCap24h: res.market_cap_change_percentage_24h_usd,
//                 marketCapPercentage: res.market_cap_percentage
//             })
//         }
//         fetchGlobalData()
//     },[])

//     return (
//         <div className="run-line">
//             <li>
//             <span>global market cap(24h): {globalData.globalMarketCap24h}%</span>
//             market cap percentage:
//             {Object.entries(globalData.marketCapPercentage).map(detail => 
//                     <span>{detail[0]}: {detail[1].toFixed(1)}%</span>
//                 )
//             }
//             </li>
//         </div>
//     )
// }