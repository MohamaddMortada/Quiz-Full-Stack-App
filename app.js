const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const PORT = 8000;
MONGO_URI='mongodb+srv://mohamaddmortada:VmBqIM3PIbHqD97n@cluster0.w5usb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

app.use('/api', router);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(`Server running on ${PORT}`);
