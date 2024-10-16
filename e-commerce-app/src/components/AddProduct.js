import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    barcode: '',
    description: '',
    price: 0,
    quantity: 0,
    category: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/products', product, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      alert('Product added successfully');
    } catch (error) {
      console.error('Failed to add product', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* Input fields for barcode, description, price, quantity, and category */}
        <Form.Group controlId="formBarcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control
            type="text"
            name="barcode"
            value={product.barcode}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </Form.Group>
        {/* Continue with other form fields */}
        <Button variant="primary" type="submit">Add Product</Button>
      </Form>
    </Container>
  );
}

export default AddProduct;
