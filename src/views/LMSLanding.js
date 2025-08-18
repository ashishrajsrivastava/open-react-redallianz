import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import classNames from 'classnames';

const DEFAULT_THUMB = require('../assets/images/illustration-section-01.svg');

const LMSLanding = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetch('/data/trainings.csv')
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            setTrainings(results.data);
          },
        });
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero section center-content-mobile reveal-from-bottom">
        <div className="container">
          <div className="hero-inner section-inner">
            <div className="hero-content">
              <div className="container-xs">
                <h1 className="m-0 reveal-from-bottom" data-reveal-delay="150">
                  Red Allianz Learning Management System
                </h1>
                <p className="hero-cta mb-0 reveal-from-bottom" data-reveal-delay="300">
                  Master the latest technologies with our comprehensive training programs. 
                  From Azure AI to cloud computing, accelerate your career with expert-led courses.
                </p>
                <div className="reveal-from-bottom" data-reveal-delay="450">
                  <a className="button button-primary button-wide-mobile" href="#courses">
                    Explore Courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-tiles section center-content-mobile reveal-from-bottom">
        <div className="container">
          <div className="features-tiles-inner section-inner has-top-divider">
            <div className="tiles-wrap">
              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        src={require('../assets/images/feature-tile-icon-01.svg')}
                        alt="Features tile icon 01"
                        width="64"
                        height="64"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Expert Instructors</h4>
                    <p className="m-0 text-sm">
                      Learn from industry professionals with years of hands-on experience in their respective fields.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        src={require('../assets/images/feature-tile-icon-02.svg')}
                        alt="Features tile icon 02"
                        width="64"
                        height="64"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Hands-on Projects</h4>
                    <p className="m-0 text-sm">
                      Apply your knowledge with real-world projects that build your portfolio and practical skills.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        src={require('../assets/images/feature-tile-icon-03.svg')}
                        alt="Features tile icon 03"
                        width="64"
                        height="64"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Flexible Learning</h4>
                    <p className="m-0 text-sm">
                      Study at your own pace with 24/7 access to course materials and recorded sessions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        src={require('../assets/images/feature-tile-icon-04.svg')}
                        alt="Features tile icon 04"
                        width="64"
                        height="64"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Certification Ready</h4>
                    <p className="m-0 text-sm">
                      Prepare for industry-recognized certifications with our comprehensive exam preparation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        src={require('../assets/images/feature-tile-icon-05.svg')}
                        alt="Features tile icon 05"
                        width="64"
                        height="64"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Community Support</h4>
                    <p className="m-0 text-sm">
                      Join a community of learners and get support from peers and instructors throughout your journey.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <img
                        src={require('../assets/images/feature-tile-icon-06.svg')}
                        alt="Features tile icon 06"
                        width="64"
                        height="64"
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">Career Guidance</h4>
                    <p className="m-0 text-sm">
                      Get personalized career advice and job placement assistance to advance your professional goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Courses Section */}
      <section id="courses" className="cta section center-content-mobile reveal-from-bottom">
        <div className="container">
          <div className="cta-inner section-inner">
            <div className="cta-slogan reveal-from-bottom">
              <h3 className="m-0">Available Courses</h3>
              <p className="text-sm">Discover our comprehensive training programs designed to accelerate your career</p>
            </div>
            <div className="cta-action reveal-from-bottom" data-reveal-delay="150">
              <div className="training-cards">
                {trainings.length === 0 && <div>Loading courses...</div>}
                {trainings.map((training, idx) => (
                  <div className="training-card" key={idx}>
                    <div className="training-thumb">
                      <img
                        src={training['Thumbnail URL'] || DEFAULT_THUMB}
                        alt={training['Training Name']}
                        onError={e => { e.target.onerror = null; e.target.src = DEFAULT_THUMB; }}
                      />
                    </div>
                    <div className="training-info">
                      <h4>{training['Training Name']}</h4>
                      <div className="training-date">Start: {training['Start Date']}</div>
                      <a href={training['Route Path']} className="enroll-btn">Enroll Now</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta section center-content-mobile reveal-from-bottom">
        <div className="container">
          <div className="cta-inner section-inner has-top-divider has-bottom-divider">
            <div className="cta-slogan reveal-from-bottom">
              <h3 className="m-0">Ready to Transform Your Career?</h3>
              <p className="text-sm">Join thousands of professionals who have accelerated their careers with our training programs</p>
            </div>
            <div className="cta-action reveal-from-bottom" data-reveal-delay="150">
              <a className="button button-primary button-wide-mobile" href="/contactus">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LMSLanding;
