import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; 2024 Enterprise. Все права защищены.</p>
        <nav>
          <ul>
            <li><a href="#privacy">Политика конфиденциальности</a></li>
            <li><a href="#terms">Условия использования</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;