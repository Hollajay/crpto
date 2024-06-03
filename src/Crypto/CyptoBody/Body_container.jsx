
import { useEffect, useState } from 'react'
import './body-container.css'
import axios from 'axios';
import { Coin_render } from './Coin_render';
import { Link } from 'react-router-dom';


export const Body_container = () => {
   
const [coins, setCoins] = useState([])


 useEffect(() => {
    
axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
.then((response =>{
  console.log(response.data);
  setCoins(response.data)
})).catch(()=>{
  console.log("err")
})
 
 
   
  }, [])


  return (
    <div className="bodyContainer">
        <div className="chain_grid">
            <div className="left_chain_grid">
            <p>
                <strong>BLOCK CHAIN WEBSITE </strong><br/> 
                A PLATFORM WHERE <br/> YOU CAN TRADE <br/> ALL COINS
            </p>
            </div>
            <div className='right_chain_grid'>
           <img src='https://gold-project-dun.vercel.app/static/media/header.9d7dd4560510115eb9a5.jpg' alt='image'/>

            </div>
        </div>

        <div className='coin_container'>
            <h1>Authorized Coins with current rate</h1>
            <div className='heading'>
                <p>#</p>
                <p>coin</p>
                <p>price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt cap</p>
            </div>

           
            
        </div>
        {
              // coins.map((market_cap_rank)=>{
              //   <Coin_render market_cap_rank={market_cap_rank}/>
              // })
              coins.map(({market_cap_rank,image,name,market_cap,current_price,total_volume,market_cap_change_percentage_24h,symbol,id},key) =>
            
              <>
              <Link to={`/coin/${id}`}  style={{color:"whitesmoke",textDecoration:"none"} }>
              <Coin_render key={key} market_cap_rank={market_cap_rank} image={image} name={name} market_cap={market_cap} current_price={current_price} market_cap_change_percentage_24h={market_cap_change_percentage_24h}
              total_volume={total_volume}  symbol={symbol }     />
              </Link>
              </>

  )
            }
    </div>
  )
}
