import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddProductPage from './AddProductPage';
test('renders Add Product Page and allows adding a product', () => {
  render(
    <MemoryRouter>
      <AddProductPage />
    </MemoryRouter>
  );

  // Verifica que la página se renderice correctamente
  expect(screen.getByText('Add Product')).toBeInTheDocument();

  // Simula el llenado del formulario
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'New Product' } });
  fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'This is a new product' } });
  fireEvent.change(screen.getByLabelText(/price/i), { target: { value: '19.99' } });

  // Simula el envío del formulario
  fireEvent.click(screen.getByText(/submit/i));

  // Verifica que el producto se haya añadido (puedes ajustar este test según tu lógica específica)
  // Ejemplo: Verificar una llamada de API simulada o cambio en el estado
  // expect(screen.getByText('Product successfully added!')).toBeInTheDocument(); // Ajusta esto según tu lógica
});
