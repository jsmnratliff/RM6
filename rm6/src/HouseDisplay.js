import React from 'react';

function HouseDisplay({ houses }) {
    const whiteText = { color: 'white' };
  return (
    <div>
      <ul style={whiteText}>
        {houses.map((house, index) => (
          <li key={index}>
            <h3 style={whiteText}>{house.name}</h3>
            <p style={whiteText}>{house.address}</p>
            <p style={whiteText}>Price: ${house.price}</p>
            <p style={whiteText}>{house.isSold ? 'Sold' : 'Available'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseDisplay;