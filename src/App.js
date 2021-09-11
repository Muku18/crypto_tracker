

import React, { useState, useEffect } from 'react';
import axios from 'axios';   //api call
import './App.css';
import Coin from './Components/Coin'


import Navbar from './Components/Navbar';
function App() {
  const [coins, setcoins] = useState([]);
  const [search, setSearch] = useState('');



  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(response => {
        setcoins(response.data);
        console.log(coins);
      })
      .catch(error => {
        console.log(error.message);
      })
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredCoins);

  const listItems = filteredCoins.map((coin) =>
    <Coin key={coin.id}
      name={coin.name}
      symbol={coin.symbol}
      image={coin.image}
      price={coin.current_price}
      volume={coin.total_volume}
      market_cap = {coin.market_cap}
      Chg = {coin.price_change_percentage_24h} />
  );




  return (
    <div className="App">

      <div>
      <Navbar/>
      </div>

      <div className="coins-search">
        <h1 className="coins-name"> Search Currency</h1>
        <form>
          <input type="text" placeholder="search" onChange={handleChange} className="coins-input" />
        </form>
      </div>
      <br/>
      
      <div className = "res">
      <table >
        <tr >
          <td><b>Image</b></td>
          <td><b>Name</b></td>
          <td><b>Symbol</b></td>
          <td><b>Price(INR)</b></td>
          <td><b>Volume</b></td>
          <td><b>Market cap</b></td>
          <td><b>Chg(24H)</b></td>

        </tr>




        {listItems}
      </table>
      </div>








    </div>
  );
}

export default App;
