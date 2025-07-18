import React from 'react';

const InstructorBio = () => (
  <section className="instructor-bio">
    <h2>Meet Your Instructor</h2>
    <div className="instructor-profile">
      <div className="instructor-photo" style={{width: '120px', height: '120px', background: '#e0e7ef', borderRadius: '50%', marginBottom: '1rem'}}>Photo</div>
      <div>
        <h3>Dr. Jane Doe</h3>
        <p>Microsoft Certified Trainer | Azure AI Expert</p>
        <p>Jane has 10+ years of experience teaching AI and cloud technologies, helping thousands of students achieve certification and career success.</p>
      </div>
    </div>
  </section>
);

export default InstructorBio; 