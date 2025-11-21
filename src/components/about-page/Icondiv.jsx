import React from 'react'
const Icondiv = ({svg, title, desc}) => {
  return (
   <>
    <div className='flex justify-end gap-5 w-full'>
        <img className='h-12 object-cover rounded-2xl shadow-md cursor-pointer' style={{padding:'6px'}} src={svg} alt="svg" />
        <div className="content w-[80%]">
            <h3 className='text-2xl font-semibold text-[#002249]'>{title}</h3>
            <p className='text-[#000000a6] text-[15px]' style={{padding:'10px 0'}}>{desc}</p>
        </div>
    </div>
   </>
  )
}

export default Icondiv