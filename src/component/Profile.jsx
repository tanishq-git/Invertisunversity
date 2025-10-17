import React, { useState } from 'react'

const Profile = () => {
    const [data,setData] = useState(JSON.parse(localStorage.getItem('data')))
    console.log(data)

    const handledelete = () => {
        localStorage.removeItem('data')
    }
  return (
    <div className='w-full px-3 py-2 text-white h-screen bg-black' >
      {
        data.map((item,index)=>(
            item.password.length > 0
           &&
           <>
           <div className='px-5 w-full   h-full' key={index} >
                <div className='w-full mb-3 flex text-black h-16 bg-white'>
                      <div className='w-2/3 flex justify-center border-black border-r-2  items-center text-xl' >
                        <h1 className=''>{item.username}</h1>
                      </div>
                      <div className='w-2/3 flex justify-center border-black border-r-2 items-center text-xl' >
                        {item.password}
                      </div>
                      <div className='w-1/3 text-2xl flex justify-center items-center bg-red-400' >
                      <i onClick={()=>{
                        handledelete()
                      }} class="ri-close-circle-fill"></i>
                      </div>
                </div>
                <div className='w-full mx-auto h-[80vh] overflow-hidden' >
                  <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1690024441992-9e75b5df923a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
           </div>
           </> 
        ))
      }
    </div>
  )
}

export default Profile
