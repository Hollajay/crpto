

export const Coin_render = ({market_cap_rank,image,market_cap,current_price,total_volume,market_cap_change_percentage_24h,symbol,}) => {

  return (
    
    <div className='coin-row'>
      
    <p className="row_data">{market_cap_rank}</p>
    <div className="img_tag_coin row_data"><img src={image} />  
    <p className="row_data">{symbol}</p>

    </div>
    {current_price ?  <p className="row_data">${current_price.toLocaleString()}</p> : ""} 
   
    {market_cap_change_percentage_24h ?  <p className="row_data">{ market_cap_change_percentage_24h}%</p> : ""}
   {total_volume ?  <p className="row_data">${total_volume.toLocaleString()}</p> :""}
   {market_cap ?   <p className="row_data">${market_cap.toLocaleString()}</p> : ""}
  
</div>
  )
}
