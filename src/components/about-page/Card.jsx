import React from 'react'

const Card = () => {
  return (
    <>


    <div className="card w-80 h-100 rounded" style={{margin:'30px 0'}}>
        <div className="img h-[80%]">
            <img className='h-full rounded' src="src/assets/image/man.avif" alt="" />
        </div>
        <div className="content">
            <h1 className='text-[#002249] text-xl'>Yashika muchal</h1>
            <h4 className='text-[#000000a6]'>CO - founder</h4>
        </div>
    </div>

    </>
  )
}

export default Card