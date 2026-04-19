import React from 'react';
import ContactUsForm from '../components/sections/ContactUsForm';

const ContactUs = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', width: '100%' }}>
                <ContactUsForm style={{ width: '100%' }} />
            </div>
        </>
    );
}
export default ContactUs;
