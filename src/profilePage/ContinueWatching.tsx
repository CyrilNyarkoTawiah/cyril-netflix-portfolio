import React from 'react';
import { Link } from 'react-router-dom';
import thouart from '../images/p11_thouart.png';
import cribook from '../images/p09_cribook.png';
import citation from '../images/p10_citation.png';
import farm from '../images/p12_farm.png';
import bigdate from '../images/p17_bigdate.jpg';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Reading", imgSrc: cribook, link: "/reading" },
    { title: "Blogs", imgSrc: citation, link: "/blogs" },
    { title: "Contact Me", imgSrc: bigdate, link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: thouart, link: "/music" },
    { title: "Reading", imgSrc: cribook, link: "/reading" },
    { title: "Blogs", imgSrc: citation, link: "/blogs" },
    { title: "Certifications", imgSrc: farm, link: "/certifications" },
    { title: "Contact Me", imgSrc: bigdate, link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: cribook, link: "/reading" },
    { title: "Blogs", imgSrc: citation, link: "/blogs" },
    { title: "Contact Me", imgSrc: bigdate, link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: thouart, link: "/music" },
    { title: "Reading", imgSrc: cribook, link: "/reading" },
    { title: "Certifications", imgSrc: farm, link: "/certifications" },
    { title: "Contact Me", imgSrc: bigdate, link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for Visitor</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
