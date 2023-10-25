import React from 'react';

function HouseDisplay({ houses }) {
  return (
    <div>
      <h2>Houses for Sale</h2>
      <ul>
        {houses.map((house, index) => (
          <li key={index}>
            <h3>{house.name}</h3>
            <p>{house.address}</p>
            <p>Price: ${house.price}</p>
            <p>{house.isSold ? 'Sold' : 'Available'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseDisplay;