import React from 'react'
import AboutHero from '../Components/AboutHero'
import PreparingSuccess from '../Components/PreparingSuccess'
import CompanyIntro from '../Components/CompanyIntro'
import CompanySolution from '../Components/CompanySolutions'
import ServicesSection from '../Components/ServicesSection'
import WhatWeDo from '../Components/WhatWeDo'

const About = () => {
  return (
    <div>
        <AboutHero/>
        <PreparingSuccess/>
        <CompanyIntro/>
        <CompanySolution/>
        <ServicesSection/>
        <WhatWeDo/>
    </div>
  )
}

export default About