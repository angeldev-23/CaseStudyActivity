import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';

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
    <div>
      <h1>Product List</h1>
      <Form.Control
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table striped bordered hover>
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
                  <Button variant="warning" href={`/edit/${product.id}`}>Edit</Button>
                  <Button variant="danger" onClick={() => deleteProduct(product.id)}>Delete</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
