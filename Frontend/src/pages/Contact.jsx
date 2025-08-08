import React, { useState } from "react";
import axios from "axios"; // ✅ Added this line
import '../css/Contact.css'

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const contactData = {
      name,
      email,
      message,
    };

  try {
  await axios.post(`${import.meta.env.VITE_BACKEND_URL}/contact`, contactData);
  alert("✅ Message sent successfully!");
  setName("");
  setEmail("");
  setMessage("");
  console.log(contactData);
} catch (err) {
  console.error(err);
  alert("❌ Error sending message");
}
  }

  return (
    <section className="contact-section">
      <h1>Contact <span className="highlight">Us</span> 📞</h1>
      <p>We'd love to hear from you! Reach out with any questions, feedback, or support requests.</p>

      <div className="contact-wrapper">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Your full name" 
            required 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />

          <label>Email</label>
          <input 
            type="email" 
            placeholder="Your email address" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />

          <label>Message</label>
          <textarea 
            rows="5" 
            placeholder="Write your message here..." 
            required 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
          ></textarea>

          <button type="submit">Send Message ✉️</button>
        </form>

        <div className="contact-info">
          <h2>📍 Our Location</h2>
          <p>Katraj, Pune, Maharashtra 411001</p>

          <h2>📧 Email Us</h2>
          <p>romandhananjay01@gmail.com</p>

          <h2>📞 Call Us</h2>
          <p>+8600757587</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;


