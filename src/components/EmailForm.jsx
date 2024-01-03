import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const formLabelStyle = 'text-sm font-medium px-2 mb-2 text-gray-400 dark:text-gray-300';
const inputFieldStyle = 'text-sm border border-secondary dark:border-none rounded-md bg-background dark:bg-darkSecondary py-1 px-2 text-sm sm:text-base text-text dark:text-darkText focus:outline-none focus:shadow-xl';

const EmailForm = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const nameFieldRef = useRef(null);
  const emailFieldRef = useRef(null);
  const messageFieldRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      from_name: nameFieldRef.current.value,
      reply_to: emailFieldRef.current.value,
      message: messageFieldRef.current.value,
    };

    emailjs.send('okanulu048yandex', 'template_zl1phc9', formData, 'XRHUyXgtRbj15SWYo')
      .then((result) => {
        console.log(result.text);
        // Başarı durumunda işlemleri buraya ekleyin
      }, (error) => {
        console.log(error.text);
        // Hata durumunda işlemleri buraya ekleyin
      });
  };

  return (
    <div className='w-full max-w-[400px] md:max-w-[550px]'>
      <form className='flex flex-col justify-center' onSubmit={sendEmail}>
        {/* NAME FIELD */}
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='name_field'
            className={formLabelStyle}>
              Name (Optional)
          </label>
          <input
            ref={nameFieldRef}
            id='name_field'
            type='text'
            placeholder='Your name here'
            className={inputFieldStyle}
          />
        </div>
        {/* EMAIL FIELD */}
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='email_field'
            className={formLabelStyle}>
              Email
          </label>
          <input
            ref={emailFieldRef}
            id='email_field'
            type='email'
            placeholder='Your email here'
            className={inputFieldStyle}
            required
          />
        </div>
        {/* TEXT FIELD */}
        <div className='flex flex-col mb-5'>
          <label htmlFor='message_field' className={formLabelStyle}>Message</label>
          <textarea
            ref={messageFieldRef}
            name='message_field'
            rows={10}
            placeholder='Enter message here...'
            className={`resize-none ${inputFieldStyle}`}
            required
          />
        </div>
        {/* AGREEMENT FIELD */}
        <div className='flex flex-row gap-2 items-center ml-2.5 mb-3'>
          <label htmlFor='form_agreement' className='sr-only'>I have read and agree to the Privacy Policy.</label>
          <input
            id='form_agreement'
            type='checkbox'
            className='text-lg w-3 h-3'
            required
          />
          <p className='text-sm'>I have read and agree to the <span onClick={() => {setShowPrivacyModal(!showPrivacyModal)}} className='hover:cursor-pointer hover:underline text-accent dark:text-darkPrimary'>Privacy Policy</span>.</p>
        </div>
        {/* SUBMIT BUTTON */}
        <div className='ml-2'>
          <label htmlFor='submit_button' className='sr-only'>Send Email</label>
          <input
            id='submit_button'
            type='submit'
            className='font-medium text-sm button-style bg-blue-200 dark:bg-gray-600 text-gray-400 dark:text-gray-500'
            value='Send Email'
          />
        </div>
      </form>
      {showPrivacyModal && <PrivacyPolicyModal showPrivacyModal={showPrivacyModal} setShowPrivacyModal={setShowPrivacyModal} />}
    </div>
  );
};

export default EmailForm;
