import React, { useState } from 'react';
import { addProduct } from '../services/api';

const AddProductPage: React.FC = () => {
  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [mileage, setMileage] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<FileList | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('model', model);
    formData.append('brand', brand);
    formData.append('year', year);
    formData.append('mileage', mileage);
    formData.append('description', description);
    if (images) {
      Array.from(images).forEach((image) => {
        formData.append('images', image);
      });
    }

    try {
      const result = await addProduct(formData);
      if (result) {
        alert('Product added successfully');
        setName('');
        setModel('');
        setBrand('');
        setYear('');
        setMileage('');
        setDescription('');
        setImages(null);
      }
    } catch (error) {
      alert('Failed to add product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="file"
        multiple
        onChange={(e) => setImages(e.target.files)}
        aria-label="Upload Images"
        required
      />
      <input
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        placeholder="Model"
        required
      />
      <input
        type="text"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Brand"
        required
      />
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        required
      />
      <input
        type="text"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        placeholder="Mileage"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductPage;
