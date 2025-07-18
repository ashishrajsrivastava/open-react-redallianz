import React from 'react';

const testimonials = [
  { name: 'Alex P.', text: 'This course helped me pass the AI-102 exam and land my dream job!' },
  { name: 'Priya S.', text: 'The hands-on labs and real-world projects made all the difference.' }
];

const SocialProof = () => (
  <section className="social-proof">
    <h2>What Our Students Say</h2>
    <div className="testimonials">
      {testimonials.map((t, idx) => (
        <blockquote key={idx}>
          <p>“{t.text}”</p>
          <footer>- {t.name}</footer>
        </blockquote>
      ))}
    </div>
    <div className="stats-logos">
      <div className="stats">
        <span>95% Pass Rate</span> | <span>2,000+ Students</span> | <span>Top Hiring Partners</span>
      </div>
      <div className="logos" style={{marginTop: '1rem'}}>
        {/* Placeholder for logos */}
        <span style={{background: '#e0e7ef', padding: '0.5rem 1rem', borderRadius: '6px'}}>Microsoft</span>
        <span style={{background: '#e0e7ef', padding: '0.5rem 1rem', borderRadius: '6px', marginLeft: '1rem'}}>Azure</span>
      </div>
    </div>
  </section>
);

export default SocialProof; 