import React from 'react'
import { Link } from 'react-router-dom'
const Landing_page = ({bg_image, landing_title}) => {
  return (
    <>
        <div style={{
          background:`url(${bg_image})`,
          backgroundPosition:'center 40%',
          backgroundRepeat:'no-repeat',
          backgroundSize:'cover',

        }} className="landing-page w-full h-98 relative">
            <div className="front w-full h-full bg-linear-to-r from-[#00224991] from-48% to-transparent to-60%"></div>
            <div className="text absolute top-30 left-20 flex flex-col items-center">
            <h1 style={{padding:'10px 0'}} className='text-5xl text-white'>{landing_title}</h1>
            <h2 className='text-lxg text-white'> <Link className='hover:text-[#002249bd] duration-250' to='/'> Home </Link><span style={{padding:"0px 10px"}}>/</span> {landing_title}</h2>
            </div>
        </div>
    </>
  )
}

export default Landing_page