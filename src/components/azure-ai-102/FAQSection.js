import React from 'react';

const faqs = [
  { q: 'Do I need prior Azure experience?', a: 'Basic programming and cloud concepts help, but all key topics are covered.' },
  { q: 'How much time will the course take?', a: 'Most students complete in 8-12 weeks at 4-6 hours/week.' },
  { q: 'Is the course self-paced?', a: 'Yes, you can learn at your own pace with full access for 6 months.' },
  { q: 'Will I get a certificate?', a: 'Yes, you’ll receive a certificate of completion and be prepared for the official AI-102 exam.' }
];

const FAQSection = () => (
  <section className="faq-section">
    <h2>Frequently Asked Questions</h2>
    <ul>
      {faqs.map((faq, idx) => (
        <li key={idx} className="faq-item">
          <strong>{faq.q}</strong>
          <p>{faq.a}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default FAQSection; 