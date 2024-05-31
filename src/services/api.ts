const API_URL = 'http://localhost:5000/api/products';

export const addProduct = async (product: Product) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });

    if (!response.ok) {
        throw new Error('Failed to add product');
    }

    return await response.json();
};

export const getProducts = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }

    return await response.json();
};
