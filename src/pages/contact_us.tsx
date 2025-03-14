import React from 'react'
import Sub from '../components/Sub'
import ContactUsForm from '../components/contact/ContactUsForm'
import ContactUsHeader from '../components/contact/ContactUsHeader'

const ContactUs = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center bg-white dark:bg-slate-900'>
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-50
        dark:from-gray-900 dark:to-indigo-950 bg-center bg-cover bg-no-repeat lg:pb-0 pb-10 overflow-hidden
        max-w-[110rem]"
      >
        <ContactUsHeader />
        <ContactUsForm />
      </div>
    </div>
  )
}

export default ContactUs
