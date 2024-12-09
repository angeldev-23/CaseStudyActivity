import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  // Fetch the existing product details by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/products/${id}`
        );

        console.log("Fetched product data:", response.data); // Log fetched product data
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Log the product data being sent
      console.log("Updating product with data:", product);

      // Make sure product is not null and has all required fields
      if (
        !product ||
        !product.barcode ||
        !product.description ||
        !product.price ||
        !product.available_quantity ||
        !product.category
      ) {
        console.error("Product data is incomplete:", product);
        return; // Prevent submission if data is incomplete
      }

      // Update the product using the API
      const response = await axios.put(
        `http://localhost:8000/api/products/${id}`,
        product
      );
      console.log("Product updated successfully:", response.data); // Log success response

      // Redirect to the view product page after successful update
      navigate(`/edit-product/${id}`);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // Render form or loading state
  if (!product) {
    return <div>Loading...</div>; // Show loading while fetching data
  }

  return (
    <Container>
      <h2>Edit Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBarcode">
          <Form.Label>Barcode</Form.Label>
          <Form.Control
            type="text"
            name="barcode"
            value={product.barcode}
            onChange={handleChange}
            placeholder="Enter product barcode"
            required
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
            required
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
            required
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
            required
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
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
    </Container>
  );
};

export default EditProduct;

Recommended Enhancements
Use React Hook Form or a similar library for managing forms. This would simplify validation and state management.
Use a loading spinner or progress indicator while fetching or submitting data.
Replace the hardcoded API URLs with environment variables to allow flexibility between environments (e.g., development, production).
Provide more informative error feedback to the user on form submission failure.
