import React from 'react'
import footerlogo from "../Assets/Images/footerlogo.webp";
import { Heart } from '../CommonIcon/Icon';
const Footer = () => {
    return (
        <div className=' bg-[#B00000] pt-[30px] 576:pt-[40px] md:pt-[64px] pb-[30px] 576:pb-[50px] md:pb-[80px] mt-[40px] 576:mt-[65px] md:mt-[85px] 992:mt-[110px] overflow-hidden'>
            <div className=' max-w-[1244px] mx-auto px-3'>
                <div className=' flex flex-row flex-wrap -mx-3 justify-between'>
                    <div className=' w-full 992:w-1/3 min-[1200px]:w-1/4 px-2'>
                        <img src={footerlogo} alt="" className=' cursor-pointer'/>
                        <p className=' font-inter text-[16px] font-normal leading-[normal] 576:leading-[32px] text-[#E6E6E6] pt-[16px] md:w-[60%] 992:w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                    </div>
                    <div className=' w-full 992:w-8/12 px-3 mx-auto mt-[20px]'>
                        <div className=' flex-row flex-wrap flex -mx-3'>
                            <div className=' w-1/2 sm:w-1/4 px-3 flex-col flex 992:items-center'>
                                <ul className=' flex flex-col gap-[10px] 576:gap-[24px]'>
                                    <li><a href="#" className=' font-inter text-[#FFF] text-[16px] leading-[normal] 576:leading-[24px] font-bold'>Service</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Domain</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Shared Hosting</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Cloud Hosting</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Private Hosting</a></li>
                               
                                </ul>
                            </div>
                            <div className=' w-1/2 sm:w-1/4 px-3 flex-col flex 992:items-end'>
                                <ul className=' flex flex-col gap-[10px] 576:gap-[24px]'>
                                    <li><a href="#" className=' font-inter text-[#FFF] text-[16px] leading-[normal] 576:leading-[24px] font-bold'>Hosting</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Cheap Hosting</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Hosting&nbsp;Wordpress</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Email Hosting</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Hosting Unlimited</a></li>
                               
                                </ul>
                            </div>
                            <div className=' w-1/2 mt-[15px] sm:mt-0 sm:w-1/4 px-3 flex-col flex 992:items-end'>
                                <ul className=' flex flex-col gap-[10px] 576:gap-[24px]'>
                                    <li><a href="#" className=' font-inter text-[#FFF] text-[16px] leading-[normal] 576:leading-[24px] font-bold'>Company</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>About</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Career</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Contact Us</a></li>
                                </ul>
                            </div>
                            <div className=' w-1/2 mt-[15px] sm:mt-0 sm:w-1/4 px-3 flex-col flex 992:items-end'>
                                <ul className=' flex flex-col gap-[10px] 576:gap-[24px]'>
                                    <li><a href="#" className=' font-inter text-[#FFF] text-[16px] leading-[normal] 576:leading-[24px] font-bold'>Help</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>FAQ</a></li>
                                    <li><a href="#" className=' font-inter text-[#E6E6E6] text-[16px] leading-[normal] 576:leading-[32px] font-normal relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-0 after:bg-[#FFF] hover:after:w-full hover:after:left-0 after:duration-300'>Help support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className=' flex items-center font-inter text-[10px] min-[375px]:text-[12px] 450:text-[14px] 576:text-[16px] gap-[3.5px] 450:gap-[9px] text-[#FFF] font-normal leading-[32px] mt-[30px] 576:mt-[55px] md:mt-[75px] 992:mt-[104px]'>Built by Jeremiah with  <Heart/>  love in Lagos. Copyright 2024</p>
            </div>
        </div>
    )
}

export default Footer