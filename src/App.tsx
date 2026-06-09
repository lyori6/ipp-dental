import React, { useState } from 'react';
import { 
  Activity, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck, 
  Smile, 
  HeartHandshake 
} from 'lucide-react';
import './App.css';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <header className="navbar">
        <div className="navbar-container">
          <a href="#" className="logo-wrapper">
            <Activity className="logo-icon" />
            <span>IPP Dental</span>
          </a>
          <nav className="nav-links">
            <a href="#features" className="nav-link">Our Advantage</a>
            <a href="#scheduler" className="nav-link">Book Now</a>
            <a href="#contact" className="nav-link">Contact Us</a>
            <a href="#scheduler" className="btn-primary" style={{ padding: '8px 18px', fontSize: '14px' }}>
              Schedule Free Consult
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content animate-fade-in">
            <div className="hero-badge">
              <Sparkles size={16} />
              <span>Modern Dentistry Elevated</span>
            </div>
            <h1 className="hero-title">
              Your Healthiest Smile, <br />
              <span style={{ color: 'var(--color-brand)' }}>Reimagined.</span>
            </h1>
            <p className="hero-subtitle">
              Experience advanced clinical expertise combined with absolute luxury. IPP Dental offers stress-free, modern oral care using cutting-edge technology and tailored treatments.
            </p>
            <div className="hero-actions">
              <a href="#scheduler" className="btn-primary">
                Book Virtual Consultation <ChevronRight size={18} />
              </a>
              <a href="#features" className="btn-secondary">
                Explore Technology
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-backdrop"></div>
            <div className="visual-image-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'var(--color-brand-glow)', padding: '10px', borderRadius: '50%' }}>
                    <Smile size={28} className="logo-icon" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>Elite Patient Care</h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Top 1% ranked clinicians</p>
                  </div>
                </div>
                
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                    <CheckCircle size={16} style={{ color: 'var(--color-brand)', marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>No messy dental putty (100% digital scans)</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                    <CheckCircle size={16} style={{ color: 'var(--color-brand)', marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>Same-day crowns & cosmetic restoration</span>
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <CheckCircle size={16} style={{ color: 'var(--color-brand)', marginTop: '2px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 500 }}>Virtually painless quiet-drill setups</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600 }}>Next Available Consult:</span>
                  <span style={{ fontSize: '13px', color: 'var(--color-brand)', fontWeight: 700 }}>Today (Within 2 Hours)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props / Features */}
      <section id="features" className="features-section">
        <div className="section-header">
          <div className="hero-badge" style={{ margin: '0 auto' }}>
            <ShieldCheck size={16} />
            <span>Why IPP Dental</span>
          </div>
          <h2 className="section-title">A Higher Standard of Dental Wellness</h2>
          <p style={{ color: 'var(--text-muted)' }}>We have replaced outdated techniques with modern innovations to prioritize your comfort and time.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Clock size={22} />
            </div>
            <h3>Same-Day Dentistry</h3>
            <p>We respect your time. With in-office 3D milling technology, we design, create, and place premium custom crowns in a single visit.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <Smile size={22} />
            </div>
            <h3>Anxiety-Free Philosophy</h3>
            <p>Dental visits should never be stressful. Experience ergonomic heated chairs, noise-canceling headphones, and gentle sedation options.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <HeartHandshake size={22} />
            </div>
            <h3>Transparent Care</h3>
            <p>Complete price transparency and flexible monthly payment plans. We coordinate directly with your insurance to maximize benefits.</p>
          </div>
        </div>
      </section>

      {/* Calendly Embed Section */}
      <section id="scheduler" className="scheduler-section">
        <div className="section-header">
          <div className="hero-badge" style={{ margin: '0 auto' }}>
            <Calendar size={16} />
            <span>Direct Scheduling</span>
          </div>
          <h2 className="section-title">Book Your Appointment Instantly</h2>
          <p style={{ color: 'var(--text-muted)' }}>Select a date and time that works best for you. No phone calls required.</p>
        </div>

        <div className="scheduler-container">
          {/* Calendly Inline Widget */}
          <iframe 
            src="https://calendly.com/lyori6/consultation?hide_landing_page_details=1&hide_gdpr_banner=1"
            title="Book an appointment"
            width="100%"
            height="650px"
            frameBorder="0"
            style={{ border: 'none', background: 'transparent' }}
          ></iframe>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="contact-section">
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <div className="hero-badge" style={{ marginBottom: '16px' }}>
                <Mail size={16} />
                <span>Get in Touch</span>
              </div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '16px' }}>Have questions? Let us help you.</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                Our team is ready to answer any questions about treatments, custom insurance coverage, or special requests.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="contact-method">
                <div className="contact-method-icon">
                  <Phone size={18} />
                </div>
                <div className="contact-method-text">
                  <h4>Call or Text</h4>
                  <p>+1 (555) 321-4567</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-method-text">
                  <h4>Email Support</h4>
                  <p>care@ippdental.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-method-icon">
                  <MapPin size={18} />
                </div>
                <div className="contact-method-text">
                  <h4>Visit Our Studio</h4>
                  <p>100 Platinum Way, Suite 400, Beverly Hills, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="success-card">
                <div className="success-icon-wrapper">
                  <CheckCircle size={36} />
                </div>
                <h3>Message Received!</h3>
                <p style={{ color: 'var(--text-muted)' }}>
                  Thank you for reaching out, {formData.name || 'there'}. A client relationship specialist will contact you shortly.
                </p>
                <button className="btn-secondary" onClick={() => setFormSubmitted(false)}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Doe" 
                    required 
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@example.com" 
                    required 
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 000-0000" 
                    className="form-input" 
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">How can we help you?</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dental goals or questions..." 
                    required 
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="footer-logo">
                <Activity className="logo-icon" />
                <span>IPP Dental</span>
              </a>
              <p className="footer-description">
                Setting the benchmark for premium clinical excellence and luxurious dental experiences.
              </p>
            </div>
            
            <div className="footer-nav">
              <div className="footer-nav-col">
                <h5>Practice</h5>
                <ul>
                  <li><a href="#features">Our Advantage</a></li>
                  <li><a href="#scheduler">Book Visit</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              
              <div className="footer-nav-col">
                <h5>Legal</h5>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Use</a></li>
                  <li><a href="#">Patient Rights</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">
              © {new Date().getFullYear()} IPP Dental. All rights reserved.
            </span>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
