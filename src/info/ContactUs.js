import React from "react";

const ContactUs = () => (
  <div style={{ maxWidth: 600, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
    <h2>Contact Us</h2>
    <p>We'd love to hear from you! Please reach out with any questions, feedback, or partnership inquiries.</p>
    <ul style={{ listStyle: "none", padding: 0 }}>
      <li><strong>Email:</strong> <a href="mailto:support@moneymetric.com">support@moneymetric.com</a></li>
      <li><strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a></li>
    </ul>
    <p>Or use the form below:</p>
    <form>
      <div style={{ marginBottom: 12 }}>
        <label>Name<br /><input type="text" name="name" style={{ width: "100%", padding: 8 }} /></label>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Email<br /><input type="email" name="email" style={{ width: "100%", padding: 8 }} /></label>
      </div>
      <div style={{ marginBottom: 12 }}>
        <label>Message<br /><textarea name="message" rows={4} style={{ width: "100%", padding: 8 }} /></label>
      </div>
      <button type="submit" style={{ padding: "8px 24px", background: "#282c34", color: "#fff", border: "none", borderRadius: 4 }}>Send</button>
    </form>
  </div>
);

export default ContactUs;
