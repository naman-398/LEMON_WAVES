import React, { useEffect, useState } from 'react'
import loaderimg from "../Assets/Images/footerlogo.webp";
const Loadersection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoaded(true); 
            document.body.style.overflow = ''; 
        }, 4000); 

        return () => clearTimeout(delay);
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
    }, []);
    return (
        <div>
            <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                <div className='flex items-center justify-center h-screen'>
                    <div className=' flex flex-col justify-center 576:gap-[20px] items-center'> 
                    <span className='aosloader'><img src={loaderimg} alt="" /></span>
                   <h1 className=' text-[#FFF] text-[30px] 576:text-[50px] font-roboto font-black aosloader' data-aos="zoom-in">LEMON_WAVES</h1>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Loadersection