import React from 'react'
import Form from './Form'
import Landing_page from './Landing_page'
import landing_image from '../../assets/image/landing-page/contactbg1.jpg'

const Contact = () => {
  return (
  <>
   <Landing_page bg_image={landing_image} landing_title="Contact Us"/>
   <Form />
  </>
  )
}

export default Contact