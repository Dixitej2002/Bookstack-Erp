// Dashboard.js
import React from 'react';
import fi from './icons/features.jpg'
import bm from './icons/book-mockup.png'
import Header from './Header';


import './Dashboard.css'

const Dashboard = () => {
 
  const totalProducts = 50;
  const totalOrders = 100;
  const totalRevenue = 5000;


  return (
    <div className='body-container'>
      <Header></Header>
      <div className="feature-image">
        <img src={ fi } alt="features pic" />

      </div>
      <div className="caption">
        <h1>Simple <br /> Readable & <br /> Understandable</h1>
        <img src={ bm } alt="book-mockup" />

      </div>
      <button className='btn-1'>Get Started Now</button>
      <div className="store-result">

        <h2>Result of Our Store</h2>
        <div className="un-line">

        </div>
        <div className="key-metrics">
          <p>Total Products: { totalProducts }</p>
          <p>Total Orders: { totalOrders }</p>
          <p>Total Revenue: ${ totalRevenue }</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
