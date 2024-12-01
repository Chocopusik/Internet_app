import React from 'react';
import './Button/Button.css';
import { Link } from 'react-router-dom';

function ButtonItems({}) {
  return (
    <div className="item-buttons">
      <Link to="/items">
        <button className="button-link">Товары</button>
      </Link>
    </div>
  );
}

export default ButtonItems;