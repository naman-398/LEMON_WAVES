import React, { useState } from 'react'
import pagelogo from "../Assets/Images/pagelogo.webp";
import { Navline, Telephone } from '../CommonIcon/Icon';

const Pagenav = () => {
    const [show, setShow] = useState(false)
    function mobile() {
        setShow(!show)
        if (show === false) {
            document.body.classList.add('overflow_hidden')
        }
        else {
            document.body.classList.remove('overflow_hidden')
        }
    }
    const phoneNumber = "+2349067322844";
    return (
        <>
            <nav className=' max-w-[1224px] mx-auto px-3 mt-[15px] 576:mt-[41px]'>
                <div className=' flex items-center justify-between'>
                    <div className=' flex items-center gap-[65.19px]'>
                        <img src={pagelogo} alt="" className=' cursor-pointer'/>
                        <a href="" className='hidden lg:block font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Our Services</a>
                    </div>
                    <div className=' flex items-center gap-[33px] min-[992px]:gap-[70px] min-[1200px]:gap-[198px]'>
                        <ul className={`${show === true ? "left-0" : "left-[-100%]"} flex items-center gap-[33px] mobile-view`}>
                            <li>
                                <a href="" className=' block lg:hidden font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Our Services </a>
                            </li>
                            <li>
                                <a href="" className=' font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>About </a>
                            </li>
                            <li>
                                <a href="" className=' font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Blog&News </a>
                            </li>
                            <li>
                                <a href="" className=' font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Contact</a>
                            </li>
                            <li>
                                <a href="" className=' block 576:hidden font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Account</a>
                            </li>
                            <li className=' flex gap-[11px] 576:hidden'><Telephone />
                                <a href={`tel:${phoneNumber}`} className=' font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>
                                    {phoneNumber}
                                </a>
                            </li>
                        </ul>
                        <ul className=' items-center gap-[30px] pr-[62px] hidden 576:flex'>
                            <li>
                                <a href="" className=' font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>Account</a>
                            </li>
                          <Navline/>
                            <li className=' flex gap-[11px] '><Telephone />
                                <a href={`tel:${phoneNumber}`} className=' font-poppins text-[15px] text-[#000] font-semibold leading-[normal] relative after:absolute after:w-0 after:h-[2px] after:bg-[#B00000] after:left-[50%] after:bottom-[-4px] hover:after:w-[80%] hover:after:left-[8%] after:duration-300'>
                                    {phoneNumber}
                                </a>
                            </li>
                        </ul>
                        <button onClick={mobile} className={`${show === false ? "rotate-90" : "rotate-360"} d_none relative z-[6] font-bold text-[27px] text-[#000] hover:text-[#B00000] duration-300`}>{show === false ? "|||" : "X"}</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Pagenav