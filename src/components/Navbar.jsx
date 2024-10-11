import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate= useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    const [showProfil, setShowProfil] = useState(false)
    // akan dieksekusi ketika website pertama kali dimuat
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogin(true)
        }
    }, [])

    const token = localStorage.getItem(`token`);
    const [profile, setProfile] = useState({});
    const getProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(response?.data?.dataUser);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getProfile();
    });
  return (
    
    <div className='w-full flex items-center justify-between px-20 py-8 border-b-2'>
        <div className='flex items-center justify-center gap-2'>
        <img src="/images/logo-coffe.svg" alt="Logo Coffee" />
        <div className="logo font-bold text-lg">Coffeeshop</div>
        </div>
        <div className="flex items-center justify-center gap-x-10 list-none">
            <li className='cursor-pointer hover:font-bold hover:text-yellow-950' onClick={()=>{
                navigate('/')
            }}>Home</li>
            <li className='cursor-pointer hover:font-bold hover:text-yellow-950' onClick={()=>{
                navigate('/Products')
            }}>Product</li>
            <li className='cursor-pointer hover:font-bold hover:text-yellow-950' onClick={()=>{
              navigate('/cart')
            }}>Your Cart</li>
            <li className='cursor-pointer hover:font-bold hover:text-yellow-950' onClick={()=>{
              navigate('/history')
            }}>History</li>
        </div>
        {
            isLogin ?
              <div className="flex flex-row gap-8">
                <img src="/images/search.svg" alt="" />
                <img src="/images/chat.svg" alt="" />
                <div onClick={()=> {
                    setShowProfil(!showProfil)
                }} className='h-10 w-10 relative bg-yellow-500 rounded-full cursor-pointer'>
                    <img className='rounded-full' src={profile?.image || ""} alt="" />
            
                    {
                        showProfil &&
                        <div className="absolute flex flex-col gap-4 items-start justify-start bg-white shadow-md -left-16 top-6 p-4 rounded-md z-50">
                            <Link className='text-xs' to={'/profil'}>Profile</Link>
                            <div onClick={()=>{
                                localStorage.removeItem('token')
                                window.location.reload()
                            }} className="text-xs">Logout</div>
                        </div>
                    }
                </div>
              </div> :
                <div className="authentikasi flex items-center gap-x-4">
                    <button onClick={()=> {
                        navigate('/signin')
                    }} className='px-8 py-2 items-center justify-center font-bold text-orange-950 shadow-md rounded-3xl hover:bg-amber-400'>Sign In</button>
                    <div onClick={()=> {
                        navigate('/signup')
                    }} className='cursor-pointer px-8 py-2 items-center justify-center bg-orange-950 text-white font-bold rounded-3xl hover:bg-amber-400 hover:text-orange-950'>Sign Up</div>
                </div>
        }
    </div>
  )
}

export default Navbar