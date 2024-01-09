import React from 'react';
import FormLabel from '../elements/FormLabel';
import Input from '../elements/Input';
import Button from '../elements/Button';

//create a contact us form using elements from the elements folder

const ContactUsForm = () => {
    
      return (
     <section className="contact-us-form">
        <div className="container">
          <div className="cta-inner section-inner">
             <div className="cta-slogan">
                <h3 className="m-0">
                  Contact Us
                </h3>
             </div>
             <div className="cta-action">
                <form>
                  <div className="mb-12">
                 <FormLabel htmlFor="name" className="form-label">Name</FormLabel>
                 <Input type="text" id="name" placeholder="Your Name" />
                  </div>
                  <div className="mb-12">
                 <FormLabel htmlFor="email" className="form-label">Email</FormLabel>
                 <Input type="email" id="email" placeholder="Your Email" />
                  </div>
                  <div className="mb-12">
                 <FormLabel htmlFor="message" className="form-label">Message</FormLabel>
                 <Input type="textarea" id="message" placeholder="Your Message" />
                  </div>
                  <div className="mt-24">
                 <Button tag="a" color="primary" wideMobile href="mailto: hello@redallianz.com"> 
                     Send Message
                    </Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </section>
        );
        }
        export default ContactUsForm;
