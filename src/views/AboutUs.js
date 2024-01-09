import React from 'react';
//import FeaturesSplit from '../components/sections/FeaturesSplit';
import GenericSection from '../components/sections/GenericSection';
import FeaturesSplit from '../components/sections/FeaturesSplit';
const AboutUs = () => {

    return (
      <>
        <FeaturesSplit />
        {/* <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" /> */}
        <GenericSection></GenericSection>
      </>
    );
  }

export default AboutUs;