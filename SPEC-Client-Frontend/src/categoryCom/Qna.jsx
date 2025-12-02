
import whatssapp from "../assets/images/WhatsappLogo.svg";
import headset from "../assets/images/Headset(1).svg";
export default function Qna() {
    return (

        <>
            <div className='h-[250px] flex justify-center w-full'>
                <div className='w-[85%] bg-[var(--brown)]  max-sm:gap-[20px] max-sm:flex-col max-sm:h-max flex justify-between max-sm:px-3 max-sm:py-5 px-[50px] items-center'>
                    <div className=' max-sm:px-2 gap-4 flex flex-col'>
                        <h2 className='text-[40px] max-sm:text-[28px]  font-semibold text-white'>Need help in buying?</h2>
                        <p className='text-[16px] max-sm:text-[12px]  font-medium text-white'>Available Monday to Saturday: 9:30 am to 5:30 pm</p>
                    </div>
                    <div className='flex  justify-center items-center text-[var(--black)] gap-6 max-sm:gap-4  max-sm:text-center '>
                        <div className='flex  flex-col gap-[20px] max-sm:gap-[10px] justify-center items-center bg-white  p-5 max-sm:p-2'>
                            <a href="" className='flex gap-2 max-sm:flex-col justify-center items-center font-semibold text-[20px] max-sm:text-[13px]'><img src={whatssapp} alt="" className='w-[30px] max-sm:w-5' /> whatsapp  </a>
                            <p className='flex flex-col  max-sm:text-[14px]  justify-center items-center font-medium text-[18px]'>SEND A "HI" ON WHATSAPP Τo
                                <a href="tel:+919016699400"> <span className='font-semibold'>+91 90166 99400</span></a> </p>
                        </div>

                        <div className='flex  flex-col gap-[20px] max-sm:gap-[10px] justify-center items-center bg-white  max-sm:text-center   p-5 max-sm:p-2'>
                            <a href="" className='flex gap-2 max-sm:flex-col justify-center items-center font-semibold text-[20px] max-sm:text-[13px]'><img src={headset} alt="" className='w-[30px] max-sm:w-5' />  whatsapp  </a>
                            <p className='flex flex-col max-sm:text-[14px] font-medium justify-center max-sm:text-center items-center text-[18px]'>SEND A "HI" ON WHATSAPP Τo
                                <a href="tel:+919016699400"> <span className='font-semibold'>+91 90166 99400</span></a> </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
