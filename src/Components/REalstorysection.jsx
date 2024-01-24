import React from 'react'
import realimg1 from "../Assets/Images/realimg1.webp";
import realimg3 from "../Assets/Images/realimg3.webp";
import realimg2 from "../Assets/Images/realimg2.webp";
import { Greenicon , RealStory } from '../CommonIcon/Icon';
const REalstorysection = () => {
    return (
        <div className=' overflow-hidden'>
        <div className='max-w-[1218px] mx-auto px-3 mt-[40px] 576:mt-[70px] md:mt-[100px] 992:mt-[161px] mb-[40px] 576:mb-[65px] md:mb-[75px] lg:mb-[95px]'>
            <div className=' flex flex-row flex-wrap -mx-3'>
                <div className=' w-full sm:w-1/2 px-3 flex flex-col items-center sm:items-end'>
                    <div className='max-w-[445px]'>
                        <div className=' font-inter text-[35px] md:text-[40px] 992:text-[48px] font-extrabold leading-[48px] md:leading-[64px] text-[#18191F] text-center sm:text-start relative' data-aos="fade-right">Real Stories from Real Customers
                        <span className=' absolute left-[-4%] 992:left-[-10%]  min-[1093px]:left-[-20%] top-[-50%] md:top-[-39%] z-0'> <RealStory/> </span> </div>
                        <p className=' font-inter text-[18px] text-[#18191F] font-normal leading-[32px] 576:mt-2 text-center sm:text-start' data-aos="fade-right">Get inspired by these stories.</p>
                    </div>
                    <div data-aos="fade-right">
                    <div className=' p-[7px_15px_15px_15px] 576:p-[7px_15px_96px_15px] md:p-[7px_32px_96px_32px] shadow-[0px_10px_20px_0px_#29292a12] duration-500 ease-linear hover:shadow-[0px_0px_4px_0px_#b000004d] rounded-[8px] max-w-[350px] mt-[15px] sm:mt-[24px]'>
                        <img src={realimg1} alt="" className=' pl-[32px]' />
                        <div className=' flex gap-[16px] mt-[-20px]'>
                            <div>  <Greenicon /></div>
                            <div>
                                <p className='  font-inter text-[16px] text-[#000] leading-[normal] 576:leading-[32px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-inter text-[18px] text-[#18191F] font-bold leading-[28px] mt-[8px] 576:mt-[24px]'>Floyd Miles</p>
                                <p className=' font-inter text-[14px] leading-[24px] text-[#969BAB] font-medium'>Vice President, CLI</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className=' w-full sm:w-1/2 px-3 flex flex-col items-center sm:items-start'>
                    <div data-aos="fade-left">
                <div className=' p-[15px] 576:p-[39px_15px_14px_15px] md:p-[39px_32px_14px_32px] shadow-[0px_10px_20px_0px_#29292a12] duration-500 ease-linear hover:shadow-[0px_0px_4px_0px_#b000004d] rounded-[8px] max-w-[445px] mt-[15px] sm:mt-[48px]'>
                        <img src={realimg2} alt="" className=' pl-[32px]' />
                        <div className=' flex gap-[16px] 450:mt-[15px]'>
                            <div>  <Greenicon /></div>
                            <div>
                                <p className='  font-inter text-[16px] text-[#000] leading-[normal] 576:leading-[32px] font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                <p className=' font-inter text-[18px] text-[#18191F] font-bold leading-[28px] mt-[8px] 576:mt-[24px]'>Jane Cooper</p>
                                <p className=' font-inter text-[14px] leading-[24px] text-[#969BAB] font-medium'>CEO, JPNL</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div data-aos="fade-left">
                <div className=' p-[15px] 576:p-[41px_15px_32px_15px] md:p-[41px_32px_32px_32px] shadow-[0px_10px_20px_0px_#29292a12] duration-500 ease-linear hover:shadow-[0px_0px_4px_0px_#b000004d] rounded-[8px] max-w-[350px] mt-[15px] sm:mt-[32px]'>
                        <img src={realimg3} alt="" className=' pl-[32px]' />
                        <div className=' flex gap-[16px]'>
                            <div>  <Greenicon /></div>
                            <div>
                                <p className='  font-inter text-[16px] text-[#000] leading-[normal] 576:leading-[32px] font-normal'>LemonWares saved our time in Hosting my company page.</p>
                                <p className=' font-inter text-[18px] text-[#18191F] font-bold leading-[28px] mt-[8px] 576:mt-[24px]'>Kristin Watson</p>
                                <p className=' font-inter text-[14px] leading-[24px] text-[#969BAB] font-medium'>Co-Founder, LeeveOn Branding</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
}

export default REalstorysection