import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import invertislogo from '../assets/invertislogo.png'
import invertisback from '../assets/bg1.jpg'

const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [user,setUser] = useState({
    username:'',
    password:''
  });
  const [show,setShow] = useState(false)
  const [data,setData] = useState([])
  const navigate = useNavigate();
  useEffect(()=>{
   setUser({
    username:username,
    password:password,
   })
  },[username,password,setUsername,setPassword])

  const handlesubmit = (e) => {
  e.preventDefault();
  setData((prev)=>[...prev,user])
  setShow(true)
  }
  
  useEffect(()=>{
  if(show === true){
    localStorage.setItem('data',JSON.stringify(data))
    setShow(false)
    navigate('/profile')
  }
  },[handlesubmit])

  return (
    <div className='w-full h-screen'>
      <div className='h-20 w-full px-6 py-2 border-b-2 border-red-500'>
        <img className='w-36' src={invertislogo} alt="" />
      </div>
      <div className='w-full hidden lg:block relative h-[89vh] overflow-hidden'>
       <img className='w-full h-full object-cover' src={invertisback} alt="" />
       <div style={{boxShadow:`0px 4px 12px`}} className='absolute top-[20%] right-[7%] bg-white w-[33vw] h-[43vh]' >
       <div className='h-24 bg-[#DB2E2B]  flex justify-center flex-col items-center' style={{boxShadow:"0px 5px 5px 0px #838383"}}>
                <h1 className='text-center text-white text-3xl'>Sign in to your account</h1>
                <p className='text-white font-semibold bg-white w-24 h-[2px] mt-3'>
                </p>
       </div>
       <div className='p-5  space-y-3 w-full'>
               <form onSubmit={handlesubmit} className='space-y-3 w-full' action="">
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='User Name' className='outline-none w-full px-1 py-[3px] block text-zinc-600 font-[15px] border-[1px] border-zinc-400' />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' className='outline-none w-full px-1 py-[3px] text-zinc-600 font-[15px] border-[1px] border-zinc-400' />
                <div className='flex justify-between' >
                <a className='text-blue-400 text-[15px] font-semibold' href="#">Forget Password</a>
                <a className='text-blue-400 text-[15px] font-semibold' href="/register">Alumni Registration</a>
                </div>
                <button type='submit' className='w-full bg-[#0072B9] mt-6 hover:bg-[#DB2E2B] rounded-md flex items-center text-white justify-center py-[6px]' >SIGN IN</button>
               </form>
       </div>
       </div>
       <div className='absolute bottom-0 flex justify-center items-center bg-black h-10 w-full'>
        <p className='text-white text-[14px] font-semibold'>©2021 Invertis University, Invertis Village, Bareilly-Lucknow National Highway, NH-24, Bareilly-243123, Uttar Pradesh.</p>
       </div>
      </div>
      {/* phone ke liye */}
      <div className='w-full block lg:hidden h-full bg-gradient-to-br from-[#cd627b] to-[#2e7eba] ' >
      <div>
      <h1 className='text-center text-white text-3xl pt-20 pb-7'>Sign in to your account</h1>
      </div>
      <div className='px-3' >
      <div style={{boxShadow:`0px 4px 12px`}}  className='p-5  bg-white  space-y-3 w-full'>
               <form onSubmit={handlesubmit} className='space-y-3 w-full' action="">
                <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='User Name' className='outline-none w-full px-1 py-[3px] block text-zinc-600 font-[15px] border-[1px] border-zinc-400' />
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='password' className='outline-none w-full px-1 py-[3px] text-zinc-600 font-[15px] border-[1px] border-zinc-400' />
                <div className='flex justify-between' >
                <a className='text-blue-400 text-[15px] font-semibold' href="#">Forget Password</a>
                <a className='text-blue-400 text-[15px] font-semibold' href="/register">Alumni Registration</a>
                </div>
                <button type='submit' className='w-full bg-[#0072B9] mt-6 hover:bg-[#DB2E2B] rounded-md flex items-center text-white justify-center py-[6px]' >SIGN IN</button>
               </form>
            </div>
      </div>
    </div>
    </div>
  )
}

export default Login
