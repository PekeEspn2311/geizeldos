const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

// Configuración de multer para almacenar archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Ruta para manejar la carga de archivos y creación de productos
app.post('/products', upload.array('images', 10), (req, res) => {
  console.log('Received request to add product'); // Depuración
  const images = req.files.map(file => file.path);
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    model: req.body.model,
    brand: req.body.brand,
    year: req.body.year,
    mileage: req.body.mileage,
    description: req.body.description,
    images: images,
  };

  console.log('New product data:', newProduct); // Depuración

  fs.readFile('db.json', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    let db;
    try {
      db = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing db.json:', parseErr);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    db.products.push(newProduct);
    fs.writeFile('db.json', JSON.stringify(db), (err) => {
      if (err) {
        console.error('Error writing to db.json:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      console.log('Product added successfully:', newProduct); // Depuración
      res.status(201).json(newProduct);
    });
  });
});

// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    let db;
    try {
      db = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing db.json:', parseErr);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(db.products);
  });
});

// Ruta para obtener un producto por ID
app.get('/products/:id', (req, res) => {
  fs.readFile('db.json', (err, data) => {
    if (err) {
      console.error('Error reading db.json:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    let db;
    try {
      db = JSON.parse(data);
    } catch (parseErr) {
      console.error('Error parsing db.json:', parseErr);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    const product = db.products.find(p => p.id == req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
