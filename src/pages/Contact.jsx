import React, { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSuccess(''), 5000);
  };

  return (
    <div className="contact-page" style={{
      backgroundImage: 'linear-gradient(rgba(203, 221, 233, 0.95), rgba(203, 221, 233, 0.95)), url(/Urban-Design-Trends-in-High-Density-Living.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container contact-container">
        <h1 className="contact-title">Contact Us</h1>
        
        <div className="contact-grid">
          <div>
            <div className="card">
              <h2>Get In Touch</h2>
              <p>Have questions or feedback? We'd love to hear from you. Fill out the form and we'll respond as soon as possible.</p>
            </div>

            <div className="card">
              <h3>📍 Address</h3>
              <p>123 City Hall Road<br/>Downtown, Metro City<br/>PIN: 123456</p>
            </div>

            <div className="card">
              <h3>📞 Phone</h3>
              <p>+1 (555) 123-4567</p>
            </div>

            <div className="card">
              <h3>📧 Email</h3>
              <p>support@urbanissues.com</p>
            </div>
          </div>

          <div className="card">
            <h2>Send us a Message</h2>
            {success && <div className="alert alert-success">{success}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input type="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Subject *</label>
                <input type="text" name="subject" className="form-input" value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea name="message" className="form-textarea" value={formData.message} onChange={handleChange} required />
              </div>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
