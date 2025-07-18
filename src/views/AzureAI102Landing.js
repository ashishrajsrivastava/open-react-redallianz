import React from 'react';
import HeroSection from '../components/azure-ai-102/HeroSection';
import CourseOverview from '../components/azure-ai-102/CourseOverview';
import WhatYouWillLearn from '../components/azure-ai-102/WhatYouWillLearn';
import CourseCurriculum from '../components/azure-ai-102/CourseCurriculum';
import InstructorBio from '../components/azure-ai-102/InstructorBio';
import SocialProof from '../components/azure-ai-102/SocialProof';
import HandsOnProjects from '../components/azure-ai-102/HandsOnProjects';
import PricingEnrollment from '../components/azure-ai-102/PricingEnrollment';
import FAQSection from '../components/azure-ai-102/FAQSection';
import FooterCTA from '../components/azure-ai-102/FooterCTA';

const AzureAI102Landing = () => {
  return (
    <div className="azure-ai-102-landing">
      <HeroSection />
      <CourseOverview />
      <WhatYouWillLearn />
      <CourseCurriculum />
      <InstructorBio />
      <SocialProof />
      <HandsOnProjects />
      <PricingEnrollment />
      <FAQSection />
      <FooterCTA />
    </div>
  );
};

export default AzureAI102Landing; 