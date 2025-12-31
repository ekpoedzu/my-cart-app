
// src/components/admin/EditProduct.jsx
/*import React, { useState, useEffect } from 'react';

const EditProduct = ({ productData, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
  });

  // Initialize form data when productData changes
  useEffect(() => {
    if (productData) {
      setFormData({
        name: productData.name || '',
        description: productData.description || '',
        price: productData.price || '',
        category: productData.category || '',
        stock: productData.stock || '',
        image: productData.image || '',
      });
    }
  }, [productData]);

  // Ensure image URL is correctly formatted
  /*const formatImage = (image) => {
    if (!image) return '';
    return image.startsWith('http') || image.startsWith('/')
      ? image
      : `/images/${image}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return; // ✅ Safety check
    const dataToSubmit = { ...formData, image: formatImage(formData.image) };
    onSubmit(dataToSubmit);
  };*/

  /*const formatImage = (image) => {
  if (!image) return '';

  let v = image;

  // remove fakepath if user copied from file input
  v = v.replace(/^C:\\fakepath\\/, '');

  // trim + replace spaces with hyphens + lowercase
  v = v.trim().replace(/\s+/g, '-').toLowerCase();

  // ensure correct prefix
  if (!v.startsWith('/images/') && !v.startsWith('/uploads/') && !v.startsWith('http')) {
    v = `/images/${v}`;
  }

  return v;
};


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </label>

      <label className="block">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows="3"
        />
      </label>

      <label className="block">
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          min="0"
          step="0.01"
          required
        />
      </label>

      <label className="block">
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </label>

      <label className="block">
        Stock:
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          min="0"
          required
        />
      </label>

      <label className="block">
        Image URL:
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {loading ? 'Updating...' : 'Update Product'}
      </button>
    </form>
  );
};

export default EditProduct;*/




// src/components/admin/EditProduct.jsx
/*import React, { useEffect, useState } from "react";

const normalizeImagePath = (val) => {
  if (!val) return "";

  let v = String(val);

  // remove fakepath if it came from a file input in the past
  v = v.replace(/^C:\\fakepath\\/, "");

  // trim + replace spaces with hyphens + lowercase
  v = v.trim().replace(/\s+/g, "-").toLowerCase();

  // allow full URLs
  if (v.startsWith("http://") || v.startsWith("https://")) return v;

  // allow already-prefixed
  if (v.startsWith("/images/") || v.startsWith("/uploads/")) return v;

  // default to /images/
  return `/images/${v}`;
};

const EditProduct = ({ productData, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        name: productData.name || "",
        description: productData.description || "",
        price: productData.price ?? "",
        category: productData.category || "",
        stock: productData.stock ?? "",
        image: productData.image || "",
      });
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;

    const dataToSubmit = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      image: normalizeImagePath(formData.image),
    };

    onSubmit(dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </label>

      <label className="block">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows="3"
        />
      </label>

      <label className="block">
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          min="0"
          step="0.01"
          required
        />
      </label>

      <label className="block">
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </label>

      <label className="block">
        Stock:
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          min="0"
          required
        />
      </label>

      <label className="block">
        Image (URL or filename):
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          placeholder="/images/honey.jpg or honey.jpg or https://..."
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-60"
      >
        {loading ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
};

export default EditProduct;*/



// src/components/admin/EditProduct.jsx
/*import React, { useEffect, useState } from "react";

const EditProduct = ({ productData, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    image: "",
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        name: productData.name || "",
        description: productData.description || "",
        price: productData.price ?? "",
        category: productData.category || "",
        stock: productData.stock ?? "",
        image: productData.image || "",
      });
    }
  }, [productData]);

  const normalizeImagePath = (val) => {
    if (!val) return "";
    let v = val.replace(/^C:\\fakepath\\/, "");
    v = v.trim().replace(/\s+/g, "-").toLowerCase();
    if (!v.startsWith("/images/") && !v.startsWith("/uploads/") && !v.startsWith("http")) {
      v = `/images/${v}`;
    }
    return v;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!onSubmit) return;
    onSubmit({ ...formData, image: normalizeImagePath(formData.image) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        Name:
        <input className="border p-2 w-full rounded" name="name" value={formData.name} onChange={handleChange} required />
      </label>

      <label className="block">
        Description:
        <textarea className="border p-2 w-full rounded" name="description" value={formData.description} onChange={handleChange} rows="3" />
      </label>

      <label className="block">
        Price:
        <input className="border p-2 w-full rounded" type="number" name="price" value={formData.price} onChange={handleChange} min="0" step="0.01" required />
      </label>

      <label className="block">
        Category:
        <input className="border p-2 w-full rounded" name="category" value={formData.category} onChange={handleChange} required />
      </label>

      <label className="block">
        Stock:
        <input className="border p-2 w-full rounded" type="number" name="stock" value={formData.stock} onChange={handleChange} min="0" required />
      </label>

      <label className="block">
        Image (example: /images/honey.jpg):
        <input className="border p-2 w-full rounded" name="image" value={formData.image} onChange={handleChange} />
      </label>

      <button disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        {loading ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
};

export default EditProduct;*/



// src/components/admin/EditProduct.jsx
import React, { useState, useEffect, useMemo } from 'react';

const EditProduct = ({ productData, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
  });

  useEffect(() => {
    if (productData) {
      setFormData({
        name: productData.name ?? '',
        description: productData.description ?? '',
        price: productData.price ?? '',
        category: productData.category ?? '',
        stock: productData.stock ?? '',
        image: productData.image ?? '',
      });
    }
  }, [productData]);

  // 🔒 Normalize image paths to prevent: spaces, C:\fakepath, missing prefix
  const normalizeImagePath = (val) => {
    if (!val) return '';

    let v = String(val);

    // remove fakepath from file inputs
    v = v.replace(/^C:\\fakepath\\/, '');

    // trim + replace spaces with hyphens + lowercase
    v = v.trim().replace(/\s+/g, '-').toLowerCase();

    // if it's already a full URL, keep it
    if (v.startsWith('http://') || v.startsWith('https://')) return v;

    // allow both legacy and future static folders
    if (v.startsWith('/images/') || v.startsWith('/uploads/')) return v;

    // default legacy
    return `/images/${v}`;
  };

  const previewSrc = useMemo(() => normalizeImagePath(formData.image), [formData.image]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onSubmit !== 'function') {
      console.error('EditProduct: onSubmit prop is missing or not a function');
      return;
    }

    const dataToSubmit = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      image: normalizeImagePath(formData.image),
    };

    onSubmit(dataToSubmit);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </label>

      <label className="block">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          rows="3"
        />
      </label>

      <label className="block">
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          min="0"
          step="0.01"
          required
        />
      </label>

      <label className="block">
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          required
        />
      </label>

      <label className="block">
        Stock:
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          min="0"
          required
        />
      </label>

      <label className="block">
        Image (URL or filename):
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 w-full rounded"
          placeholder='e.g. /images/honey.jpg or honey.jpg'
        />
      </label>

      {/* preview (optional) */}
      {previewSrc && (
        <div className="border rounded p-3">
          <p className="text-sm mb-2">Preview:</p>
          <img
            src={`http://localhost:5000${previewSrc.startsWith('/') ? previewSrc : `/${previewSrc}`}`}
            alt="preview"
            className="w-full max-w-xs object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-60"
      >
        {loading ? 'Updating...' : 'Update Product'}
      </button>
    </form>
  );
};

export default EditProduct;


