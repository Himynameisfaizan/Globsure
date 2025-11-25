import React from 'react'
import Landing_page from '../contact-page/Landing_page'
import landing_img from '/image/landing-page/claim3.jpg'
import Content_part from './Content_part'

const Claim = () => {
  return (
    <>
       <Landing_page bg_image={landing_img} landing_title={'Claim'} />
       <Content_part />
    </>
  )
}

export default Claim