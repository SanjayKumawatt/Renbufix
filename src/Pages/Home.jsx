import React from 'react'
import HeroSection from '../Components/HeroSection'
import DigitalNeedsSection from '../Components/DigitalNeedsSection'
import IdeasSection from '../Components/IdeasSection'
import ServicesSection from '../Components/ServicesSection'
import CollaborationSection from '../Components/CollaborationSection'
import EngagementModels from '../Components/EngagementModels'
import WhyChooseUs from '../Components/WhyChooseUs'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <DigitalNeedsSection/>
        <IdeasSection/>
        <ServicesSection/>
        <CollaborationSection/>
        <EngagementModels/>
        <WhyChooseUs/>
    </div>
  )
}

export default Home