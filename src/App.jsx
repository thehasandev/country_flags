import React, { useEffect, useState } from 'react'

import "./App.css"

import axios from 'axios'


function App() {
  let [countryData,setCountryData] =useState([])
  let [searchData,setSearchData] =useState([])
  
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

  let handleChange=(e)=>{
   let filter = countryData.filter((item)=>{
    return item.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    })

    setSearchData(filter);
  }

  return (
    <div className='max-w-container mx-auto '>
      <div className='w-96 mx-auto text-center mb-8 pt-5 pb-8 px-5 bg-white'>
        <h1 className='font-bold font-roboto text-4xl  text-[#111111]'>Country App</h1>
        <div className='flex gap-x-2 justify-center items-center py-4'>
          <p className='font-roboto font-normal text-base text-[#111111]'>Search Country :</p>
          <input onChange={handleChange} className='px-4 py-2 border border-solid border-black/30 outline-0' placeholder='Search Country...' type="text" />
        </div>
      </div>

        <div className='flex gap-10 flex-wrap'>

          {
            searchData.length >0 ?
            
            searchData.map((item,index)=>{
              
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
                      :
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