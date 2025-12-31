import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductFormPage = () => {
  const { id } = useParams(); // id can be "new" or a product ID
  const navigate = useNavigate();
  const isEdit = id !== 'new';

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: '',
    stock: '',
  });

  useEffect(() => {
    if (isEdit) {
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/products/${id}`)
        .then((res) => {
          const p = res.data;
          setForm({
            name: p.name,
            price: p.price,
            description: p.description,
            category: p.category,
            image: p.image,
            stock: p.stock,
          });
        })
        .catch((err) => {
          console.error('Error loading product:', err);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isEdit
      ? `${import.meta.env.VITE_API_BASE_URL}/products/${id}`
      : `${import.meta.env.VITE_API_BASE_URL}/products`;

    const method = isEdit ? 'put' : 'post';

    try {
      const { data } = await axios[method](url, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      navigate('/admin/products');
    } catch (error) {
      console.error('Submit failed:', error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md p-6 rounded">
      <h2 className="text-2xl font-semibold mb-4">
        {isEdit ? 'Edit Product' : 'Create Product'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'price', 'description', 'category', 'image', 'countInStock'].map((field) => (
          <div key={field}>
            <label className="block capitalize mb-1">{field}</label>
            <input
              type={field === 'price' || field === 'countInStock' ? 'number' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
        ))}

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          {isEdit ? 'Update Product' : 'Create Product'}
        </button>
      </form>
    </div>
  );
};

export default ProductFormPage;
