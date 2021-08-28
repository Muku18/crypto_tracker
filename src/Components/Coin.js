import './Coin.css'

const Coin = (props) => {
  
    return (
        <>
            <tr>
                <td><img className="image" src={props.image} alt="crypto" /></td>
                <td>{props.name}</td>
                <td>{props.symbol}</td>
                <td>₹&nbsp;
                {props.price}
                 
                
                
                
                </td>
                <td>₹&nbsp;{props.volume}</td>
                <td>₹&nbsp;{props.market_cap}</td>
                <td>   {props.Chg < 0 ? (
            <b><p className='coin-percent red'>
            {props.Chg.toFixed(2)}%&nbsp;<span>&#8595;</span>&nbsp;</p></b>
          ) : (
            <b><p className='coin-percent green'>{props.Chg.toFixed(2)}%&nbsp;<span>&#8593;</span>&nbsp;</p></b>
          )}
          </td>

            </tr>
        </>
    )
}

export default Coin

