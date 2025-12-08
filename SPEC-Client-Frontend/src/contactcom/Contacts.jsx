import React from 'react'
import rightarrow from "../assets/images/ArrowRight(1).svg"

export default function Contacts() {
  return (
    <>
      <section className='flex justify-center items-center'>

        <div className='w-[85%] flex justify-center items-center'>
          <div className='flex justify-between w-full  h-[800px] '>
            <div className='bg-cn w-[45%] h-[800px]'>

            </div>

            <div className='flex w-[45%] flex-col bg-[#FFF8EE] justify-start items-start px-[25px]'>
              <h3 className='text-[var(--brown)]'>spec</h3>
              <h1 className='text-[50px] font-bold leading-none'>Enquire Now</h1>
              <p className='text-[18px] mt-[30px] text-[var(--grey)]'>We’re here to assist you with any questions about your orders, products, or services. Please fill out the form below and our support team will respond shortly.</p>
              <div className='flex flex-col w-full mt-[30px] gap-5'>
                <div className='flex w-full justify-between gap-[25px]'>
                  <div className='flex-col flex gap-2 w-full'>
                    <label htmlFor="" className='text-[16px] font-semibold'>First Name</label>
                    <input type="text" className='input1 ' placeholder='Jone' />
                  </div>
                  <div className='flex-col flex gap-2 w-full'>
                    <label htmlFor="" className='text-[16px] font-semibold'>Last Name</label>
                    <input type="text" className='input1 ' placeholder='Deo' />
                  </div>
                </div>
                <div className='flex w-full justify-between gap-[25px]'>
                  <div className='flex-col flex gap-2 w-full'>
                    <label htmlFor="" className='text-[16px] font-semibold'>Email</label>
                    <input type="text" className='input1 ' placeholder='Johndeo123@gmail.com' />
                  </div>
                  <div className='flex-col flex gap-2 w-full'>
                    <label htmlFor="" className='text-[16px] font-semibold'>Phone</label>
                    <input type="text" className='input1 ' placeholder='+91 1234567890' />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor="" className='text-[16px] font-semibold'>Message</label>
                  <textarea name="" id="" placeholder='your message here' className='h-[130px] p-4 border borer-[#E5E5E5]'>

                  </textarea>
                  <a href="">  
                    <button className='h-[50px] bg-[var(--brown)] '>
Send Message  <img src={rightarrow} alt="" />
                  </button>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
