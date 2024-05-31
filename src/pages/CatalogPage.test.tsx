import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CatalogPage from './CatalogPage';
import fetchMock from 'jest-fetch-mock';
beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders catalog page', async () => {
  fetchMock.mockResponseOnce(JSON.stringify([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]));

  render(
    <MemoryRouter>
      <CatalogPage />
    </MemoryRouter>
  );

  expect(screen.getByText('Product Catalog')).toBeInTheDocument();
  expect(await screen.findByText('Product 1')).toBeInTheDocument();
  expect(await screen.findByText('Product 2')).toBeInTheDocument();
});
