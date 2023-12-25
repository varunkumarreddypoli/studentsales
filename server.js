const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const { check, validationResult } = require('express-validator');

const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// MongoDB Connection Success/Error Handling
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});


const orderSchema = new mongoose.Schema({
  your_name: String,
  your_number: Number,
  product_name: String,
  Quantity: Number
});

// Create the Order model
const Order = mongoose.model('Order', orderSchema);

// Handle GET requests for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission with validation
app.post(
  '/submitOrder',
  [
    check('your_name').notEmpty().isString(),
    check('your_number').notEmpty().isNumeric(),
    check('product_name').notEmpty().isString(),
    check('Quantity').notEmpty().isNumeric()
  ],
  async (req, res) => {
    // Validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Use values from request body
    const { your_name, your_number, product_name, Quantity } = req.body;

    // Create a new order instance
    const newOrder = new Order({
      your_name,
      your_number,
      product_name,
      Quantity
    });

    try {
      // Save the order to the database
      await newOrder.save();
      console.log('Order details saved successfully');

      // Log the saved order for additional verification
      console.log('Saved Order:', newOrder);

      res.json({ success: true, message:  'Order received successfully'});

    } catch (error) {
      console.error('Error saving order details:', error);
      res.status(500).send('Internal Server Error');
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
