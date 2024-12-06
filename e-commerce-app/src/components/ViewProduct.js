import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Form, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null); // Track errors
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/products");
      setProducts(response.data);
      setError(null); // Clear errors on success
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to fetch products. Please try again later.");
      Swal.fire(
        "Error",
        "Failed to fetch products. Please try again later.",
        "error"
      );
    }
  };

  const deleteProduct = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
        fetchProducts();
        Swal.fire("Deleted!", "The product has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        Swal.fire(
          "Error",
          "Failed to delete product. Please try again later.",
          "error"
        );
      }
    }
  };

  return (
    <div>
      {/* Header section with title and button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Product List</h1>
        <Button
          variant="secondary"
          onClick={() => navigate("/dashboard")}
          className="me-3" // Adds margin to the right of the button
        >
          Back to Dashboard
        </Button>
      </div>

      {/* Search input */}
      <Form.Control
        type="text"
        placeholder="Search Products"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />

      {/* Error alert */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Products table */}
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
              product.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.available_quantity}</td>
                <td>{product.category}</td>
                <td>
                  <Button variant="warning" href={`/edit/${product.id}`}>
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(product.id)}
                    className="ms-2"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
