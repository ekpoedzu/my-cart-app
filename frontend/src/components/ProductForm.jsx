// src/components/admin/ProductForm.jsx
import React from 'react';

const ProductForm = ({ formData, setFormData, handleSubmit, isEditMode }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isEditMode ? 'Edit Product' : 'Add Product'}</h2>

      <input
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="price"
        type="number"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="stock"
        type="number"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="category"
        type="text"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full p-2 border rounded"
        required
      />
      <input
        name="image"
        type="text"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL or path"
        className="w-full p-2 border rounded"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      />

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {isEditMode ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  );
};

export default ProductForm;
