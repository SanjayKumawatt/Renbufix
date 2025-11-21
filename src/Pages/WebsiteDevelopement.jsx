import React from 'react'
import WebsiteDevelopmentHero from '../Components/WebsiteDevelopmentHero'
import DesignUsability from '../Components/DesignUsability';
import WebsiteDevelopmentIntro from '../Components/WebsiteDevelopementIntro';
import ContentManagementSystem from '../Components/ContentManagementSystem';
import SiteSearch from '../Components/SiteSearch';

const WebsiteDevelopement = () => {
  return (
    <div>
        <WebsiteDevelopmentHero/>
        <DesignUsability/>
        <WebsiteDevelopmentIntro/>
        <ContentManagementSystem/>
        <SiteSearch/>
    </div>
  )
}

export default WebsiteDevelopement;