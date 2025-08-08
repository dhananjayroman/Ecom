const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Order, Contact, User } = require("./schema"); // Correctly import both models
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  dbName: "ecommerceDB"
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB Error:", err));


  // mongoose.connect("mongodb://127.0.0.1:27017/ecommerceDB")
  // .then(() => console.log("✅ MongoDB Connected"))
  // .catch((err) => console.error("❌ MongoDB Error:", err));


  app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods:['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders:['Content-Type','Authorization']
}));


// Order route to add order data
app.post("/order", async (req, res) => {
  try {
    const { totalAmount, items } = req.body;
    const order = new Order({ totalAmount, items });
    await order.save();
    console.log(order)
    res.status(201).json({ message: "✅ Order saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "❌ Failed to save order" });
  }
});

// Contact route to save contact form data
app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: 'Contact info saved' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to save contact info' });
  }
});

//Login savee
app.post('/login', async (req, res) => {
  try {
    const { phoneNumber } = req.body;

    // Database मध्ये phone number save करा
    const newUser = new User({ phoneNumber });
    await newUser.save();

    res.status(201).json({ message: '✅ User saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: '❌ Server error while saving user' });
  }
});


const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));



