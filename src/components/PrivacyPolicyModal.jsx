import React, { useEffect } from 'react'

const privacySectionStyle = 'mb-7'
const privacyHeaderStyle = 'text-base sm:text-lg font-medium mb-3'
const privacyParagraphStyle = 'text-sm sm:text-base ml-1 max-w-[95%]'

const PrivacyPolicyModal = ({ showPrivacyModal, setShowPrivacyModal }) => {
  useEffect(() => {
    if (showPrivacyModal) {
      document.body.classList.add('no-scroll')
    } else if (!showPrivacyModal) {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }

  }, [showPrivacyModal])

  return (
    <div>
      <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-30 text-text dark:text-darkText'>
        <div className='flex flex-col px-8 pb-8 h-full w-full sm:min-w-[60%] max-w-[1200px] max-h-[600px] rounded-lg  bg-background dark:bg-zinc-800'>
          <h1 className='text-lg sm:text-xl font-medium py-5'>Privacy Policy</h1>
          <div id='privacy-section-container' className='flex flex-col overflow-y-scroll p-2 border-t border-gray-300'>
            <section className={privacySectionStyle}>
              <p className={privacyParagraphStyle}>This Privacy Policy outlines how we collect, use, and protect your information when you interact with Okan Ulu's portfolio website. We are committed to safeguarding your privacy and ensuring the security of any personal information you provide while using this website.</p>
            </section>
            <section className={privacySectionStyle}>
              <h3 className={privacyHeaderStyle}>Information we collect</h3>
              <p className={privacyParagraphStyle}>When you use the contact form on our website, we may collect the following information:</p>
              <ul className='list-disc ml-8 my-2 font-medium'>
                <li className='my-2'>Name (optional)</li>
                <li className='my-2'>Email Address</li>
                <li className='my-2'>Message</li>
              </ul>
              <p className={privacyParagraphStyle}>This information is collected solely for the purpose of communication and responding to your inquiries or messages.</p>
            </section>
            <section className={privacySectionStyle}>
              <h3 className={privacyHeaderStyle}>Protection of Your Information</h3>
              <p className={privacyParagraphStyle}>We are committed to ensuring the security and confidentiality of the information you provide. We take reasonable measures to prevent unauthorized access or disclosure of your information.</p>
            </section>
            <section className={privacySectionStyle}>
              <h3 className={privacyHeaderStyle}>Sharing of Information</h3>
              <p className={privacyParagraphStyle}>We do not sell, trade, or otherwise transfer your personal information to outside parties. Your information is only used for communication purposes related to your inquiries or messages.</p>
            </section>
            <section className={privacySectionStyle}>
              <h3 className={privacyHeaderStyle}>Your Consent</h3>
              <p className={privacyParagraphStyle}>By using the contact form on our website, you consent to the terms outlined in this Privacy Policy.</p>
            </section>
            <section className={privacySectionStyle}>
              <h3 className={privacyHeaderStyle}>Accessing or Updating Your Information</h3>
              <p className={privacyParagraphStyle}>You have the right to access or update your personal information provided through the contact form. If you wish to access or modify this information, please contact us at <a href='mailto:contact@okanulu.com' className='text-accent dark:text-primary hover:underline'>contact@okanulu.com</a>.</p>
            </section>
            <section className={privacySectionStyle}>
              <h3 className={privacyHeaderStyle}>Updates to This Privacy Policy</h3>
              <p className={privacyParagraphStyle}>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page.</p>
            </section>
            <section className={privacySectionStyle}>
              <h3 className={privacyHeaderStyle}>Contact Information</h3>
              <p className={privacyParagraphStyle}>If you have any questions or concerns regarding this Privacy Policy, please contact us at <a href='mailto:contact@okanulu.com' className='text-accent dark:text-primary hover:underline'>contact@okanulu.com</a>.</p>
            </section>
          </div>
          <div id='privacy-buttons-container' className='flex flex-row justify-end pt-5 pr-5 border-t border-gray-300'>
            <button
              className='py-2 px-5 bg-primary dark:bg-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700'
              onClick={() => {setShowPrivacyModal(!showPrivacyModal)}}
            >Close</button>
          </div>
        </div>
      </div>
      {/* Darkens Screen behind modal to give focus */}
      <div className='fixed inset-0 bg-black/20 z-20' />
    </div>
  )
}

export default PrivacyPolicyModal