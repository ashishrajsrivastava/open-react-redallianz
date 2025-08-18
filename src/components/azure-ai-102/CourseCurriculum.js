import React from 'react';

const modules = [
  { title: 'Introduction to AI', desc: 'Overview of AI concepts and Azure AI services.' },
  { title: 'Cognitive Services', desc: 'Integrate vision, speech, language, and decision APIs.' },
  { title: 'Speech-Enabled Apps', desc: 'Build applications with speech recognition and synthesis.' },
  { title: 'Language Understanding', desc: 'Implement NLP and conversational AI.' },
  { title: 'Computer Vision', desc: 'Analyze images and video with Azure Computer Vision.' },
  { title: 'Custom Vision', desc: 'Train and deploy custom image classifiers.' },
  { title: 'Face Recognition', desc: 'Detect and identify faces in images.' },
  { title: 'OCR', desc: 'Extract text from images and documents.' },
  { title: 'Knowledge Mining', desc: 'Discover insights from structured and unstructured data.' },
  { title: 'Generative AI', desc: 'Explore generative models and prompt engineering.' }
];

const CourseCurriculum = () => (
  <section className="course-curriculum">
    <h2>Course Curriculum</h2>
    <div className="modules-list">
      {modules.map((mod, idx) => (
        <div key={idx} className="module-card">
          <h3>{mod.title}</h3>
          <p>{mod.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CourseCurriculum; 