
// backend/routes/productRoutes.js
import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/ProductController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin protected routes
router.post('/', protect, adminOnly, createProduct);
router.put('/:id', protect, adminOnly, updateProduct);
router.delete('/:id', protect, adminOnly, deleteProduct);

export default router;












/*import express from 'express';//the working version
import Product from '../models/Product.js';

const router = express.Router();

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// GET product by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if(product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

export default router;*/


//productRoutes.js
/*import express from 'express';
import Product from '../models/Product.js';
import mongoose from 'mongoose';
import { protect } from '../middleware/authMiddleware.js';

// Then apply:
router.post('/', protect, async (req, res) => { ... });


const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// @desc    Get a product by ID
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Check if ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error('Error fetching product:', err.message);
    res.status(500).json({ message: 'Server error fetching product' });
  }
// @desc    Add a new product
// @route   POST /api/products
// @access  Protected (requires login)
router.post('/', async (req, res) => {
  try {
    const { name, image, category, price, description } = req.body;

    if (!name || !image || !category || !price || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product({
      name,
      image,
      category,
      price,
      description,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({ message: 'Server error adding product' });
  }
});


});

export default router;*/



/*import express from 'express';
import Product from '../models/Product.js';
import mongoose from 'mongoose';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// @desc    Get a product by ID
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  // Check if ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error('Error fetching product:', err.message);
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

// ✅ FIXED: Moved POST route outside of GET routes
// @desc    Add a new product
// @route   POST /api/products
// @access  Protected
router.post('/', protect, async (req, res) => {
  try {
    const { name, image, category, price, description } = req.body;

    if (!name || !image || !category || !price || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product({
      name,
      image,
      category,
      price,
      description,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({ message: 'Server error adding product' });
  }
});

export default router;*/




// productRoutes.js
/*import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// @desc    Get a product by ID
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error('Error fetching product:', err.message);
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

// ✅ FIXED: This must be OUTSIDE any other routes
// @desc    Add a new product
// @route   POST /api/products
// @access  Protected
router.post('/', protect, async (req, res) => {
  try {
    const { name, image, category, price, description } = req.body;

    if (!name || !image || !category || !price || !description) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product({
      name,
      image,
      category,
      price,
      description,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    console.error('Error adding product:', err.message);
    res.status(500).json({ message: 'Server error adding product' });
  }
});

export default router;*/



// backend/routes/productRoutes.js
/*import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';
//console.log('📦 Received product data:', req.body);


const router = express.Router();
//console.log('📦 Received product data:', req.body);

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

// ✅ @desc    Add new product
// ✅ @route   POST /api/products
// ✅ @access  Protected (requires login)
router.post('/', protect, async (req, res) => {
  try {
    const { name, image, category, price, description, stock } = req.body;

    if (!name || !image || !category || !price || !description || stock == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = new Product({ name, image, category, price, description, stock });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: 'Server error adding product' });
  }
});

export default router;*/


//my current ProductRoute.js
/*import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// @desc    Get product by ID
// @route   GET /api/products/:id
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

// @desc    Add new product
// @route   POST /api/products
// @access  Protected (requires login)
router.post('/', protect, async (req, res) => {
  try {
    const { name, image, category, price, description, stock } = req.body;

    if (!name || !image || !category || !price || !description || stock == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof stock !== 'number' || stock < 0) {
      return res.status(400).json({ message: 'Stock must be a non-negative number' });
    }

    const newProduct = new Product({ name, image, category, price, description, stock });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ message: 'Server error adding product' });
  }
});

export default router;*/




/*import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';

const router = express.Router();

// GET /api/products?category=&page=&limit=
// Public - list products with optional category filter and pagination
router.get('/', async (req, res) => {
  try {
    const { category, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const count = await Product.countDocuments(filter);

    res.json({
      products,
      pagination: {
        total: count,
        page: Number(page),
        pages: Math.ceil(count / limit),
      },
    });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// GET product by ID (public)
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('Error fetching product:', err);
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

// POST add new product (admin only)
router.post('/', protect, admin, async (req, res) => {
  try {
    const { name, image, category, price, description, stock } = req.body;

    if (!name || !image || !category || !price || !description || stock == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof price !== 'number' || price <= 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }

    if (typeof stock !== 'number' || stock < 0) {
      return res.status(400).json({ message: 'Stock must be a non-negative number' });
    }

    const newProduct = new Product({ name, image, category, price, description, stock });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ message: 'Server error adding product' });
  }
});

// PUT update product (admin only)
router.put('/:id', protect, admin, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const { name, image, category, price, description, stock } = req.body;

    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    // Validate input if present
    if (price !== undefined && (typeof price !== 'number' || price <= 0)) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }

    if (stock !== undefined && (typeof stock !== 'number' || stock < 0)) {
      return res.status(400).json({ message: 'Stock must be a non-negative number' });
    }

    product.name = name ?? product.name;
    product.image = image ?? product.image;
    product.category = category ?? product.category;
    product.price = price ?? product.price;
    product.description = description ?? product.description;
    product.stock = stock ?? product.stock;

    const updated = await product.save();
    res.json(updated);
  } catch (err) {
    console.error('Error updating product:', err);
    res.status(500).json({ message: 'Server error updating product' });
  }
});

// DELETE product (admin only)
router.delete('/:id', protect, admin, async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid product ID' });
  }

  try {
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    await product.remove();
    res.json({ message: 'Product removed successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Server error deleting product' });
  }
});

export default router;*/



