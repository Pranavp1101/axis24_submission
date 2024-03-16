import React from 'react'

function Directorsdesk() {
  return (
    <div className='bg-black'>
        <div className='flex flex-col md:flex-row justify-around items-center py-8 md:py-16'>
            <div className='text-white bg-slate-800 mt-2 md:py-8 py-3 px-10 md:px-16 rounded-2xl my-2'>
                <h1 className='md:text-lg md:-ml-7 underline underline-offset-4 md:underline-offset-8 decoration-blue-500'>Events</h1>
                <h2 className='text-xl md:text-8xl text-blue-500 md:-ml-7'>40+</h2>
            </div>
            <div className='text-white bg-slate-800 mt-2 md:py-8 py-3 px-10 md:px-16 rounded-2xl my-2'>
                <h1 className='md:text-lg md:-ml-7 underline underline-offset-4 md:underline-offset-8 decoration-blue-500 '>Colleges</h1>
                <h2 className='text-xl md:text-8xl md:-ml-7 text-blue-500'>150+</h2>
            </div>
            <div className='text-white bg-slate-800 mt-2 md:py-8 py-3 px-10 md:px-16 rounded-2xl my-2'>
                <h1 className='md:text-lg md:-ml-7 underline underline-offset-4 md:underline-offset-8 decoration-blue-500'>Footfall</h1>
                <h2 className='text-xl md:text-8xl md:-ml-7 text-blue-500'>20000+</h2>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-around p-8 md:px-20 gap-16'>
            <img src="https://axisvnit.in/images/padolesir.jpg" alt="" width={650} height='auto' />
            <div className='text-white md:m-8'>
                <h1 className='text-3xl md:text-8xl mb-2 md:mb-8'>Director's Desk</h1>
                <p className='text-wrap md:text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis enim, quos iure exercitationem aliquam amet dolor aut adipisci sed alias iste quisquam possimus, eaque a odio est repellat odit quidem?Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <hr className='text-zinc-700 py-2' />
    </div>
  )
}

export default Directorsdesk
