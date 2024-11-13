import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import logo from "../assets/gearshift.png";

const Dashboard = ({ userName = "User" }) => {
  return (
    <Container className="dashboard-container">
      <div className="header">
        <FaCog size={50} className="gear-logo" />
        <h1 className="brand-text">
          <b>GearShift</b> Dashboard
        </h1>
      </div>

      {/* Welcome Message */}
      <p className="welcome-message">
        Welcome back, {userName}! Here are quick tools to help you manage your
        products efficiently.
      </p>

      {/* Divider */}
      <hr className="divider" />

      <div className="button-container">
        <Link to="/add-product" className="button-link">
          <Button variant="primary" className="dashboard-button">
            Add Product
          </Button>
        </Link>
        <Link to="/products" className="button-link">
          <Button variant="secondary" className="dashboard-button">
            View Products
          </Button>
        </Link>
      </div>

      {/* Logo and Footer */}
      <div className="logo-container">
        <br></br>
        <img src={logo} alt="GearShift Logo" className="logo" />{" "}
        {/* Use the image as the logo */}
        <br></br>
        <br></br>
        <p className="footer-text">
          <i>All Rights Reserved. GearShift 2024</i>
        </p>
      </div>
    </Container>
  );
};

export default Dashboard;
