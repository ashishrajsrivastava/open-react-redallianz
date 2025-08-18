import React from 'react';

const skills = [
  'Building AI and cloud solutions with Azure',
  'Cognitive Services integration',
  'Natural Language Processing (NLP)',
  'Speech-enabled applications',
  'Computer Vision and Custom Vision',
  'Face Recognition and OCR',
  'Knowledge Mining',
  'Responsible AI and deployment'
];

const WhatYouWillLearn = () => (
  <section className="what-you-will-learn">
    <h2>What You’ll Learn</h2>
    <ul>
      {skills.map((skill, idx) => (
        <li key={idx} className="skill-item">
          <span role="img" aria-label="diamond">🔹</span> {skill}
        </li>
      ))}
    </ul>
  </section>
);

export default WhatYouWillLearn; 