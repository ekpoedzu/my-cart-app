/*import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js';

const router = express.Router();

// @desc    Get all products
// @route   GET /api/products
// @access  Public
//router.get('/', async (req, res) => {
  
router.post('/', protect, admin, async (req, res) => {
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

// ✅ FIXED: Only admins can add new products
// @desc    Add new product
// @route   POST /api/products
// @access  Private/Admin
router.post('/', protect, async (req, res) => {
  try {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Only admins can add products' });
    }

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

//Working file
/*import express from 'express';
import mongoose from 'mongoose';
import Product from '../models/Product.js';
import { protect } from '../middleware/authMiddleware.js';
import { admin } from '../middleware/adminMiddleware.js'; // ✅ import this

const router = express.Router();

// ...

// @desc    Add new product
// @route   POST /api/products
// @access  Admin only
router.post('/', protect, admin, async (req, res) => {
  try {
    const { name, price, description, category, stock, image } = req.body;

    if (!name || !price || !description || !category || !stock || image == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof stock !== 'number' || stock < 0) {
      return res.status(400).json({ message: 'Stock must be a non-negative number' });
    }

    const newProduct = new Product({ name, price, description, category, stock, image });
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
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
//import {
  //deleteProduct,
  // other controllers...
//} from './controllers/productController.js';
//import { isAdmin, protect } from '../middleware/authMiddleware.js';


const router = express.Router();

router.delete('/:id', protect, admin, deleteProduct);

// @desc    Add new product
// @route   POST /api/products
// @access  Admin only
router.post('/', protect, admin, async (req, res) => {
  try {
    const { name, price, description, category, stock, image } = req.body;

    if (!name || !price || !description || !category || stock == null || image == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (typeof stock !== 'number' || stock < 0) {
      return res.status(400).json({ message: 'Stock must be a non-negative number' });
    }

    const newProduct = new Product({ name, price, description, category, stock, image });
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ message: 'Server error adding product' });
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Admin only
/*router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    console.error('Error deleting product:', err);
    res.status(500).json({ message: 'Server error deleting product' });
  }
});*/


 // DELETE /api/products/:id
/*router.delete('/:id', protect, admin, async (req, res) => {
  try {
    const { id } = req.params;

    // Optional: Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting product:', error.message);
    res.status(500).json({ message: 'Server error deleting product' });
  }
});*/

 /* router.delete('/:id', protect, admin, createProduct, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }*

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting product:', error.message);
    res.status(500).json({ message: 'Server error deleting product' });
  }
});

export default router;*/



// backend/routes/productRoutes.js
//import express from 'express';
/*import mongoose from 'mongoose';
import Product from '../models/Product.js';
//import { protect } from '../middleware/authMiddleware.js';
import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin protected routes
router.post('/', protect, admin, createProduct);
router.put('/:id', protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct); // ✅ Proper delete route

export default router;*/

// backend/routes/productRoutes.js

/*import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin protected routes
router.post('/', protect, adminonly, createProduct);
router.put('/:id', protect, adminOnly, updateProduct);
router.delete('/:id', protect, adminOnly, deleteProduct); // ✅ Proper delete route

export default router;*/


//my current file
/*import express from 'express';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
//import { protect, admin } from '../middleware/authMiddleware.js';
import asyncHandler from 'express-async-handler';
import Product from '../models/Product.js';

const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, adminOnly, createProduct);

router.delete('/:id', protect, adminOnly, asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
}));

// Public routes
router.get('/', getProducts);
router.get('/:id', getProductById);

// Admin protected routes
router.post('/', protect, adminOnly, createProduct);
router.put('/:id', protect, adminOnly, updateProduct);
router.delete('/:id', protect, adminOnly, deleteProduct);

export default router;*/



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



