/*import React from "react";
import { useNavigate } from "react-router-dom";

const sampleProducts = [
  {
    _id: "prod-4",
    name: "Organic Honey Jarey",
    price: 15,
    description: "Raw unfiltered organic honey.",
    category: "Food",
    stock: 4,
    image: "/images/honey.jpg",
  },
  {
    _id: "prod-5",
    name: "Organic Gari",
    price: 15,
    description: "Delicious crispy gari.",
    category: "Food",
    stock: 10,
    image: "/images/gari.jpg",
  },
  {
    _id: "prod-6",
    name: "Unique Scarf",
    price: 15,
    description: "Elegant unique scarf.",
    category: "Clothing",
    stock: 10,
    image: "/images/scarf.jpg",
  },
  {
    _id: "prod-7",
    name: "Breaded Bracelet",
    price: 15,
    description: "GosticHandmade unique collection.",
    category: "Handmade",
    stock: 10,
    image: "/images/assorted-design.jpg",
  },

  {
    _id: "prod-8",
    name: "Lawoe Peanut",
    price: 15,
    description: "Un savoir faire.",
    category: "Food",
    stock: 10,
    image: "/images/lawoe-peanut.jpg",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Zirayco Store</h1>

      <p style={styles.subheading}>
         Click below to browse the full store.
      </p>

      <div style={styles.grid}>
        {sampleProducts.map((product) => (
          <div key={product._id} style={styles.card}>
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3 style={styles.title}>{product.name}</h3>
            <p style={styles.price}>${product.price.toFixed(2)}</p>

            <button style={styles.button} onClick={() => navigate("/products")}>
              Browse Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "2rem", textAlign: "center" },
  heading: { marginBottom: "0.5rem", fontSize: "2rem" },
  subheading: { marginBottom: "2rem", color: "#555" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: { margin: "0.75rem 0 0.25rem" },
  price: { margin: 0 },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Home;*/




import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { getImageSrc } from "../utils/image";



const Home = () => {
  const navigate = useNavigate();
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true);

        const res = await axios.get("/api/products");
        const data = Array.isArray(res.data) ? res.data : res.data.products || [];

        setFeatured(data.slice(0, 4));
      } catch (err) {
        console.error("❌ Failed to fetch featured products:", err);
        setFeatured([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Zirayco Store</h1>

      {loading ? (
        <p>Loading featured products...</p>
      ) : (
        <div style={styles.grid}>
          {featured.map((product) => (
            <div key={product._id} style={styles.card}>
              <img
                src={product.image || "/images/placeholder.jpg"}
                alt={product.name}
                style={styles.image}
                onError={(e) => {
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />

             {/* <img
                    src={getImageSrc(product.image)}
                   alt={product.name}
                   style={styles.image}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                 e.currentTarget.src = "/images/placeholder.jpg";
              }}
          />*/}

              <h3 style={styles.title}>{product.name}</h3>
              <p style={styles.price}>${Number(product.price).toFixed(2)}</p>

              <button
                style={styles.button}
                onClick={() => navigate(`/products/${product._id}`)}
              >
                View Product
              </button>
            </div>
          ))}
        </div>
      )}

      {!loading && featured.length === 0 && (
        <p style={{ color: "#666" }}>No featured products found.</p>
      )}

      <div style={{ marginTop: "2rem" }}>
        <button style={styles.secondaryButton} onClick={() => navigate("/products")}>
          View All Products
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: { padding: "2rem", textAlign: "center" },
  heading: { marginBottom: "2rem", fontSize: "2rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: { marginTop: "0.75rem", marginBottom: "0.25rem" },
  price: { margin: 0 },
  button: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    background: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  secondaryButton: {
    padding: "0.6rem 1.2rem",
    background: "#111",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Home;





