import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';

test('renders product list', () => {
  const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' }
  ];
  render(
    <MemoryRouter>
      <ProductList products={products} />
    </MemoryRouter>
  );
  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
});
