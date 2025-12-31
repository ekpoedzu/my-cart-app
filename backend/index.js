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


//My server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();   // ← 1️⃣ Create app FIRST

// 2️⃣ CORS goes HERE
app.use(
  cors({
    origin: [
      'http://localhost:5173',
       'https://resplendent-otter-5eda31.netlify.app'
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
});


