import React, { useState } from 'react';
import Home from './Home.js';
import './App.css';

function App() {
  const [houses] = useState([
    {
      name: 'Lakeside Villa',
      address: '123 Lake St, Watertown, MA',
      price: 1000000,
      isSold: false,
    },
    {
      name: 'Mountain Retreat',
      address: '456 Mountain Rd, Boulder, CO',
      price: 750000,
      isSold: true,
    },
    {
      name: 'Downtown Apartment',
      address: '789 Main St, Seattle, WA',
      price: 500000,
      isSold: false,
    },
  ]);

  return (
    <div className="App">
      <h1 className='bubble-text'>Real Estate Listings</h1>
      <Home houses={houses} />
    </div>
  );
}

export default App;