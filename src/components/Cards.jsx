import React from 'react'

function Cards() {

    const cards = [
        {
            image: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg",
            text: "Strategy For Success"
        },
        {
            image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg", 
            text: "Design With Purpose"
        },
        {
            image: "https://ochi.design/wp-content/uploads/2022/04/logo003.png",
            text: "Create Amazing Results"
        }
    ]
  return (
    <div className='flex p-20 gap-10 bg-zinc-100'>
        {cards.map((card, index) => (
           
            <div key={index} className={` relative flex flex-col items-center justify-center rounded-2xl w-1/4 h-[50vh] bg-[#212121] ${index===0 && "w-[50vw]"}`}>
                <img className='bg-transparent' src={card.image} alt={card.text} />
                <h3 className='absolute bottom-5 left-5 border-2 border-zinc-300 px-3 py-2 rounded-full ' >{card.text}</h3>
            </div>
        ))}
    </div>
  )
}

export default Cards