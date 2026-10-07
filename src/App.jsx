import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceList from './components/ServiceList';
import Footer from './components/Footer';
import { organizationName, mainTitle, services } from './data/servicesData';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header orgName={organizationName} />
      <Hero title={mainTitle} />
      <ServiceList services={services} />
      <Footer />
    </div>
  );
}

export default App;