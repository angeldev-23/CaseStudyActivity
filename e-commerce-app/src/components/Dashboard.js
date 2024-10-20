import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Container>
      <h2>Dashboard</h2>
      <Link to="/add-product">
        <Button variant="primary">Add Product</Button>
      </Link>
      <Link to="/products">
        <Button variant="secondary">View Products</Button>
      </Link>
    </Container>
  );
};

export default Dashboard;
