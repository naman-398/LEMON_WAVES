import React from 'react'
import { Heroelipse1, Heroelipse2, Heroelipse3, Whatsapp } from '../CommonIcon/Icon'

const Wearesection = () => {
    return (
        <div id='contact' className=' overflow-hidden relative max-w-[1440px] mx-auto'>
            <span className=' absolute left-[38%] top-[16%] elipse'>
                <Heroelipse1/>
            </span>
            <span className=' absolute left-[5%] bottom-[16%] elipse'><Heroelipse3/></span>
            <span className=' absolute right-[5%] bottom-[10%] hidden 450:block elipse'><Heroelipse2/></span>
        <div className=' rounded-[16px] max-w-[1256px] mx-auto px-3 bg-[#F7FAFE] pt-[30px] 576:pt-[40px] md:pt-[80px] pb-[30px] 576:pb-[40px] md:pb-[88px] mt-[40px] 576:mt-[65px] md:mt-[85px] 992:mt-[105px]'>

            <p className=' font-poppins font-semibold text-[24px] min-[450px]:text-[35px] 576:text-[45px] md:text-[60px] 992:text-[64px] text-[#2E2E2E] leading-[33px] min-[450px]:leading-[48px] 576:leading-[60px] md:leading-[88px] text-center mx-auto max-w-[1024px]'  data-aos="fade-right">We're here to make your website awesome.</p>
           <div   data-aos="fade-left"> <button className=' p-[8px_10px] duration-300 hover:shadow-[0px_0px_64px_0px_#b000004d] 576:p-[12px_16px] flex items-center gap-[9px] bg-[#B00000] rounded-[8px] mx-auto mt-[15px] md:mt-[40px]'>
                <Whatsapp/><span className=' font-poppins text-[12px] 576:text-[14px] font-normal text-[#FFF] leading-[24px]'>Get  in touch with us</span>
            </button></div>
        </div>
        </div>
    )
}

export default Wearesection