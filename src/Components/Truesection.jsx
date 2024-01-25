import React from 'react'
import trueimg1 from "../Assets/Images/trueimg1.webp";
import trueimg2 from "../Assets/Images/trueimg2.webp";
import trueimg3 from "../Assets/Images/trueimg3.webp";
import trueimg4 from "../Assets/Images/trueimg4.webp";
import trueimg5 from "../Assets/Images/trueimg5.webp";
import trueimg6 from "../Assets/Images/trueimg6.webp";
import { Trueicon1, Trueicon2, Trueicon3, Trueicon4 } from '../CommonIcon/Icon';
const mycardinfo = [
    {
        aos: 'fade-right',
        svg: <Trueicon1 />,
        text: '99.9% Uptime'
    },
    {
        aos: 'fade-right',
        svg: <Trueicon2/>,
        text: 'Blazing Fast Web Hosting'
    },
    {
        aos: 'fade-left',
        svg: <Trueicon3 />,
        text: 'Free SSL Certificates'
    },
    {
        aos: 'fade-left',
        svg: <Trueicon4 />,
        text: '24x7 Friendly Support'
    },
]

const Truesection = () => {
    const mycard = mycardinfo.map((mycard , index) => (
        <div className=' w-full min-[450px]:w-1/2 md:w-1/3 min-[1200px]:w-1/4 px-3 pt-[20px]'>
        <div className={`${index === 1 ? "max-w-[260px]":""} max-w-[252px] mx-auto flex justify-center flex-col`}  data-aos={mycard.aos}>
                <span className=' rounded-full overflow-hidden mx-auto'>{mycard.svg}</span>
                <p className=' font-poppins text-[15px] min-[490px]:text-[17px] 992:text-[20px] font-bold text-[#000] leading-[normal] mx-auto mt-[8px] 450:mt-[12px]'>{mycard.text}</p>
                <p className=' font-poppins text-[11px] min-[450px]:text-[12px] font-light text-[#000] text-center mx-auto mt-[4px] leading-[normal]'>We Keep Your Web build Online 24x7x365.
                    Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
            </div>
        </div>
    ))
    return (
        <div id='our' className=' max-w-[1308px] mx-auto px-3  mt-[49px] md:mt-[79px] overflow-hidden'>
            <div className=' flex flex-row flex-wrap -mx-3'>
                <div className=' w-full 992:w-1/2 px-3'>
                    <p className=' font-inter text-[24px] 450:text-[34px] 576:text-[38px] lg:text-[40px] 1200:text-[48px] font-extrabold text-[#18191F] leading-[normal] 576:leading-[64px] mx-auto 992:mx-0 text-center 992:text-start'  data-aos="fade-right">True Cloud Web  Hosting</p>
                    <p className=' max-w-[573px] text-[#18191F] font-inter text-[14px] lg:text-[16px] 1200:text-[18px] font-normal leading-[normal] 576:leading-[28px] 1200:leading-[32px] pt-[10px] 992:pt-0 1200:pt-[30px]  mx-auto 992:mx-0 text-center 992:text-start'  data-aos="fade-right">
                        True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.
                    </p>
                </div>
                <div className=' w-full 992:w-1/2 px-3 pt-5'>
                    <div className=' flex flex-row flex-wrap -mx-3 items-center'>
                        <div className=' w-1/3 576:w-1/6  992:w-1/3 px-3'  data-aos="fade-left">
                            <img src={trueimg1} alt="" className=' max-w-[140px] max-h-[30px] m-auto w-full h-full' />
                        </div>
                        <div className=' w-1/3 576:w-1/6  992:w-1/3 px-3'  data-aos="fade-left">
                            <img src={trueimg2} alt="" className=' max-w-[125px] max-h-[50px] m-auto w-full h-full' />
                        </div>
                        <div className=' w-1/3 576:w-1/6  992:w-1/3 px-3'  data-aos="fade-left">
                            <img src={trueimg3} alt="" className=' max-w-[125px] max-h-[53px] m-auto w-full h-full' />
                        </div>
                        <div className=' w-1/3 576:w-1/6  992:w-1/3 px-3 pt-2 992:pt-[25px] 1200:pt-[42px]'  data-aos="fade-left">
                            <img src={trueimg4} alt="" className=' max-w-[172px] max-h-[92px] m-auto w-full h-full' />
                        </div>
                        <div className=' w-1/3 576:w-1/6  992:w-1/3 px-3 pt-2 992:pt-[25px] 1200:pt-[42px]'  data-aos="fade-left">
                            <img src={trueimg5} alt="" className=' max-w-[168px] max-h-[56px] m-auto w-full h-full' />
                        </div>
                        <div className=' w-1/3 576:w-1/6  992:w-1/3 px-3 992:pt-[25px] 1200:pt-[42px]'  data-aos="fade-left">
                            <img src={trueimg6} alt="" className=' max-w-[143px] max-h-[47px] m-auto w-full h-full' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex flex-row flex-wrap -mx-3 576:mt-[60px] md:mt-[80px]  992:mt-[100px] justify-center'>
                {mycard}
            </div>

        </div>
    )
}

export default Truesection