import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate, setRotate] = useState(0)
    const [rotate2, setRotate2] = useState(0)

    useEffect(()=> {

        


        let eye1 = document.querySelector('.eye1')
        let eye2 = document.querySelector('.eye2')

        window.addEventListener('mousemove', (e)=> {

           let mousex = e.clientX
           let mousey = e.clientY
           console.log(mousex, mousey)

           let delta1X = mousex - 516
           let delta1Y = mousey - 407

           console.log(delta1X, delta1Y)

           let angle1 = Math.atan2(delta1Y, delta1X)
           let rotation1 = angle1 * (180/Math.PI) 

           setRotate(rotation1-180)



          

           let delta2X = mousex - 1016
           let delta2Y = mousey - 407

           console.log(delta1X, delta1Y)

           let angle2 = Math.atan2(delta2Y, delta2X)
           let rotation2 = angle2 * (180/Math.PI) 

           setRotate2(rotation2-180)


        })
    },[])

    
  return (
    <div className='w-full h-screen '>
        <div data-scroll data-scroll-speed='-.1' className=' relative h-full w-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-10 '>
            <div className='w-[15vw] h-[15vw]  rounded-full flex items-center justify-center  bg-zinc-100 '>
                <div className='w-2/3 h-2/3 rounded-full relative bg-black'>

                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=' w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                    <div className='w-10 h-10 rounded-full  bg-white'></div>
                </div>


                </div>
            </div>
            <div className='w-[15vw] h-[15vw]  rounded-full flex items-center justify-center  bg-zinc-100 '>
                <div className='w-2/3 h-2/3 rounded-full relative bg-black'>

                <div style={{transform:`translate(-50%,-50%) rotate(${rotate2}deg)`}} className=' w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                    <div className='w-10 h-10 rounded-full  bg-white'></div>
                </div>


                </div>
            </div>
          </div>
        
        </div>
        
    </div>
      
  )
}

export default Eyes