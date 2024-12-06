import React from 'react'

function About() {
  return (
    <div data-scroll  data-scroll-speed="0" className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black font-[Neue]' >
        <h1 className='text-[3vw] tracking-tight font-medium '>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

        <div className='w-full border-t-[1px] border-[#738146] mt-10 flex gap-5 pt-20'>
            <div className='w-1/2  '>
             <h1 className='text-[2vw] font-medium'>Our Approach</h1>
            <button className=' flex items-center gap-5 bg-black px-10 py-6 rounded-full text-white mt-2'>Read More
                <div className='w-2 h-2 rounded-full bg-white'></div>
            </button>

            </div>

            <div className='w-1/2 h-[60vh] bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")] rounded-3xl'></div>


           
        </div>

    </div>
  )
}

export default About