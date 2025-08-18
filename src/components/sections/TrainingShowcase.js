import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const DEFAULT_THUMB = require('../../assets/images/illustration-section-01.svg');

const TrainingShowcase = () => {
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
    <section className="cta section center-content-mobile reveal-from-bottom">
      <div className="container">
        <div className="cta-inner section-inner">
          <h3 className="m-0" style={{marginBottom: '2rem'}}>Current Trainings</h3>
          <div className="training-cards">
            {trainings.length === 0 && <div>Loading trainings...</div>}
            {trainings.map((t, idx) => (
              <div className="training-card" key={idx}>
                <div className="training-thumb">
                  <img
                    src={t['Thumbnail URL'] || DEFAULT_THUMB}
                    alt={t['Training Name']}
                    onError={e => { e.target.onerror = null; e.target.src = DEFAULT_THUMB; }}
                  />
                </div>
                <div className="training-info">
                  <h4>{t['Training Name']}</h4>
                  <div className="training-date">Start: {t['Start Date']}</div>
                  <a href={t['Route Path']} className="enroll-btn">Enroll</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingShowcase; 