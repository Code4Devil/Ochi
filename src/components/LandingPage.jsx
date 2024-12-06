import { motion } from 'framer-motion'
import React from 'react'
import { FaArrowUpLong } from 'react-icons/fa6'


function LandingPage() {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-2'>
        <div className='textstructure mt-40 px-20 '>

        {["We Create", "Eye opening", "Presentations"].map((item,index)=> (

            <div className="masker flex font-[founders] text-[10vw]  ">

                <div className='flex items-center w-fit'>
                {index===1 && (<motion.div  initial = {{width:0}} animate = {{width:"9vw"}} transition={{ease:"easeInOut",duration:1}} className='w-[9vw] h-[6vw] relative top-[0.4vw] mr-[1vw] bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] bg-cover bg-center rounded-lg' ></motion.div>)}
                <h1 key={index} className=' uppercase leading-[7vw] font-semibold'>{item}</h1>

                </div>

                

            </div>
        ))}

    </div>

    <div className='border-t-[0.5px] border-zinc-700 w-full mt-40 flex items-center  justify-between  py-5 px-20  '>
        {["For public and private companies", "from the first pitch to IPO"].map((item,index)=>
        <p className='text-lg font-light tracking-tight leading-none '>{item}</p> )}

        <div className='flex items-center gap-2'>
            <div className='uppercase px-4 py-2 border-2 rounded-full border-zinc-600'>Start the project</div>
            <div className='px-3 py-3 rounded-full border-2 border-zinc-600'>
               <span className="rotate-[45deg]">
                <FaArrowUpLong className='rotate-[45deg]' />
               </span>
            </div>
        </div>


    </div>
            
        

    </div>
  )
}

export default LandingPage