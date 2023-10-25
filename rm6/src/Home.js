import React from 'react';
import HouseDisplay from './HouseDisplay';

function Home({ houses }) {
  return (
    <div>
      <HouseDisplay houses={houses} />
    </div>
  );
}

export default Home;