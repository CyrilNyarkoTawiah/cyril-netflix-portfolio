import React from 'react';
import './Music.css';
import thouart from '../images/p11_thouart.png';
import citation from '../images/p10_citation.png';
import bigdate from '../images/p17_bigdate.jpg';
import gym from '../images/p14_gym.jpg';
import autumn from '../images/p01_autumn.png';
import bluecrest from '../images/p02_bluecrest.jpg';

const disciplines = ['Identity Design', 'Architectural Renders', 'Motion & Animation', 'Web & Apps', 'Print & Publication'];

const tools = [
  { title: 'Adobe Creative Suite', craft: 'Print, identity & imaging', imgSrc: thouart },
  { title: 'CorelDRAW', craft: 'Brand guidelines & production', imgSrc: citation },
  { title: 'Figma', craft: 'UI & digital product design', imgSrc: bigdate },
  { title: 'Google SketchUp', craft: '3D modeling of buildings & concepts', imgSrc: gym },
  { title: 'Lumion', craft: 'Hyperreal rendering — my DCDA piece', imgSrc: autumn },
  { title: 'Lightroom + Filmora', craft: 'Color grade & final edit', imgSrc: bluecrest },
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>"Design isn't a job — it's the way I see the world." 🎨</p>
      </div>

      <div className="genre-section">
        <h3>Explore by Discipline</h3>
        <div className="genres">
          {disciplines.map((genre, index) => (
            <div key={index} className="genre-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <p>{genre}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>My Tools in Action</h3>
        <div className="albums">
          {tools.map((album, index) => (
            <div key={index} className="album-card" style={{ animationDelay: `${index * 0.3}s` }}>
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>{album.craft}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Music;
