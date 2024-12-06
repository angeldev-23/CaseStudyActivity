import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddProduct from "./components/AddProduct";
import ViewProduct from "./components/ViewProduct";
import EditProduct from "./components/Editproduct";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
          <Route
            path="/add-product"
            element={isAuthenticated ? <AddProduct /> : <Navigate to="/" />}
          />
          <Route
            path="/products"
            element={isAuthenticated ? <ViewProduct /> : <Navigate to="/" />}
          />
          <Route
            path="/edit/:id"
            element={isAuthenticated ? <EditProduct /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
