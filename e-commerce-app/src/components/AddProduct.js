import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AddProduct = () => {
  const [product, setProduct] = useState({
    barcode: '',
    description: '',
    price: '',
    quantity: '',
    category: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would make the API call to add the product
    console.log('Product added:', product);
    
    // Simulate successful addition of product and navigate to the product list
    navigate('/products'); // Redirect to product list page after adding product
  };

  return (
    <Container>
      <h2><strong>Add Product</strong></h2>
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
            name="quantity" 
            value={product.quantity} 
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
        <br></br>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
