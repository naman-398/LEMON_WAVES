import React from 'react'
import weserve1 from "../Assets/Images/weserve1.webp";
import weserve2 from "../Assets/Images/weserve2.webp";
import weserve3 from "../Assets/Images/weserve3.webp";
import weserve4 from "../Assets/Images/weserve4.webp";
import weserve5 from "../Assets/Images/weserve5.webp";
import weserve6 from "../Assets/Images/weserve6.webp";

const Weservesection = () => {
    return (
        <div className=' max-w-[1218px] mx-auto px-3 overflow-hidden'>
            <div className=' flex flex-wrap flex-row -mx-3 items-center'>
                <div className=' w-full md:w-1/2 px-3'>
                    <p className=' font-inter text-[32px] min-[375px]:text-[36px] 576:text-[38px] 992:text-[48px] font-extrabold leading-[normal] 576:leading-[56px] 992:leading-[64px] text-[#18191F] max-w-[445px] mx-auto text-center md:mx-0 md:text-start' data-aos="fade-right">We serve over 100
                        Nigerian Websites</p>
                    <p className=' font-inter font-normal text-[16px] 992:text-[18px] leading-[normal] 576:leading-[28px] 992:leading-[32px] text-[#18191F] max-w-[445px] mt-2 mx-auto text-center md:mx-0 md:text-start' data-aos="fade-right">Connect LemonWares with your favourite tools that you use daily and keep things on track.</p>
                </div>
                <div className=' w-full md:w-1/2 px-3'>
                    <div className=' flex flex-row flex-wrap -mx-3'>
                        <div className=' w-1/3 576:w-1/6 md:w-1/3 px-3' data-aos="fade-left">
                            <div className=' max-w-[120px] max-h-[60px] 576:max-h-[100px] 992:max-h-[120px] mx-auto'>
                                <img src={weserve1} alt="weserve" />
                            </div>
                        </div>
                        <div className=' w-1/3 576:w-1/6 md:w-1/3 px-3' data-aos="fade-left">
                            <div className=' max-w-[120px] max-h-[60px] 576:max-h-[100px] 992:max-h-[120px] mx-auto'>
                                <img src={weserve2} alt="weserve" />
                            </div>
                        </div>
                        <div className=' w-1/3 576:w-1/6 md:w-1/3 px-3' data-aos="fade-left">
                            <div className=' max-w-[120px] max-h-[60px] 576:max-h-[100px] 992:max-h-[120px] mx-auto'>
                                <img src={weserve3} alt="weserve" />
                            </div>
                        </div>
                        <div className=' w-1/3 576:w-1/6 md:w-1/3 px-3' data-aos="fade-left">
                            <div className=' max-w-[120px] max-h-[60px] 576:max-h-[100px] 992:max-h-[120px] mx-auto'>
                                <img src={weserve4} alt="weserve" />
                            </div>
                        </div>
                        <div className=' w-1/3 576:w-1/6 md:w-1/3 px-3' data-aos="fade-left">
                            <div className=' max-w-[120px] max-h-[60px] 576:max-h-[100px] 992:max-h-[120px] mx-auto'>
                                <img src={weserve5} alt="weserve" />
                            </div>
                        </div>
                        <div className=' w-1/3 576:w-1/6 md:w-1/3 px-3' data-aos="fade-left">
                            <div className=' max-w-[120px] max-h-[60px] 576:max-h-[100px] 992:max-h-[120px] mx-auto'>
                                <img src={weserve6} alt="weserve" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weservesection