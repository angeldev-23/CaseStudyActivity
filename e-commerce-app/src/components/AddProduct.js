import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/gearshift.png";

const AddProduct = () => {
  const [product, setProduct] = useState({
    barcode: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !product.barcode ||
      !product.description ||
      !product.price ||
      !product.available_quantity ||
      !product.category
    ) {
      alert("Please fill out all fields.");
      return;
    }

    setLoading(true);
    setError(null); // Reset error state before API call

    try {
      const response = await axios.post(
        "http://localhost:8000/api/products",
        product
      );
      console.log("Product added:", response.product);
      // Redirect to the product list page after adding the product
      navigate("/products");
    } catch (error) {
      console.error("There was an error adding the product:", error);
      setError("Failed to add product. Please try again."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="add-product-container">
      {/* Logo and Header */}
      <div className="header-container">
        <img src={logo} alt="GearShift Logo" className="logo" />
        <h2 className="form-title">
          <strong>Add Product</strong>
        </h2>
      </div>
      {error && <Alert variant="danger">{error}</Alert>}{" "}
      {/* Display error if any */}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBarcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control
            type="text"
            name="barcode"
            value={product.barcode}
            onChange={handleChange}
            placeholder="Enter product barcode"
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter product description"
          />
        </Form.Group>
        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter product price"
          />
        </Form.Group>
        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            name="available_quantity"
            value={product.available_quantity}
            onChange={handleChange}
            placeholder="Enter product quantity"
          />
        </Form.Group>
        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter product category"
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
