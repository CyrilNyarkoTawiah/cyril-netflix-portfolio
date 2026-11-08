import React from 'react';
import './Blogs.css';
import { FaYoutube, FaStar, FaGlobe } from 'react-icons/fa';

const features = [
  {
    title: 'BlueCrest College Student Creates 3D Visuals of the Campus',
    platform: 'BlueCrest Blog',
    icon: <FaYoutube />,
    link: 'https://blog.bluecrest.edu.gh/2021/05/25/bluecrest-college-student-creates-3d-visuals-of-the-campus/',
    description: 'The 4-app story: SketchUp Pro → Lumion 10 → Lightroom → Filmora.',
  },
  {
    title: "Massive IG Views of Final Year IT Student's Project",
    platform: 'BlueCrest Intranet',
    icon: <FaStar />,
    link: 'https://intranet.bluecrest.edu.gh/2021/06/30/massive-ig-views-of-final-year-it-students-project/',
    description: 'My livestream set the college\'s all-time Instagram Live record (400+ views).',
  },
  {
    title: 'BlueCrest Campus 3D Visualization — full video',
    platform: 'YouTube · BlueCrest College',
    icon: <FaYoutube />,
    link: 'https://www.youtube.com/watch?v=iyi_-ffGGCY',
    description: 'Watch the full render — day/night sequences, reflections, shadows.',
  },
  {
    title: 'DCDA 2024 Long Beach Exhibition Catalogue',
    platform: 'DCDA (FlipHTML5)',
    icon: <FaGlobe />,
    link: 'https://fliphtml5.com/jikuw/jgyz/DCDA2024_LA_1-compressed1/',
    description: '"Best of the Best" — Autumn Estates Reimagined, page 16 (CSULB, USA).',
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">🎙️ Press, Features &amp; Videos</h2>
      <p className="blogs-intro">Where my work has been written up, streamed and exhibited.</p>
      <div className="blogs-grid">
        {features.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
