import React from 'react';

const Header = ({ orgName }) => {
  return (
    <header className="header">
      <div className="container header-inner">
        {/* Логотип */}
        <a href="#" className="logo">
          <div className="logo-icon"></div>
          {orgName}
        </a>
        
        {/* Навигация */}
        <nav>
          <ul>
            <li><a href="#catalog">Каталог</a></li>
            <li><a href="#guarantees">Гарантии</a></li>
            <li><a href="#contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;