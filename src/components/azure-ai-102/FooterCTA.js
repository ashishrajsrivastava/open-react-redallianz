import React from 'react';

const FooterCTA = () => (
  <footer className="footer-cta">
    <div className="final-cta">
      <h2>Ready to Become a Certified Azure AI Engineer?</h2>
      <button className="cta-btn">Enroll Now</button>
    </div>
    <div className="trust-badges" style={{marginTop: '1rem'}}>
      {/* Placeholder for trust badges and secure payment icons */}
      <span style={{background: '#e0e7ef', padding: '0.5rem 1rem', borderRadius: '6px'}}>Microsoft Certified</span>
      <span style={{background: '#e0e7ef', padding: '0.5rem 1rem', borderRadius: '6px', marginLeft: '1rem'}}>Secure Payment</span>
    </div>
  </footer>
);

export default FooterCTA; 