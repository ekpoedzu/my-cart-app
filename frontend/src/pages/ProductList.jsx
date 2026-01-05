// pages/ProductList.jsx
/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "../components/SearchBar";

const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        const data = Array.isArray(res.data) ? res.data : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error("❌ Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const name = (product.name || "").toLowerCase();
    const matchSearch = name.includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  if (loading) return <p style={{ padding: "1rem" }}>Loading products...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Products</h1>

      // Filters 
      <div style={styles.filters}>
        <div style={{ width: "100%", maxWidth: 520 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div style={styles.categoryWrap}>
          <label style={styles.label}>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.select}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      // Product Grid 
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} style={styles.card}>
              <img
                src={product.image || "/images/placeholder.jpg"}
                alt={product.name}
                style={styles.image}
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />

              <h3 style={styles.title}>{product.name}</h3>
              <p style={styles.price}>${Number(product.price).toFixed(2)}</p>

              {product.stock === 0 ? (
                <p style={styles.outOfStock}>Out of Stock</p>
              ) : (
                <p style={styles.inStock}>In Stock: {product.stock}</p>
              )}

              <div style={styles.buttonRow}>
                <button
                  style={{
                    ...styles.smallButton,
                    background: product.stock === 0 ? "#ccc" : "#16a34a",
                    cursor: product.stock === 0 ? "not-allowed" : "pointer",
                  }}
                  disabled={product.stock === 0}
                  onClick={() => navigate(`/products/${product._id}`)}
                >
                  View
                </button>

                <button
                  style={{
                    ...styles.smallButton,
                    background: product.stock === 0 ? "#ccc" : "#0070f3",
                    cursor: product.stock === 0 ? "not-allowed" : "pointer",
                  }}
                  disabled={product.stock === 0}
                  onClick={() => handleAddToCart(product)}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#666" }}>No matching products.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  heading: {
    marginBottom: "1.5rem",
    fontSize: "2rem",
  },
  filters: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  categoryWrap: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  label: {
    fontWeight: 600,
  },
  select: {
    border: "1px solid #ddd",
    padding: "0.4rem 0.6rem",
    borderRadius: "6px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    marginTop: "0.75rem",
    marginBottom: "0.25rem",
    fontSize: "1.05rem",
    fontWeight: 600,
  },
  price: {
    margin: 0,
    color: "#111",
  },
  inStock: {
    marginTop: "0.25rem",
    color: "#16a34a",
    fontSize: "0.85rem",
  },
  outOfStock: {
    marginTop: "0.25rem",
    color: "#ef4444",
    fontSize: "0.85rem",
  },
  buttonRow: {
    display: "flex",
    gap: "0.5rem",
    marginTop: "1rem",
  },
  smallButton: {
    flex: 1,
    padding: "0.5rem 0.75rem",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
};

export default ProductList;*/



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import SearchBar from "../components/SearchBar";
//import { getImageSrc } from "../utils/image";


const ProductList = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("/api/products");
        const data = Array.isArray(res.data) ? res.data : res.data.products || [];
        setProducts(data);
      } catch (error) {
        console.error("❌ Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category).filter(Boolean))];

  const filteredProducts = products.filter((product) => {
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchSearch = (product.name || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  const handleAddToCart = (product) => {
    if (product.stock === 0) return;
    addToCart(product);
  };

  if (loading) return <p style={{ padding: "1rem" }}>Loading products...</p>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Products</h1>

      {/* Filters */}
      <div style={styles.filters}>
        <div style={{ width: "100%", maxWidth: 520 }}>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        <div style={styles.categoryWrap}>
          <label style={styles.label}>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={styles.select}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid: Home style */}
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product._id} style={styles.card}>
              <img
                src={product.image || "/images/placeholder.jpg"}
                alt={product.name}
                style={styles.image}
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />

              {/*<img
                src={getImageSrc(product.image)}
                alt={product.name}
                 className="w-full h-40 object-cover rounded mb-3"
                onError={(e) => {
                e.currentTarget.onerror = null; // ✅ stop loop
                e.currentTarget.src = "/images/placeholder.jpg";
              }}
            />*/}


              <h3 style={styles.title}>{product.name}</h3>
              <p style={styles.price}>${Number(product.price).toFixed(2)}</p>

              {product.stock === 0 ? (
                <p style={styles.outOfStock}>Out of Stock</p>
              ) : (
                <p style={styles.inStock}>In Stock: {product.stock}</p>
              )}

              <div style={styles.buttonRow}>
                <button
                  style={{
                    ...styles.smallButton,
                    background: product.stock === 0 ? "#ccc" : "#16a34a",
                    cursor: product.stock === 0 ? "not-allowed" : "pointer",
                  }}
                  disabled={product.stock === 0}
                  onClick={() => navigate(`/products/${product._id}`)}
                >
                  View
                </button>

                <button
                  style={{
                    ...styles.smallButton,
                    background: product.stock === 0 ? "#ccc" : "#0070f3",
                    cursor: product.stock === 0 ? "not-allowed" : "pointer",
                  }}
                  disabled={product.stock === 0}
                  onClick={() => handleAddToCart(product)}
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "#666" }}>No matching products.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "2rem", textAlign: "center" },
  heading: { marginBottom: "1.5rem", fontSize: "2rem" },
  filters: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
  },
  categoryWrap: { display: "flex", alignItems: "center", gap: "0.5rem" },
  label: { fontWeight: 600 },
  select: { border: "1px solid #ddd", padding: "0.4rem 0.6rem", borderRadius: "6px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: { marginTop: "0.75rem", marginBottom: "0.25rem", fontSize: "1.05rem", fontWeight: 600 },
  price: { margin: 0 },
  inStock: { marginTop: "0.25rem", color: "#16a34a", fontSize: "0.85rem" },
  outOfStock: { marginTop: "0.25rem", color: "#ef4444", fontSize: "0.85rem" },
  buttonRow: { display: "flex", gap: "0.5rem", marginTop: "1rem" },
  smallButton: {
    flex: 1,
    padding: "0.5rem 0.75rem",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "0.9rem",
  },
};

export default ProductList;








