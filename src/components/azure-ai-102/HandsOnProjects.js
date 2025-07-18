import React from 'react';

const projects = [
  'Azure SDK & REST APIs',
  'Prompt Engineering',
  'Chatbots & Conversational AI',
  'Image Classification',
  'Knowledge Mining',
  'Real-world deployment labs'
];

const HandsOnProjects = () => (
  <section className="hands-on-projects">
    <h2>Hands-on Projects & Labs</h2>
    <ul>
      {projects.map((proj, idx) => (
        <li key={idx}>🛠️ {proj}</li>
      ))}
    </ul>
    <p>Gain practical experience with real-world tools and scenarios.</p>
  </section>
);

export default HandsOnProjects; 