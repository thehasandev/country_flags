import React from 'react'

import one from "./assets/a.jpg"

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold font-roboto text-5xl text-[#111111] text-center'>Country App</h1>
        <div className='flex'>
           <div className='w-96 bg-red-500'>
            <div>
              <img src={one} alt="" className='h-46 w-full' />
            </div>
            
           </div> 
        </div>
    </div>
  )
}

export default App