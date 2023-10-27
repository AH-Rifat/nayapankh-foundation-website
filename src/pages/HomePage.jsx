// import React from 'react';
import AboutUsSection from '../componants/AboutUsSection';
import HeroSection from '../componants/HeroSection';
import OurTeamSection from '../componants/OurTeamSection';
import SliderSection from '../componants/SliderSection';
import WelcomeSection from '../componants/WelcomeSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutUsSection />
            <WelcomeSection />
            <SliderSection />
            <OurTeamSection />
        </div>
    );
};

export default HomePage;