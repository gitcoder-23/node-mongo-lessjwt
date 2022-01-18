const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
dotenv.config();

// connect with db
mongoose.connect(
  process.env.MONGODB_CONNECT,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log('MongoDb Connected')
);

// Import Routes
const productRoutes = require('./routes/productRoutes');

// to pass data during "post/ put" method through "body"
// use "body-perser" or new express
// middleware
app.use(express.json());
app.use(cors());

// route middleware
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the products api.');
});

// After adding route and database need recompile

const serverPort = process.env.PORT || 4000;

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});
