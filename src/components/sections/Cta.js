import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Step 2: Import axios

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {
  const [email, setEmail] = useState('');

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  // Function to handle email subscription
  const handleSubscribe = async () => {
    try {
      // Use Axios for the API request instead of the @mailchimp/mailchimp_marketing library
      const apiKey = process.env.REACT_APP_MAILCHIMP_API_KEY; // use this for production
      const listId = process.env.REACT_APP_MAILCHIMP_LIST_ID; // use this for production
      //const apiKey = '641c35c0aa955340478a026ffb8c8e6a-us21'; // For testing purposes only
      //const listId = '67c7200e1a'; // for testing purposes only

      const response = await axios.post(
        `api/lists/${listId}/members`,
        {
          email_address: email,
          status: 'pending',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${Buffer.from(`anystring:${apiKey}`).toString('base64')}`,
          },
        }
      );

      if (response.data.id) {
        toast.success('Thank you for subscribing! You shall receive a confirmation email soon!', {
          position: 'top-center',
          autoClose: 3000, // Pop-up message will close after 3 seconds
        });
      } else {
        toast.error('Error subscribing. Please try again later.', {
          position: 'top-center',
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error('Error subscribing. Please try again later.', {
        position: 'top-center',
        autoClose: 3000,
      });
    }
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Call the handleSubscribe function to subscribe the user's email
    handleSubscribe();
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Let us help you with your next technology upgrade!
            </h3>
          </div>
          <div className="cta-action">
            <form onSubmit={handleSubmit}>
              <Input
                id="newsletter"
                type="email"
                label="Subscribe"
                labelHidden
                hasIcon="right"
                placeholder="Your best email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 3.66663V12.3333H14V3.66663L8 8.33329L2 3.66663Z" stroke="#376DF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 3.66663L8 8.33329L2 3.66663" stroke="#376DF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2.66667 3.66663L8 9.00097L13.3333 3.66663" stroke="#376DF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Input>
              <button type="submit" className="button button-dark button-wide-mobile button-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* React Toastify container to show pop-up messages */}
      <ToastContainer />
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
