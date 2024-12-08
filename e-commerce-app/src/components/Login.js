import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/gearshift.png";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Backend login API call
    if (email === "gearshift@gmail.com" && password === "password") {
      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to dashboard after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container className="login-container">
      <div className="login-box">
        <img src={logo} alt="GearShift Logo" className="logo" />{" "}
        {/* Use the image as the logo */}
        <h2>
          <b>LOGIN</b>
        </h2>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>
              <strong>Email</strong>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              <strong>Password</strong>
            </Form.Label>
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
      </div>
    </Container>
  );
};

export default Login;

/* 
  This is a great starting point for a login component! It is functional and cleanly coded. 
  Below are some suggestions to make the program more user-friendly and robust:

  1. Input Validation:
     - Add validation for the email and password fields to ensure they are not empty or invalid before submitting.
     - You can use regex to validate the email format and display an error message for invalid inputs.

  2. Feedback for Users:
     - Replace the "alert" for invalid credentials with an inline error message or toast notification for a better user experience.
     - Add a loading indicator during the login process to show the user that their request is being processed.

  3. Security Enhancements:
     - Avoid hardcoding credentials in the frontend. Instead, integrate a secure backend API for authentication.
     - Consider implementing password encryption and HTTPS communication to safeguard user data.

  4. Accessibility:
     - Add aria-label attributes to form inputs and buttons to improve accessibility for screen readers.
     - Ensure proper focus management after login (e.g., redirect focus to the main content on the dashboard).

  5. Styling and Responsiveness:
     - Ensure the login form is fully responsive, adapting gracefully to different screen sizes.
     - Add hover and focus effects to the login button for better visual feedback.

  6. Enhanced UX Features:
     - Include a "Forgot Password" link for
