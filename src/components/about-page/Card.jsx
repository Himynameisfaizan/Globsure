import React from 'react'

const Card = ({image, teamName, teamPosition}) => {
  return (
    <>


    <div className="card w-70 h-80 rounded-lg flex flex-col justify-center items-center gap-5 shadow border-[#0073bd1f] border border-solid hover:shadow-xl duration-200 cursor-pointer bg-[#ffffff]" style={{margin:'30px 0'}}>
        <div className="img h-[60%] w-[70%] flex items-center justify-center">
            <img className='h-full w-full rounded-full object-cover' src={image} alt="" />
        </div>
        <div className="content">
            <h1 className='text-[#002249] text-xl'>{teamName}</h1>
            <h4 className='text-[#000000a6] text-center'>{teamPosition}</h4>
        </div>
    </div>

    </>
  )
}

export default Card