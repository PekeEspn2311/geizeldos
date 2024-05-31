import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import ProductCatalog from './components/ProductCatalog';
import Home from './components/home';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/add-product">Add Product</Link></li>
                    <li><Link to="/catalog">Catalog</Link></li>
                </ul>
            </nav>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-product" element={<AddProduct />} />
                    <Route path="/catalog" element={<ProductCatalog />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
