import React, { useEffect, useState } from 'react'

import "./App.css"

import axios from 'axios'


function App() {
  let [countryData,setCountryData] =useState([])
  
  useEffect(()=>{

 let country =async()=>{
  let data = await axios.get("https://restcountries.com/v3.1/all")
    setCountryData(data.data);
 }
 country()
  },[])


  let handleClick =(item,id)=>{
   let arr =[...countryData]
    arr.splice(id,1)
    setCountryData(arr)
  
  }

  return (
    <div className='max-w-container mx-auto '>
        <h1 className='font-bold font-roboto text-5xl pt-5 pb-8 text-[#111111] text-center'>Country App</h1>
        <div className='flex gap-10 flex-wrap'>

          {
        
            countryData.map((item,index)=>{
              
             
    return <div key={index} className='w-[300px] scale-100 hover:scale-105 duration-500  bg-white shadow-xl rounded-[4px]'>
              <div>
                <img src={item.flags.png} alt="" className='h-[200px] w-full rounded-t-[4px]' />
              </div>
              <div className='p-5'>
                <h1 className='font-roboto font-bold text-xl text-[#111111] text-center mb-4'>{item.name.common}</h1>
                <p className='font-roboto font-normal text-base mb-2 text-[#111111]'>Capital : {item.capital}</p>
                <p className='font-roboto font-normal text-base mb-2 text-[#111111]'>Area : {item.area}</p>
                <p className='font-roboto font-normal text-base mb-2 text-[#111111]'>Population : {item.population}  </p>
                <p className='font-roboto font-normal text-base mb-4 text-[#111111]'>Region : {item.region}</p>
                <div className='flex justify-center'>
                  <button onClick={()=>{handleClick(item,index)}} className='font-roboto font-medium text-lg text-white bg-red-500 px-6 py-2 rounded-[5px]'>Delete Country</button>
                </div>
              </div>
           </div> 
              
            })
          }

           



        </div>
    </div>
  )
}

export default App