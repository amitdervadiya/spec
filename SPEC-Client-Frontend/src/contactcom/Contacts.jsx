import React from 'react'
import rightarrow from "../assets/images/ArrowRight(1).svg"
import map from "../assets/images/fmapicon.svg"
import phone from "../assets/images/fphoneicon.svg"
import email from "../assets/images/femailicon.svg"

export default function Contacts() {
  return (
    <>
      <section className='flex justify-center items-center mt-[140px] max-md:h-max'>

        <div className='w-[85%] flex justify-center items-center'>
          <div className='flex justify-between w-full max-md:flex-col max-sm:gap-[50px] h-[800px] max-md:h-max'>
            <div className='bg-cn w-[48%] h-[800px] max-sm:h-[450px] max-sm:w-full'>

            </div>

            <div className='flex w-[48%] flex-col bg-[#FFF8EE] max-sm:py-[50px] justify-start max-sm:items-center items-start px-[25px] max-sm:w-full'>
              <h3 className='text-[var(--brown)]'>spec</h3>
              <h1 className='text-[50px] font-bold leading-none'>Enquire Now</h1>
              <p className='text-[18px] mt-[30px] text-[var(--grey)] max-sm:text-center'>We’re here to assist you with any questions about your orders, products, or services. Please fill out the form below and our support team will respond shortly.</p>
              <div className='flex flex-col w-full mt-[30px] gap-5'>
                <div className='flex w-full justify-between gap-[25px] max-sm:flex-col'>
                  <div className='flex-col flex gap-2 w-full'>
                    <label htmlFor="" className='text-[16px] font-semibold'>First Name</label>
                    <input type="text" className='input1 ' placeholder='Jone' />
                  </div>
                  <div className='flex-col flex gap-2 w-full'>
                    <label htmlFor="" className='text-[16px] font-semibold'>Last Name</label>
                    <input type="text" className='input1 ' placeholder='Deo' />
                  </div>
                </div>
                <div className='flex w-full justify-between gap-[25px] max-sm:flex-col'>
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
                  <textarea name="" id="" placeholder='your message here' className='h-[130px] max-sm:h-[100px] p-4 border borer-[#E5E5E5]'>

                  </textarea>

                </div>
                <a href="">
                  <button className='h-[50px]  bg-[var(--brown)] max-sm:h-[40px] max-sm:text-[15px]  flex text-[17px] font-bold text-white w-full rounded-[50px] justify-center items-center gap-2'>
                    Send Message  <img src={rightarrow} alt="" className='w-5 h-5 max-sm:h-[17px] max-sm:w-[17px]' />
                  </button>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className='flex justify-center items-center mt-[140px] max-sm:mt-[50px] '>
        <div className='w-[85%] flex justify-center max-sm:flex-col items-center max-sm:h-max h-[175px]'>
          <div className='flex justify-center w-[30%] max-sm:w-full  h-[175px] gap-2 items-center p-[25px] border border-[#E4E4E4]'>
            <div className='flex justify-center items-start h-full'>
              <div className='h-[45px]  flex justify-center items-center w-[45px] rounded-full bg-[var(--brown)]'>
                <img src={map} alt="" className='h-6 w-6' />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='text-[var(--black)] text-[22px]  max-sm:text-[18px] font-semibold'>Office Address</h6>
              <p className='font-medium text-[16px]'>sed no.12, Gondal Rd, near solvant fatak, chokdi, Rajkot, Kotharia, Gujarat 360022</p>
            </div>
          </div>
          <div className='flex justify-center gap-2 w-[30%]   max-sm:w-full   h-[175px] items-center p-[25px] border border-[#E4E4E4]'>
            <div className='flex justify-center items-start h-full'>
              <div className='h-[45px]  flex justify-center items-center w-[45px] rounded-full bg-[var(--brown)]'>
                <img src={phone} alt="" className='h-6 w-6' />
              </div>
            </div>
            <div className='flex flex-col  justify-center h-full gap-2 w-full'>
              <h6 className='text-[var(--black)] text-[22px] font-semibold max-sm:text-[18px]'>Sales Reservation Team</h6>
              <div className='w-full pr-4 h-full'>
                <a href="tel:+919016699400" className='w-full flex justify-between'><span>Rajkot Office:</span> <span>+91 90166 99400</span></a>
                <a href="tel:+919879368602" className='w-full flex justify-between'> <span>At Resort:</span><span>+91 98793 68602</span></a>
              </div>
            </div>
          </div>
          <div className='flex justify-center gap-2 items-center max-sm:justify-start  h-[175px] w-[30%]  max-sm:w-full  p-[25px] border border-[#E4E4E4]'>
            <div className='flex justify-center items-star h-full'>
              <div className='h-[45px]  flex justify-center items-center w-[45px] rounded-full bg-[var(--brown)]'>
                <img src={email} alt="" className='h-6 w-6' />
              </div>
            </div>
            <div className='flex flex-col gap-2 justify-start h-full'>
              <h6 className='text-[var(--black)] text-[22px] font-semibold max-sm:text-[18px]'>Office Email</h6>
              <p className='font-medium text-[16px]'>spec@infospecco.in</p>
            </div>
          </div>




        </div>
      </section>
    </>
  )
}
