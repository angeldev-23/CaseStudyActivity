import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/gearshift.png'; // Import your logo image

const AddProduct = () => {
  const [product, setProduct] = useState({
    barcode: '',
    description: '',
    price: '',
    quantity: '',
    category: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would make the API call to add the product
    console.log('Product added:', product);
    navigate('/products');
  };

  return (
    <Container className="add-product-container">
      {/* Logo and Header */}
      <div className="header-container">
        <img src={logo} alt="GearShift Logo" className="logo" />
        <h2 className="form-title"><strong>Add Product</strong></h2>
      </div>
      
      <Form onSubmit={handleSubmit} className="form-content">
        <Row>
          <Col md={6}>
            <Form.Group controlId="formBarcode" className="mb-3">
              <Form.Label>Barcode</Form.Label>
              <Form.Control 
                type="text" 
                name="barcode" 
                value={product.barcode} 
                onChange={handleChange} 
                placeholder="Enter product barcode" 
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text" 
                name="description" 
                value={product.description} 
                onChange={handleChange} 
                placeholder="Enter product description" 
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form.Group controlId="formPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type="number" 
                name="price" 
                value={product.price} 
                onChange={handleChange} 
                placeholder="Enter product price" 
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formQuantity" className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control 
                type="number" 
                name="quantity" 
                value={product.quantity} 
                onChange={handleChange} 
                placeholder="Enter product quantity" 
              />
            </Form.Group>
          </Col>
        </Row>
        
        <Form.Group controlId="formCategory" className="mb-4">
          <Form.Label>Category</Form.Label>
          <Form.Control 
            type="text" 
            name="category" 
            value={product.category} 
            onChange={handleChange} 
            placeholder="Enter product category" 
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-button">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
