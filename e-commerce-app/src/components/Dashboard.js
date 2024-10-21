import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCog } from 'react-icons/fa'; // Import the gear icon

const Dashboard = () => {
  return (
    <Container className="dashboard-container">
      <div className="header">
        <FaCog size={50} className="gear-logo" />
        <h1 className="brand-text"><b>GearShift</b>  Dashboard</h1>

      </div>
      <div className="button-container">
        <Link to="/add-product" className="button-link">
          <Button variant="primary">Add Product</Button>
        </Link>
        <Link to="/products" className="button-link">
          <Button variant="secondary">View Products</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Dashboard;
