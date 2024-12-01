import React from 'react';
import './Button/Button.css';
import { Link } from 'react-router-dom';

function ButtonChat({}) {
  return (
    <div className="item-buttons">
      <Link to="/chat">
        <button className="button-link">Чатик</button>
      </Link>
    </div>
  );
}

export default ButtonChat;