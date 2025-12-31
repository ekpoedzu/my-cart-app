
//Current working with images displayed
//please, insert the script above
// ✅ AddProduct.jsx (Frontend Admin Panel)
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
//import EditProduct from '@/components/admin/EditProduct';


const AddProduct = () => {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
    brand: "",        // 🆕 added
    rating: 0,        // 🆕 added
    numReviews: 0,    // 🆕 added
    isFeatured: false,

  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.isAdmin) {
      setError('You must be logged in as an admin to add products.');
      return;
    }

    const { name, description, price, category, stock, image } = formData;
    if (!name || !description || !price || !category || !stock || !image) {
      setError('All fields are required.');
      return;
    }

    const formattedImage =
      image.startsWith('http') || image.startsWith('/')
        ? image
        : `/images/${image}`;

    try {
      const res = await axios.post(
        '/api/products',
        {
          name,
          description,
          price: Number(price),
          category,
          //stock: Number(stock),
          stock: Number(stock),
          image: formattedImage,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data) {
        navigate('/admin/products');
      }
    } catch (err) {
      console.error('❌ Failed to add product:', err);
      setError('Error adding product. Make sure you are logged in as admin.');
    }
  };

  return (
    
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'description', 'price', 'category', 'stock', 'image'].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 mb-1 capitalize">{field}</label>
            <input
              type={field === 'price' || field === 'stock' ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}
        {formData.image && (
          <img
            src={formData.image.startsWith('http') || formData.image.startsWith('/')
              ? formData.image
              : `/images/${formData.image}`}
            alt="Preview"
            className="w-40 h-40 object-cover rounded border border-gray-200"
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};



export default AddProduct;*/



//working file
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AddProduct = () => {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
    brand: '',
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user?.isAdmin) {
      setError('You must be logged in as an admin to add products.');
      return;
    }

    const { name, description, price, category, stock, image, brand, rating, numReviews, isFeatured } = formData;

    if (!name || !description || !price || !category || !stock || !image) {
      setError('All required fields must be filled.');
      return;
    }

    const formattedImage =
      image.startsWith('http') || image.startsWith('/')
        ? image
        : `/images/${image}`;

    try {
      const res = await axios.post(
        '/api/products',
        {
          name,
          description,
          price: Number(price),
          category,
          stock: Number(stock),
          image: formattedImage,
          brand,
          rating: Number(rating),
          numReviews: Number(numReviews),
          isFeatured,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data) {
        navigate('/admin/products');
      }
    } catch (err) {
      console.error('❌ Failed to add product:', err);
      setError('Error adding product. Make sure you are logged in as admin.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'description', 'price', 'category', 'stock', 'brand', 'rating', 'numReviews', 'image'].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 mb-1 capitalize">{field}</label>
            <input
              type={
                ['price', 'stock', 'rating', 'numReviews'].includes(field)
                  ? 'number'
                  : 'text'
              }
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        ))}

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
          <label className="text-gray-700">Feature this product</label>
        </div>

        {formData.image && (
          <img
            src={
              formData.image.startsWith('http') || formData.image.startsWith('/')
                ? formData.image
                : `/images/${formData.image}`
            }
            alt="Preview"
            className="w-40 h-40 object-cover rounded border border-gray-200"
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;*/


//updated file
/*import React, { useState, useMemo } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AddProduct = () => {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  // Use the same base you use in EditProductPage
  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
    brand: '',
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  });

  const [error, setError] = useState('');

  // ✅ Normalize image path so it never breaks
  const normalizeImage = (val) => {
    if (!val) return '';

    let v = String(val);

    // remove fakepath if user ever pastes it
    v = v.replace(/^C:\\fakepath\\/, '');

    // trim
    v = v.trim();

    // If it's a full URL, keep it
    if (/^https?:\/\//i.test(v)) return v;

    // If it's already an absolute path, normalize spacing/case in filename only
    // e.g. "/images/Assorted Design.jpg" -> "/images/assorted-design.jpg"
    const hasLeadingSlash = v.startsWith('/');

    // split folder and file
    const parts = v.split('/');
    const file = parts.pop() || '';
    const folder = parts.join('/');

    const safeFile = file
      .trim()
      .replace(/\s+/g, '-')   // spaces -> hyphens
      .toLowerCase();

    v = (folder ? `${folder}/${safeFile}` : safeFile);

    // Ensure it starts with /images/ if user only typed a filename
    if (!hasLeadingSlash) {
      v = `/images/${safeFile}`;
    } else {
      // If it starts with "/" but not /images or /uploads, default to /images
      if (!v.startsWith('/images/') && !v.startsWith('/uploads/')) {
        v = `/images/${safeFile}`;
      }
    }

    return v;
  };

  const formattedImage = useMemo(
    () => normalizeImage(formData.image),
    [formData.image]
  );

  // ✅ preview URL: if image is a URL use it, if it's /images/... point to backend
  const previewSrc = useMemo(() => {
    if (!formattedImage) return '';
    if (/^https?:\/\//i.test(formattedImage)) return formattedImage;

    // formattedImage is like "/images/x.jpg" or "/uploads/x.jpg"
    // API_BASE includes "/api" -> strip it for static assets
    const backendOrigin = API_BASE.replace(/\/api\/?$/, '');
    return `${backendOrigin}${formattedImage}`;
  }, [formattedImage, API_BASE]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!user?.isAdmin) {
      setError('You must be logged in as an admin to add products.');
      return;
    }

    const { name, description, price, category, stock, brand, rating, numReviews, isFeatured } = formData;

    if (!name || !description || !price || !category || !stock || !formattedImage) {
      setError('All required fields must be filled (including image).');
      return;
    }

    try {
      await axios.post(
        `${API_BASE}/products`,
        {
          name,
          description,
          price: Number(price),
          category,
          stock: Number(stock),
          image: formattedImage, // ✅ always saved normalized
          brand,
          rating: Number(rating),
          numReviews: Number(numReviews),
          isFeatured,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      navigate('/admin/products');
    } catch (err) {
      console.error('❌ Failed to add product:', err);
      setError(
        err?.response?.data?.message ||
          'Error adding product. Make sure you are logged in as admin.'
      );
    }
  };

  const fields = ['name', 'description', 'price', 'category', 'stock', 'brand', 'rating', 'numReviews', 'image'];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <div key={field}>
            <label className="block text-gray-700 mb-1 capitalize">
              {field}{['name','description','price','category','stock','image'].includes(field) ? ' *' : ''}
            </label>

            <input
              type={['price', 'stock', 'rating', 'numReviews'].includes(field) ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />

            {field === 'image' && formData.image && (
              <p className="text-xs text-gray-500 mt-1">
                Saved as: <span className="font-mono">{formattedImage}</span>
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="isFeatured"
            checked={formData.isFeatured}
            onChange={handleChange}
          />
          <label className="text-gray-700">Feature this product</label>
        </div>

        {previewSrc && (
          <img
            src={previewSrc}
            alt="Preview"
            className="w-40 h-40 object-cover rounded border border-gray-200"
            onError={(e) => {
              // optional fallback preview image
              e.currentTarget.style.display = 'none';
            }}
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;*/


//second update

// src/pages/admin/AddProduct.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const normalizeImagePath = (val) => {
  if (!val) return '';

  let v = String(val).trim();

  // remove browser fake path
  v = v.replace(/^C:\\fakepath\\/, '');

  // if it's a full URL, keep it
  if (/^https?:\/\//i.test(v)) return v;

  // If user pasted "/images/..." or "/uploads/..." keep it but normalize spaces/case
  if (v.startsWith('/')) {
    return v.replace(/\s+/g, '-').toLowerCase();
  }

  // Otherwise treat it as a filename
  v = v.replace(/\s+/g, '-').toLowerCase();
  return `/images/${v}`;
};

const AddProduct = () => {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
  const SERVER_BASE = API_BASE.replace(/\/api\/?$/, ''); // "http://localhost:5000"

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    stock: '',
    image: '',
    brand: '',
    rating: 0,
    numReviews: 0,
    isFeatured: false,
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!user?.isAdmin) {
      setError('You must be logged in as an admin to add products.');
      return;
    }

    const { name, description, price, category, stock, image, brand, rating, numReviews, isFeatured } = formData;

    if (!name || !description || !price || !category || !stock || !image) {
      setError('All required fields must be filled.');
      return;
    }

    const imageFinal = normalizeImagePath(image);

    try {
      await axios.post(
        `${API_BASE}/products`,
        {
          name,
          description,
          price: Number(price),
          category,
          stock: Number(stock),
          image: imageFinal,
          brand,
          rating: Number(rating),
          numReviews: Number(numReviews),
          isFeatured,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      navigate('/admin/products');
    } catch (err) {
      console.error('❌ Failed to add product:', err);
      setError('Error adding product. Make sure you are logged in as admin.');
    }
  };

  const previewSrc = (() => {
    const normalized = normalizeImagePath(formData.image);
    if (!normalized) return '';
    if (/^https?:\/\//i.test(normalized)) return normalized;
    // relative path -> add server base
    return `${SERVER_BASE}${normalized}`;
  })();

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Product</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'description', 'price', 'category', 'stock', 'brand', 'rating', 'numReviews', 'image'].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 mb-1 capitalize">{field}</label>
            <input
              type={['price', 'stock', 'rating', 'numReviews'].includes(field) ? 'number' : 'text'}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {field === 'image' && (
              <p className="text-xs text-gray-500 mt-1">
                Use a full URL, or a filename like <code>honey.jpg</code>, or a path like <code>/images/honey.jpg</code>.
                (Spaces will be converted to hyphens.)
              </p>
            )}
          </div>
        ))}

        <div className="flex items-center space-x-2">
          <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />
          <label className="text-gray-700">Feature this product</label>
        </div>

        {previewSrc && (
          <img
            src={previewSrc}
            alt="Preview"
            className="w-40 h-40 object-cover rounded border border-gray-200"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        )}

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;







/*import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import EditProduct from '../../components/admin/EditProduct'; // ✅ Import reusable form

const AddProduct = () => {
  const navigate = useNavigate();
  const { token, user } = useAuth();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddProduct = async (formData) => {
    if (!user?.isAdmin) {
      setError('You must be an admin to add products.');
      return;
    }

    const { name, description, price, category, stock, image } = formData;

    if (!name || !description || !price || !category || !stock || !image) {
      setError('All fields are required.');
      return;
    }

    const formattedImage =
      image.startsWith('http') || image.startsWith('/')
        ? image
        : `/images/${image}`;

    try {
      setLoading(true);
      const res = await axios.post(
        '/api/products',
        {
          name,
          description,
          price: Number(price),
          category,
          stock: Number(stock),
          image: formattedImage,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data) {
        navigate('/admin/products');
      }
    } catch (err) {
      console.error('❌ Failed to add product:', err);
      setError('Failed to add product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <EditProduct productData={null} onSubmit={handleAddProduct} loading={loading} />
    </div>
  );
};

export default AddProduct;*/

