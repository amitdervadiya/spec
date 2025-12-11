
import rightarrow from "../assets/images/ArrowRight(1).svg"
import map from "../assets/images/fmapicon.svg"
import phone from "../assets/images/fphoneicon.svg"
import email from "../assets/images/femailicon.svg"

export default function Contacts() {
  const contactData = [
  {
    id: 1,
    title: "Office Address",
    icon: map,
    content: (
      <p className="font-medium text-[16px] p-text">
        sed no.12, Gondal Rd, near solvant fatak, chokdi, Rajkot, Kotharia, Gujarat 360022
      </p>
    ),
  },
  {
    id: 2,
    title: "Sales Reservation Team",
    icon: phone,
    content: (
      <div className="w-full pr-4 h-full p-text">
        <a href="tel:+919016699400" className="w-full flex justify-between a-contact">
          <span>Rajkot Office:</span> 
          <span>+91 90166 99400</span>
        </a>
        <a href="tel:+919879368602" className="w-full flex justify-between a-contact">
          <span>At Resort:</span>
          <span>+91 98793 68602</span>
        </a>
      </div>
    ),
  },
  {
    id: 3,
    title: "Office Email",
    icon: email,
    content: (
      <p className="font-medium text-[16px] p-text">spec@infospecco.in</p>
    ),
  },
];
  return (
    <>
      <section className='flex justify-center items-center mt-[140px] max-md:h-max'>

        <div className='w-[85%] flex justify-center items-center'>
          <div className='flex justify-between w-full max-md:flex-col max-sm:gap-[50px]  input-res max-md:h-max'>
            <div className='bg-cn w-[48%] h-[800px] max-sm:h-[450px] max-sm:w-full '>

            </div>

            <div className='flex w-[48%] flex-col bg-[#FFF8EE] input-field max-sm:py-[50px] justify-start max-sm:items-center items-start px-[25px] max-sm:w-full'>
              <h3 className='text-[var(--brown)]'>spec</h3>
              <h1 className='text-[50px] font-bold leading-none'>Enquire Now</h1>
              <p className='text-[18px] mt-[30px] text-[var(--grey)] max-sm:text-center'>We’re here to assist you with any questions about your orders, products, or services. Please fill out the form below and our support team will respond shortly.</p>
              <div className='flex flex-col w-full mt-[30px] gap-5'>
                <div className='flex w-full  justify-between gap-[25px] max-sm:flex-col '>
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

   
       <section className="flex justify-center items-center mt-[140px] max-sm:mt-[50px]">
      <div
        className="
          w-[85%] 
          grid 
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          con-box
        "
      >
        {contactData.map((item) => (
          <div
            key={item.id}
            className="
              flex 
              gap-2 
              items-center 
              p-[25px] 
              h-[175px]

              border border-[#E4E4E4]
              box-c
            "
          >
            <div className="flex justify-center items-start h-full">
              <div className="h-[45px] w-[45px] flex justify-center items-center rounded-full bg-[#F9F5EF]">
                <img src={item.icon} alt="" className="h-6 w-6" />
              </div>
            </div>

            <div className="flex flex-col gap-2 justify-start h-full">
              <h6 className="text-[var(--black)] text-[22px] font-semibold max-sm:text-[18px] h6">
                {item.title}
              </h6>

              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}
