import React from 'react';
import './Recommendations.css';
import cribook from '../images/p09_cribook.png';
import thoartImg from '../images/p11_thouart.png';
import autumn from '../images/p01_autumn.png';

const recommendations = [
  {
    pic: cribook,
    name: 'BlueCrest University College',
    role: 'Institutional testimonial — quoted on bluecrest.edu.gh',
    date: 'Featured on the BSc & MSc IT program pages',
    quote:
      '"As an IT student in BlueCrest University College, I developed the abilities and confidence to utilize a range of quantitative techniques intelligently in my work. The programming, networking, web development, and other courses were vital assets that I continue to utilize daily. […] Information Technology is a great curriculum that has completely transformed my perspective on technology and its future!" — Cyril Tawiah'
  },
  {
    pic: thoartImg,
    name: 'BlueCrest Intranet feature',
    role: 'Massive IG Views of Final Year IT Student\'s Project',
    date: 'June 30, 2021',
    quote:
      '"We were ecstatic to see the project of Cyril Tawiah, a final year student of the BlueCrest School of Technology. Cyril made a very impressive 3D visualization of the college\'s campus […] his video recorded over 400 views on our Instagram account which is the highest ever recorded on any of our Instagram Live videos."'
  },
  {
    pic: autumn,
    name: 'DCDA Long Beach International Design Exhibition',
    role: '"Best of the Best" selection · CSULB, California, USA',
    date: 'January 30 – February 1, 2024',
    quote:
      'Cyril Nyarko Tawiah — Technical Officer, CSIR-Institute for Scientific and Technological Information — exhibited "Apex Legends: Autumn Estates Reimagined" alongside designers from Korea, China, Germany and the USA. Between: a Ghanaian creative\'s work, on a US exhibition wall.'
  }
];

const Recommendations: React.FC = () => {
  return (
    <div className="timeline-container">
      {recommendations.map((rec, index) => (
        <div key={index} className="recommendation-card" style={{ marginBottom: '2rem' }}>
          <div className="recommendation-header">
            <img src={rec.pic} alt={rec.name} className="profile-pic" />
            <div>
              <h3>{rec.name}</h3>
              <p>{rec.role}</p>
              <p className="date">{rec.date}</p>
            </div>
          </div>
          <div className="recommendation-body">
            <p>✨ {rec.quote}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
