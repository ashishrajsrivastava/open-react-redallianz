import React from 'react';

const InstructorBio = () => (
  <section className="instructor-bio">
    <h2>Meet Your Instructor</h2>
    <div className="instructor-profile">
      <div className="instructor-photo" style={{
        width: '550px', 
        height: '250px', 
        borderRadius: '70%', 
        marginBottom: '0.5rem',
        overflow: 'hidden',
        border: '4px solid #e0e7ef',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src={require('../../assets/images/ashish.png')} 
          alt="Ashish Raj" 
          style={{
            width: '150%',
            height: '150%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '50%'
          }}
        />
      </div>
      <div>
        <h3>Ashish Raj</h3>
        <p>Microsoft Certified Trainer | Cloud, DevOps & MLOps Architect</p>
        <p>Ashish has 15+ years of experience teaching DevOps, Cloud technologies, and MLOps , helping thousands of students achieve certification and career success.</p>
      </div>
    </div>
  </section>
);

export default InstructorBio; 