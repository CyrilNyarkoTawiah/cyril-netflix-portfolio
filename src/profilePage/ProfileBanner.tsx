import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { getProfileBanner } from '../queries';
import { ProfileBanner as ProfileBannerType } from '../types';

const ProfileBanner: React.FC = () => {


  const [bannerData, setBannerData] = useState<ProfileBannerType | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getProfileBanner();
      setBannerData(data);
    }
    fetchData();
  }, []);

  if (!bannerData) return <div>Loading...</div>;

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <iframe
        className="banner-video"
        src="https://www.youtube.com/embed/CZ8FqCtD_I0?autoplay=1&mute=1&loop=1&playlist=CZ8FqCtD_I0&controls=0&rel=0&playsinline=1&modestbranding=1"
        title="Showreel"
        allow="autoplay; encrypted-media"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="banner-scrim"></div>
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Instagram" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
