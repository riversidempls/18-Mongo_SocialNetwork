const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const mongouri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialdb'

mongoose.connect(
  mongouri.at,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
