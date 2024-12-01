// MarketItem.js
import React from 'react';
import { useParams } from 'react-router-dom';

const MarketItem = () => {
  const { itemId } = useParams();
  return <h3>Market Item: {itemId}</h3>;
};

export default MarketItem;