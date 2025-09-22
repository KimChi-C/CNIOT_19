const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Log thử biến môi trường
console.log("🔍 MONGODB_URL:", process.env.MONGODB_URL);

// Kết nối MongoDB Atlas
mongoose.connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('✅ Kết nối MongoDB thành công!');
  })
  .catch((err) => {
    console.error('❌ Lỗi kết nối MongoDB:', err);
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Import route
const locationRoute = require('./api/routes/location.routes');
app.use("/v1/api/location", locationRoute);

// Routes mặc định
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Lắng nghe server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
