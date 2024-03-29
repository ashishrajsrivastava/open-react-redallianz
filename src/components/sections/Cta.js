import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// eslint-disable-next-line
import Input from '../elements/Input';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Step 2: Import axios
import MailchimpForm from './MailchimpForm'; // Import the MailchimpForm component

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
  // eslint-disable-next-line
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
      const response = await axios.post(
        '/api', // Use the base URL, no need to include listId here
        {
          email_address: email,
          status: 'pending',
        }
      );

      if (response.data.id) {
        toast.success('Thank you for subscribing! Please click on the confirmation link in your email.', {
          position: 'top-center',
          autoClose: 3000,
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
  // eslint-disable-next-line
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
            {/* Use the MailchimpForm component here */}
            <MailchimpForm />
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
