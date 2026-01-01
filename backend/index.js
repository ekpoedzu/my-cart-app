/*const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const stripeRoutes = require('./routes/stripe');
app.use('/api/stripe', stripeRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));*/

/*const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const stripeRoutes = require('./routes/stripe');
app.use('/api/stripe', stripeRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Port (Render requires this)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/


//My index.js
/*const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();   // ← 1️⃣ Create app FIRST

// 2️⃣ CORS goes HERE
app.use(
  cors({
    origin: [
      'http://localhost:5173',
       //'https://resplendent-otter-5eda31.netlify.app'
       'https://peppy-llama-a9dbc7.netlify.app/'
    ],
    credentials: true,
  })
);

// 3️⃣ Body parser
app.use(express.json());

// 4️⃣ Routes
const stripeRoutes = require('./routes/stripe');
app.use('/api/stripe', stripeRoutes);

// 5️⃣ Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// 6️⃣ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/


/*const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const allowedOrigins = [
  'http://localhost:5173',
  'https://resplendent-otter-5eda31.netlify.app',
  'https://peppy-llama-a9dbc7.netlify.app',
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.use(express.json());

// routes
const stripeRoutes = require('./routes/stripe');
app.use('/api/stripe', stripeRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/

//good one
/*const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

/* ===============================
   CORS CONFIGURATION
================================ */
/*const allowedOrigins = [
  'http://localhost:5173',
  'https://resplendent-otter-5eda31.netlify.app',
  'https://peppy-llama-a9dbc7.netlify.app',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, Render health checks)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

// Handle preflight requests explicitly
app.options('*', cors());

/* ===============================
   BODY PARSER
================================ */
//app.use(express.json());

/* ===============================
   ROUTES
================================ */
//const stripeRoutes = require('./routes/stripe');
//app.use('/api/stripe', stripeRoutes);

/* ===============================
   HEALTH CHECK
================================ */
//app.get('/', (req, res) => {
  //res.send('API is running...');
//});

/* ===============================
   START SERVER
================================ */
//const PORT = process.env.PORT || 5000;

//app.listen(PORT, () => {
 // console.log(`✅ Server running on port ${PORT}`);
//});*/


/*
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

/**
 * ✅ Put ONLY the real frontends that should be allowed to call your API.
 * Keep both Netlify URLs for now (since you said you might use both).
 * Make sure there is NO trailing slash.
 */
/*const allowedOrigins = new Set([
  'http://localhost:5173',
  'https://resplendent-otter-5eda31.netlify.app',
  'https://peppy-llama-a9dbc7.netlify.app',
]);

/**
 * ✅ CORS config that works in:
 * - Browser (has Origin header)
 * - Postman / curl (no Origin header)
 * - Production deployments
 */
/*const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (Postman, curl, server-to-server)
    if (!origin) return callback(null, true);

    // Allow listed origins
    if (allowedOrigins.has(origin)) return callback(null, true);

    // Reject everything else
    return callback(new Error(`CORS blocked for origin: ${origin}`));
  },
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};

app.use(cors(corsOptions));

// ✅ Preflight handling (important for browsers)
app.options('*', cors(corsOptions));

app.use(express.json());

// routes
const stripeRoutes = require('./routes/stripe');
app.use('/api/stripe', stripeRoutes);

// health check
app.get('/', (req, res) => {
  res.send('API is running...');
});

// ✅ Render will provide PORT automatically. Do NOT hardcode 5000 in Render env.
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});*/


// backend/index.js
/*const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allowed origins (frontend URLs)
const allowedOrigins = [
  "http://localhost:5173",
  "https://resplendent-otter-5eda31.netlify.app",
  "https://peppy-llama-a9dbc7.netlify.app",
];

// ✅ CORS (robust + production-safe)
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error("❌ CORS blocked origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Preflight support for all routes
app.options("*", cors());

// ✅ Body parser
app.use(express.json());

// ✅ Routes
const stripeRoutes = require("./routes/stripe");
app.use("/api/stripe", stripeRoutes);

// ✅ Health check (Render / general)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Port: Render provides PORT automatically.
// Keep your fallback for local dev.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log("✅ Allowed origins:", allowedOrigins);
});*/



// backend/index.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allowed origins (keep both for now, you can remove the old one later)
const allowedOrigins = [
  "http://localhost:5173",
  "https://resplendent-otter-5eda31.netlify.app",
  "https://peppy-llama-a9dbc7.netlify.app",
];

// ✅ CORS config with origin function (most reliable)
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.log("❌ CORS blocked origin:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Preflight support
app.options("*", cors());

app.use(express.json());

// routes
const stripeRoutes = require("./routes/stripe");
app.use("/api/stripe", stripeRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// IMPORTANT for Render: always listen on process.env.PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});








