
import mongoose from 'mongoose';
import Product from '../models/Product.js';

// GET /api/products
export const getProducts = async (_req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    // Return plain array to match your existing frontend
    res.json(products);
  } catch (err) {
    console.error('❌ getProducts:', err);
    res.status(500).json({ message: 'Server error while fetching products' });
  }
};

// GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error('❌ getProductById:', err);
    res.status(500).json({ message: 'Server error while fetching product' });
  }
};

// POST /api/products  (Admin)
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, category, stock, brand } = req.body;
    if (!name || !price || !description || !image || !category || stock == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const product = await Product.create({
      name, price, description, image, category, stock, brand,
      user: req.user._id,
    });
    res.status(201).json(product);
  } catch (err) {
    console.error('❌ createProduct:', err);
    res.status(500).json({ message: 'Failed to create product' });
  }
};

// PUT /api/products/:id  (Admin)
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }
    const { name, price, description, image, category, stock, brand } = req.body;
    const product = await Product.findById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    if (name !== undefined) product.name = name;
    if (price !== undefined) product.price = price;
    if (description !== undefined) product.description = description;
    if (image !== undefined) product.image = image;
    if (category !== undefined) product.category = category;
    if (stock !== undefined) product.stock = stock;
    if (brand !== undefined) product.brand = brand;

    const updated = await product.save();
    res.json(updated);
  } catch (err) {
    console.error('❌ updateProduct:', err);
    res.status(500).json({ message: 'Failed to update product' });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.deleteOne();
    res.json({ success: true, message: '✅ Product removed successfully' });
  } catch (error) {
    console.error('❌ Product delete error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting product',
      details: error.message,
    });
  }
};








