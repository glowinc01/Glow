import React from 'react'
import HeroSection from "../components/HeroSection"
import HeroImage from "../assets/Group 1.png"
import HeroWithForm from "../components/HeroWithForm"
const Services: React.FC = () => {
  return (
    <div className='text-white font-poppins bg-white'>
    <HeroSection
            badgeText="Our Services"
            imageUrl={HeroImage}
            title="Our Services"
            description="We believe in a collaborative approach, working closely with our clients to understand their goals and target audience"
          />
          <HeroWithForm/>
    </div>
  )
}

export default Services