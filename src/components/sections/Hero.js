import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'; // Import the CSS styles for Plyr

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  // Initialize Plyr when the component mounts
  React.useEffect(() => {
    // eslint-disable-next-line
    const player = new Plyr('#video-player', {
      // Options for Plyr (if needed)
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    });
  }, []);

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Your technology and learning <span className="text-color-primary">partner</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                We’re demolishing the walls put in place by passive learning and inaccessibility with an approach that strikes the perfect balance between hands-on practice instructor-led video training.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="https://redallianz.com/">
                    Get started
                  </Button>
                  <Button tag="a" color="light" wideMobile href="https://lms.redallianz.com">
                    Explore Courses
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            {/* Add a video element with an id for Plyr to target */}
            <video
              id="video-player"
              playsInline
              controls
              autoPlay // Add the autoplay attribute to enable autoplay
              poster={require('./../../assets/images/video-placeholder.jpg')} // Add the poster image for the video
            >
              <source src="https://drive.google.com/uc?id=1MckV1xBvoZBHS2Ji-AYF-AZg5Z23SLSD" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
