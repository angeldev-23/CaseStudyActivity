import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DeleteProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/${id}`
        );

        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/products/${id}`);
      console.log("Product deleted successfully");
      navigate("/products");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <h2>Delete Product</h2>
      <p>Are you sure you want to delete the following product?</p>
      <ul>
        <li>
          <strong>Barcode:</strong> {product.barcode}
        </li>
        <li>
          <strong>Description:</strong> {product.description}
        </li>
        <li>
          <strong>Price:</strong> ${product.price}
        </li>
        <li>
          <strong>Quantity:</strong> {product.available_quantity}
        </li>
        <li>
          <strong>Category:</strong> {product.category}
        </li>
      </ul>
      <Button variant="danger" onClick={handleDelete}>
        Confirm Delete
      </Button>
      <Button
        variant="secondary"
        onClick={() => navigate("/products")}
        style={{ marginLeft: "10px" }}
      >
        Cancel
      </Button>
    </Container>
  );
};

export default DeleteProduct;
