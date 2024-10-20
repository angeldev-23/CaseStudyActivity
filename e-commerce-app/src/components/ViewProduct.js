import React, { useEffect, useState } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend
    setProducts([
      { id: 1, barcode: '0428', description: 'Rim', price: 1500, quantity: 25, category: 'Chrome Rims' },
      { id: 2, barcode: '1421', description: 'Headlight', price: 750, quantity: 30, category: 'LED' },
      // More products...
    ]);
  }, []);

  return (
    <Container>
      <h2>Product List</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.barcode}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.category}</td>
              <td>
                <Link to={`/edit-product/${product.id}`}>
                  <Button variant="warning">Edit</Button>
                </Link>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ViewProduct;
