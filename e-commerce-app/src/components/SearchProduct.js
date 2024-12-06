import React, { useState } from "react";
import { Form, Button, Container, Table } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8000/api/products?search=${query}`
      );
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); // Redirect to the correct route with dynamic ID
  };

  return (
    <Container>
      <h2>Search Products</h2>
      <Form onSubmit={handleSearch}>
        <Form.Group controlId="formSearch">
          <Form.Control
            type="text"
            placeholder="Enter barcode, description, or category"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
          Search
        </Button>
      </Form>

      {results.length > 0 ? (
        <Table striped bordered hover style={{ marginTop: "20px" }}>
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
            {results.map((product) => (
              <tr key={product.id}>
                <td>{product.barcode}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.available_quantity}</td>
                <td>{product.category}</td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(product.id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p style={{ marginTop: "20px" }}>No results found.</p>
      )}
    </Container>
  );
};

export default SearchProduct;
