const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 8000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(`Server running on ${PORT}`);
