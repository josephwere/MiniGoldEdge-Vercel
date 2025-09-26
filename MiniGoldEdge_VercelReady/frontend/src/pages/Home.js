
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Mini GoldEdge</h1>
      <p>Demo content: Clinics, Schools, Landlords, Shops</p>
      <div className="demo-cards">
        <div>Clinic Template</div>
        <div>School Template</div>
        <div>Landlord Template</div>
        <div>Shop Template</div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
