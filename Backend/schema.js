const mongoose = require("mongoose");

// Item schema
const itemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  brand: String,
  price: Number,
  quantity: Number
});

// Order schema
const orderSchema = new mongoose.Schema({
  totalAmount: { type: Number, required: true },
  items: [itemSchema],
  createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

// Contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
});

const Contact = mongoose.model("Contact", contactSchema);


//Login schema

const userSchema = new mongoose.Schema({
  phoneNumber: {
    type: String,
    required: true,
    unique: false, // जर allow करायचं असेल same number multiple वेळा save होऊ द्यायला
  },
});

const User = mongoose.model('User', userSchema);

// Export both Order and Contact models
module.exports = { Order, Contact, User };


