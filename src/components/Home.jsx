// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Логотип" />
        </Link>
      </div>
      <div className="action-buttons">
        <Link to="/contacts">
          <button className="action-button">Контакты</button>
        </Link>
        <Link to="/payment">
          <button className="action-button">Оплата</button>
        </Link>
        <Link to="/delivery">
          <button className="action-button">Доставка</button>
        </Link>
      </div>
      <div className="product-button">
        <Link to="/products">
          <button className="nav-button">Товары</button>
        </Link>
      </div>
      {/* Здесь вы можете разместить фотографию или другие элементы */}
    </div>
  );
}

export default Home;
