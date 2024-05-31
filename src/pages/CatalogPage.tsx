import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../services/api';

const CatalogPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data)).catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductList products={products} />
    </div>
  );
};

export default CatalogPage;
