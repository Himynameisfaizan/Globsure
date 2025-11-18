import React from 'react'
import { Link } from 'react-router-dom'

const Landing_page = () => {
  return (
    <>
        <div className="landing-page w-full h-98 bg-[url(src/assets/image/landing-page/contactbg1.jpg)] bg-no-repeat bg-cover bg-position-[center_-9rem] relative">
            <div className="front w-full h-full bg-gradient-to-r from-[#00224991] from-48% to-transparent to-60%"></div>
            <div className="text absolute top-30 left-20 flex flex-col items-center">
            <h1 style={{padding:'10px 0'}} className='text-5xl text-white'>Contact Us</h1>
            <h2 className='text-lg text-white'> <Link className='hover:text-[#002249bd] duration-250' to='/'> Home </Link><span style={{padding:"0px 10px"}}>/</span> Contact Us</h2>
            </div>
        </div>
    </>
  )
}

export default Landing_page