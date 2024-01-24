import React, { useEffect, useState } from 'react'
import Pagenav from './Pagenav'
import heroimg from "../Assets/Images/heroimg.webp";
import { Heroelipse1, Heroelipse2, Heroelipse3 } from '../CommonIcon/Icon';


const Herosection = () => {
  
    const [first, setFirst] = useState("tab1")
    function tabs(tab) {
        setFirst(tab);
    }
    return (
        <div>
            <Pagenav />
            <div className=' max-w-[1240px] mx-auto px-3 mt-[20px] 576:mt-[40px] md:mt-[60px] 992:mt-[80px]'>
                <div className=' flex flex-row flex-wrap -mx-3'>
                    <div className=' w-full md:w-1/2 px-3 pt-5'>
                        <div className=' flex justify-center md:block'>
                        <div className=' flex items-center relative after:absolute after:w-full after:h-[1px] after:bg-[#E5E5E5] after:left-0 after:bottom-[-5px] after:max-w-[242px]'>
                            <span onClick={() => tabs('tab1')} className={`${first ===  "tab1" ? "tab_1 " : ""} font-poppins font-semibold text-[15px] text-[#DBD9D9] mr-[23px] leading-[normal] cursor-pointer`}>Hosting</span>
                            <span onClick={() => tabs('tab2')} className={`${first ===  "tab2" ? "tab_1" : ""} font-poppins font-semibold text-[15px] text-[#DBD9D9] mr-[18px] leading-[normal] cursor-pointer`}>Domain</span>
                            <span onClick={() => tabs('tab3')} className={`${first ===  "tab3" ? "tab_1" : ""} font-poppins font-semibold text-[15px] text-[#DBD9D9] mr-[15px] leading-[normal] cursor-pointer`}>SEO</span>
                            <span onClick={() => tabs('tab4')} className={`${first ===  "tab4" ? "tab_1" : ""} font-poppins font-semibold text-[15px] text-[#DBD9D9] leading-[normal] cursor-pointer`}>Email</span>
                        </div></div>
                        { first === 'tab1' && <p  className=' mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]' >Premium Web Hosting for Your Website</p>}
                        { first === 'tab2' && <p className=' mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]'>Premium Web Domain for Your Website</p>}
                        { first === 'tab3' && <p className=' mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]'>Premium Web SEO for Your Website</p>}
                        { first === 'tab4' && <p className=' mx-auto md:mx-0 text-center md:text-start font-poppins text-[30px] 450:text-[37px] 576:text-[43px] min-[800px]:text-[50px] min-[900px]:text-[58px] 992:text-[64px] font-bold leading-[45px] 450:leading-[55px] 576:leading-[62.5px]  min-[900px]:leading-[77.5px] text-[#2E2E2E] mt-[10px] min-[800px]:mt-[30px] max-w-[608px]'>Premium Web Email for Your Website</p>}
                        <p className=' mx-auto md:mx-0 text-center md:text-start font-inter text-[14px] 992:text-base font-normal text-[#808080] leading-[20px] min-[900px]:leading-[28px] tracking-[0.8px] max-w-[448px] mt-[10px] min-[900px]:mt-[34px]'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                        <div className=' flex items-center min-[900px]:pt-[25px] pt-[10px] 576:pt-[20px] lg:pt-[60px] gap-[24px] justify-center md:justify-start'>
                            <button className=' font-poppins text-[12px] min-[375px]:text-[14px] font-normal leading-[24px] text-[#000] p-[8px_10px] min-[375px]:p-[12px_13.5px] rounded-[8px] border-[1px] border-[#000] hover:text-[#fff] hover:shadow-[0px_0px_64px_0px_#b000004d] duration-300 hover:border-transparent z-[1] relative before:absolute before:bg-[#B00000] before:top-[100%] before:left-[100%] before:duration-300 hover:before:top-[-30px] hover:before:left-[-30px] overflow-hidden before:w-[366px] before:h-[218px] before:rounded-full before:z-[-1]'>Create an Account</button>
                            <button className=' z-[1] relative before:absolute before:bg-[#B00000] hover:text-[#FFF] before:top-[100%] before:left-[100%] before:duration-300 hover:before:top-[-30px] duration-300 hover:before:left-[-30px] hover:border-[transparent] overflow-hidden before:w-[366px] before:h-[218px] before:rounded-full before:z-[-1] font-poppins text-[12px] min-[375px]:text-[14px] font-normal leading-[24px] text-[#000] p-[8px_10px] min-[375px]:p-[12px_18px] rounded-[8px] border-[1px] border-[#000] hover:shadow-[0px_0px_64px_0px_#b000004d] '>Choose your plan</button>
                        </div>
                    </div>
                    <div className=' w-full md:w-1/2 px-3 pt-[17px] flex items-center relative'>
                        <span className=' absolute top-[1%] 576:top-[15%] right-[5%] sm:right-[10%] md:right-[0%] 1200:right-[5%] elipse'><Heroelipse1/></span>
                        <span className=' absolute bottom-[-3%] 576:bottom-[32%] left-[4%] sm:left-[10%] md:left-[0%] 1200:left-[6%] elipse'><Heroelipse3/></span>
                        <span className=' absolute bottom-[-10%] 576:bottom-[9%] right-[5%] sm:right-[10%] md:right-0 1200:right-[6%] elipse'><Heroelipse2/></span>
<img className=' max-w-[501px] max-h-[504px] mx-auto 992:ms-auto w-full' src={heroimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Herosection