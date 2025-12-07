import React from 'react'

import caretright from "../assets/images/CaretRight.svg"
import { useNavigate } from 'react-router-dom'


export default function Catheader() {
  const navigate = useNavigate()
  const home = ()=>{
    navigate("/")
  }
  return (
    <>
      <div className='w-full flex  h-[400px] max-sm:h-[450px] justify-center max-sm:text-center items-center bg-cat'>
        <div className='w-[85%]'>
          <div className='flex gap-2 text-[16px] max-sm:hidden'>
          <a href="" className='gap-2 flex '>Home <img src={caretright} alt="" onClick={home} /></a> 
         <a href="" className='gap-2 flex '>Bath <img src={caretright} alt="" /></a>
            <a href="" className='gap-2 flex '>Towel Rack</a></div>
          <h5 className='text-[70px] max-sm:text-[35px] text-[var(--brown)]  leading-none'>bath </h5>
          <h4 className='text-[70px] max-sm:text-[40px] font-bold text-[var(--black)] leading-none'>towel rack</h4>
        </div>
      </div>
    </>
  )
}
