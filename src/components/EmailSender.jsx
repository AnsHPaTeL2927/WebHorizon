// src/components/EmailSender.js

import emailjs from 'emailjs-com';

const EmailSender = ({ userEmail, total }) => {
    emailjs.init("YOUR_VALID_PUBLIC_KEY"); 
  const sendEmail = () => {
    const templateParams = {
      to_email: "ansh.dalsania114922@marwadiuniversity.ac.in",
      subject: 'Booking Confirmation',
      message: `Your payment has been received. Your booking is confirmed!`,
    };
    console.log("Email", templateParams)

    emailjs.send('service_d5lb9qi', 'template_fmdyfot', templateParams, '_2YJxSf0Xiie28GPI')
      .then(() => {
        console.log('Email sent successfully');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return { sendEmail }; // Return the sendEmail function
};

export default EmailSender;
