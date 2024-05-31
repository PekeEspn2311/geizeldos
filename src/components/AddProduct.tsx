import React, { useState } from 'react';
import { addProduct } from '../services/api';
import { Product } from '../interfaces/Product';

const AddProduct: React.FC = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [model, setModel] = useState('');
    const [brand, setBrand] = useState('');
    const [year, setYear] = useState<number>(new Date().getFullYear());
    const [mileage, setMileage] = useState<number>(0);
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const product: Product = { name, image, model, brand, year, mileage, description };
        try {
            await addProduct(product);
            // Reset form
            setName('');
            setImage('');
            setModel('');
            setBrand('');
            setYear(new Date().getFullYear());
            setMileage(0);
            setDescription('');
        } catch (error) {
            console.error('Failed to add product', error);
        }
    };

    return (
        <div className="container form-container">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Model</label>
                    <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Brand</label>
                    <input
                        type="text"
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input
                        type="number"
                        value={year}
                        onChange={(e) => setYear(parseInt(e.target.value))}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mileage</label>
                    <input
                        type="number"
                        value={mileage}
                        onChange={(e) => setMileage(parseInt(e.target.value))}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default AddProduct;
