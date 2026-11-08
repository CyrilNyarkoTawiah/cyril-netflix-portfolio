// Reading.tsx → "Featured IS Reading & Research" (MPhil themes)
import React from 'react';
import './Reading.css';
import cribook from '../images/p09_cribook.png';
import gym from '../images/p14_gym.jpg';
import lawfirm from '../images/p13_lawfirm.png';
import farm from '../images/p12_farm.png';
import citation from '../images/p10_citation.png';
import amazon from '../images/p07_amazon.png';

const themes = [
  { title: 'Implementing Digitization Projects', course: 'MSIS607 · UPSA', imgSrc: cribook, description: 'How institutions like CSIR-INSTI move knowledge into the digital era.' },
  { title: 'Business Intelligence in Data Science', course: 'MSIS605 · UPSA', imgSrc: gym, description: 'Turning data into decisions — the analytic side of my IS practice.' },
  { title: 'Information Security', course: 'MSIS609 · UPSA', imgSrc: lawfirm, description: 'Securing the information systems I help design and build.' },
  { title: 'IT Entrepreneurship & Innovation', course: 'MSIS601 · UPSA', imgSrc: farm, description: 'The venture thinking behind products like Duo Blocks.' },
  { title: 'IS Research Methods I', course: 'MSIS603 · UPSA', imgSrc: citation, description: 'How we know what we know — the methods behind MPhil research.' },
  { title: 'AI in Business', course: 'MSIS613 · UPSA', imgSrc: amazon, description: 'Where AI meets enterprise — and where my next builds are going.' },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📖 Featured IS Reading &amp; Research</h2>
      <p className="reading-intro">The MPhil Information Systems themes shaping how I think about design, digitalization and data.</p>
      <div className="books-grid">
        {themes.map((book, index) => (
          <div key={index} className="book-card" style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}>
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.course}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
