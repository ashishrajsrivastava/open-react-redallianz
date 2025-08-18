import React from 'react';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      <h1>Become a Certified Microsoft Azure AI Engineer</h1>
      <p>Master AI-102: Designing and Implementing a Microsoft Azure AI Solution. Get job-ready, earn your certification, and advance your career in AI and cloud.</p>
      <button className="cta-btn">Enroll Now</button>
    </div>
    <div className="hero-image">
      {/* Use the same video as the home page hero, larger and with autoplay/muted/loop */}
      <video
        id="azure-ai-hero-video"
        className="hero-video"
        playsInline
        controls
        autoPlay
        muted
        loop
        poster={require('../../assets/images/video-placeholder.jpg')}
      >
        <source src="https://csg996ec04df171x4281xa17.blob.core.windows.net/temp/RedAllianz_Explainer_NOW.mp4" type="video/mp4" />
      </video>
    </div>
  </section>
);

export default HeroSection; 