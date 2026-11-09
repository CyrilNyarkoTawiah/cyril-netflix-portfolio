import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaPassport, FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaMusic, FaBook } from 'react-icons/fa';
import william from '../images/p05_william.png';
import thouart from '../images/p11_thouart.png';
import cribook from '../images/p09_cribook.png';
import farm from '../images/p12_farm.png';
import citation from '../images/p10_citation.png';
import autumn from '../images/p01_autumn.png';
import bigdate from '../images/p17_bigdate.jpg';
import gym from '../images/p14_gym.jpg';
import bluecrest from '../images/p02_bluecrest.jpg';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: thouart, icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: cribook, icon: <FaBriefcase />, route: "/work-experience" },
    { title: "Certifications", imgSrc: farm, icon: <FaCertificate />, route: "/certifications" },
    { title: "Recommendations", imgSrc: citation, icon: <FaHandsHelping />, route: "/recommendations" },
    { title: "Projects", imgSrc: autumn, icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: bigdate, icon: <FaEnvelope />, route: "/contact-me" }
  ],
  developer: [
    { title: "Skills", imgSrc: thouart, route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: autumn, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Certifications", imgSrc: farm, route: "/certifications", icon: <FaCertificate /> },
    { title: "Experience", imgSrc: cribook, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Recommendations", imgSrc: citation, route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: bigdate, route: "/contact-me", icon: <FaEnvelope /> }
  ],
  stalker: [
    { title: "Recommendations", imgSrc: citation, route: "/recommendations", icon: <FaHandsHelping /> },
    { title: "Contact Me", imgSrc: bigdate, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Projects", imgSrc: autumn, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: william, route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Certifications", imgSrc: farm, route: "/certifications", icon: <FaCertificate /> },
  ],
  adventure: [
    { title: "Music", imgSrc: thouart, route: "/music", icon: <FaMusic /> },
    { title: "Projects", imgSrc: autumn, route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Reading", imgSrc: bluecrest, route: "/reading", icon: <FaBook /> },
    { title: "Contact Me", imgSrc: bigdate, route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Certifications", imgSrc: farm, route: "/certifications", icon: <FaCertificate /> }
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for Visitor</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }} // Adding delay based on index
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
