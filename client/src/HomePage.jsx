import React from 'react';
import { Link } from 'react-router-dom';
import ButtonItems from './components/ButtonItems';
import ButtonChat from './components/ButtonChat';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Главная страница</h1>
      <div className="button-container">
      <ButtonItems />
      <ButtonChat />
      </div>
    </div>
  );
}

export default HomePage;