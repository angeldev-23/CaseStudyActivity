import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Button, Card } from 'react-bootstrap';

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/products/${id}`);
          setProduct(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
          setLoading(false);
        }
      };
    fetchProduct(); // Call fetchProduct inside useEffect
  }, [id]); // Only depends on the `id`

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/products/${id}`);
      alert('Product successfully deleted!');
      navigate('/products'); // Navigate back to the product list
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Container className="delete-product-container">
      {product ? (
        <Card className="text-center mt-5">
          <Card.Body>
            <Card.Title>Are you sure you want to delete this product?</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {product.description} <br />
              <strong>Price:</strong> ${product.price} <br />
              <strong>Quantity:</strong> {product.quantity} <br />
              <strong>Category:</strong> {product.category}
            </Card.Text>
            <div className="action-buttons">
              <Button variant="danger" onClick={handleDelete} className="mr-2">
                Delete
              </Button>
              <Button variant="secondary" onClick={() => navigate('/products')}>
                Cancel
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <p>Product not found.</p>
      )}
    </Container>
  );
};

export default DeleteProduct;

