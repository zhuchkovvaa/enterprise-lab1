import React from 'react';

const Hero = ({ title }) => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1>{title}</h1>
        <p>Enterprise – универсальная «кнопка» для решения ваших повседневных задач.</p>
        <button className="btn-primary">Попробуйте сейчас</button>
      </div>
      <div className="hero-image">
        {/* Заглушка вместо оригинального графика */}
        <img src="https://placehold.co/500x300/f0f0f0/333?text=Growth+Chart" alt="Growth Chart" />
      </div>
    </section>
  );
};

export default Hero;