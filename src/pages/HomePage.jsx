// import React from 'react';
import AboutUsSection from '../componants/AboutUsSection';
import HeroSection from '../componants/HeroSection';
import SliderSection from '../componants/SliderSection';
import WelcomeSection from '../componants/WelcomeSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <AboutUsSection />
            <WelcomeSection />
            <SliderSection />
        </div>
    );
};

export default HomePage;