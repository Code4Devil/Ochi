import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed=".2" className='w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex gap-10 uppercase whitespace-nowrap overflow-hidden'>
            <motion.h1 initial={{x:0}} animate ={{x:'-100%'}} transition={{ease:'linear', repeat:Infinity , duration:100}} className='text-[20vw] font-semibold font-[founders] leading-none -mt-3 '>WE are ochi  WE are ochi  We are Ochi  We are Ochi  WE are ochi  WE are ochi  We are Ochi  We are Ochi  WE are ochi  WE are ochi  We are Ochi  We are Ochi  WE are ochi  WE are ochi  We are Ochi  We are Ochi WE are ochi  WE are ochi  We are Ochi  We are Ochi  WE are ochi  WE are ochi  We are Ochi  We are Ochi WE are ochi  WE are ochi  We are Ochi  We are Ochi  WE are ochi  WE are ochi  We are Ochi  We are Ochi WE are ochi  WE are ochi  We are Ochi  We are Ochi  WE are ochi  WE are ochi  We are Ochi  We are Ochi</motion.h1 >
            {/* <motion.h1 initial={{x:0}} animate ={{x:'-100%'}} transition={{ease:'linear', repeat:Infinity , duration:5}} className='text-[20vw] font-semibold font-[founders] leading-none -mt-3 '>WE are ochi</motion.h1 >
            <motion.h1 initial={{x:0}} animate ={{x:'-100%'}} transition={{ease:'linear', repeat:Infinity , duration:5}} className='text-[20vw] font-semibold font-[founders] leading-none -mt-3 '>WE are ochi</motion.h1 > */}



        </div>

    </div>
  )
}

export default Marquee