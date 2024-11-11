import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form, Container } from 'react-bootstrap';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/products');
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
    fetchProducts();
  };

  return (
    <Container className="product-list-container">
      <h1 className="product-list-title"><b>Product List</b></h1>

      <Form.Control
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <Table striped bordered hover className="product-table mt-4">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((product) =>
              product.description.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{product.category}</td>
                <td>
                  <Button variant="warning" href={`/edit/${product.id}`} className="action-button">
                    Edit
                  </Button>{' '}
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(product.id)}
                    className="action-button"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProductList;
