import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/api';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetchProductById(id).then(data => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      {product.images && product.images.map((image: string, index: number) => (
        <img key={index} src={`http://localhost:3001/${image}`} alt={product.name} style={{ maxWidth: '400px', marginBottom: '10px' }} />
      ))}
      <p><strong>Model:</strong> {product.model}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Year:</strong> {product.year}</p>
      <p><strong>Mileage:</strong> {product.mileage}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetailPage;
