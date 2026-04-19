import React, { useState } from 'react';
import classNames from 'classnames';

const ContactUsForm = ({
  className,
  ...props
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honey: ''
  });

  const [errors, setErrors] = useState({});

  const classes = classNames(
    'section-inner has-bottom-divider',
    className
  );

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null
      });
    }
  };

  const handleSubmit = (e) => {
    // If validation fails, we prevent FormSubmit from triggering.
    // If it passes, the browser handles standard POST action.
    if (!validate()) {
      e.preventDefault(); 
    }
  };

  return (
    <section
      {...props}
      className="section center-content-mobile reveal-from-bottom"
    >
      <div className="container">
        <div className={classes} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left', padding: '40px 0' }}>
          <h2 className="mt-0 mb-16" style={{ textAlign: 'center' }}>Send Us a Message</h2>
          <p className="m-0 mb-32" style={{ textAlign: 'center' }}>We'd love to hear from you. Please fill out the form below and we will get in touch shortly.</p>
          
          <form 
            action="https://formsubmit.co/hello@redallianz.com" 
            method="POST" 
            onSubmit={handleSubmit}
          >
            {/* Honeypot Spam Protection */}
            <input type="text" name="_honey" style={{ display: 'none' }} value={formData._honey} onChange={handleChange} />
            
            {/* Enable Recaptcha */}
            <input type="hidden" name="_captcha" value="true" />
            
            {/* Next page after submit */}
            <input type="hidden" name="_next" value={window.location.origin + "/#/contactus"} />
            
            <input type="hidden" name="_subject" value={`New Contact Form Submission: ${formData.subject}`} />

            <div className="mb-16">
              <label className="form-label" htmlFor="name" style={{ display: 'block', marginBottom: '8px' }}>Name</label>
              <input 
                id="name"
                name="name"
                type="text" 
                className={classNames('form-input')}
                style={{ borderColor: errors.name ? '#FF6171' : undefined }}
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="form-hint" style={{ color: '#FF6171', marginTop: '4px' }}>{errors.name}</div>}
            </div>

            <div className="mb-16">
              <label className="form-label" htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>Email address</label>
              <input 
                id="email"
                name="email"
                type="email" 
                className={classNames('form-input')}
                style={{ borderColor: errors.email ? '#FF6171' : undefined }}
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="form-hint" style={{ color: '#FF6171', marginTop: '4px' }}>{errors.email}</div>}
            </div>

            <div className="mb-16">
              <label className="form-label" htmlFor="subject" style={{ display: 'block', marginBottom: '8px' }}>Subject</label>
              <input 
                id="subject"
                name="subject"
                type="text" 
                className={classNames('form-input')}
                style={{ borderColor: errors.subject ? '#FF6171' : undefined }}
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
              />
              {errors.subject && <div className="form-hint" style={{ color: '#FF6171', marginTop: '4px' }}>{errors.subject}</div>}
            </div>

            <div className="mb-24">
              <label className="form-label" htmlFor="message" style={{ display: 'block', marginBottom: '8px' }}>Message</label>
              <textarea 
                id="message"
                name="message"
                className={classNames('form-input')}
                style={{ borderColor: errors.message ? '#FF6171' : undefined }}
                placeholder="Your message matters..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <div className="form-hint" style={{ color: '#FF6171', marginTop: '4px' }}>{errors.message}</div>}
            </div>

            <div className="mt-24">
              <button 
                type="submit" 
                className="button button-primary button-block"
              >
                Send Message
              </button>
            </div>
            <p className="form-hint mt-16" style={{ textAlign: 'center' }}>
              We'll never share your email with anyone else. Protected by FormSubmit anti-spam.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUsForm;
