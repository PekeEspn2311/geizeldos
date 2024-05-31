import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Product } from '../interfaces/Product';

const ProductCatalog: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        };
        fetchProducts();
    }, []);

    return (
        <div className="container catalog-container">
            <h2>Product Catalog</h2>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Model: {product.model}</p>
                        <p>Brand: {product.brand}</p>
                        <p>Year: {product.year}</p>
                        <p>Mileage: {product.mileage}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCatalog;
