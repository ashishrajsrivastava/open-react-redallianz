import React from 'react';
import ContactUsForm from '../components/sections/ContactUsForm';
import Hero from '../components/sections/Hero';
import GenericSection from '../components/sections/GenericSection';
import MailchimpForm from '../components/sections/MailchimpForm';

const ContactUs = () => {
    return (
        <>
            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <MailchimpForm/>
            </div>
        </>
    );
}
export default ContactUs;
