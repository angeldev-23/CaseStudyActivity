import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa'; // Import the gear icon

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Backend login API call
    if (email === 'gearshift@gmail.com' && password === 'password') {
      setIsAuthenticated(true);
      navigate('/dashboard'); // Redirect to dashboard after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  const handleForgotPassword = () => {
    alert('Answer the admin security question to reset your password.');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <Container className="login-container">
      <div className="login-box">
        <FaCog className="gear-logo" size={50} /> {/* Use FaCog as gear logo */}
        <h2><b>GearShift</b> Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><strong>Email</strong></Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="formBasicPassword">
            <Form.Label><strong>Password</strong></Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            <strong>Login</strong>
          </Button>
        </Form>
        <div className="forgot-password" onClick={handleForgotPassword}>
          Forgot Password?
        </div>
        <div className="signup" onClick={handleSignUp}>
          Sign Up
        </div>
      </div>
    </Container>
  );
};

export default Login;
