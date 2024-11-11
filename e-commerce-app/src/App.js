import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import EditProduct from './components/Editproduct';
import DeleteProduct from './components/DeleteProducts';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-product" element={<AddProduct />} />
              <Route path="/products" element={<ViewProduct />} />
              <Route path="/edit-product/:id" element={<EditProduct />} />
              <Route path="/delete-product/:id" element={<DeleteProduct />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
