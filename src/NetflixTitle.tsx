import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import CyrilWordmark from './components/CyrilWordmark';

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      <div className={`netflix-title-logo ${isClicked ? 'animate' : ''}`}>
        <CyrilWordmark className={`title-wordmark ${isClicked ? 'sweep' : 'intro-reveal'}`} />
      </div>
      <p className="netflix-title-hint">Click to enter</p>
    </div>
  );
};

export default NetflixTitle;
