import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navitem from './Navitem'

const Navbar = () => {
    const navigate= useNavigate()
    const [isLogin, setIsLogin] = useState(false)
    const [showProfil, setShowProfil] = useState(false)
    const [toggleNavbar, setToggleNavbar] = useState(false)
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
        const response = await axios.get(`${process.env.REACT_APP_HOST}/user/profile`, {
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

    const dataNav = [
      {
        name : "Home",
        route : "/"
      },
      {
        name : "Products",
        route : "/products"
      },
      {
        name : "You Cart",
        route : "/cart"
      },
      {
        name : "History",
        route : "/history"
      }
    ]

  return (
    <>
    <div className='flex items-center justify-between mx-auto px-4 sm:px-16 py-6 border-b-2'>
        <div className='flex items-center justify-center gap-2 order-1 sm:order-2 lg:order-1'>
        <img src="/images/logo-coffe.svg" alt="Logo Coffee" />
        <div className="logo font-bold text-lg">Coffeeshop</div>
        </div>
        <div className="lg:flex items-center justify-center gap-x-10 list-none hidden lg:order-2">
          {
            dataNav.map((item, index,) => {
              return (
                <Navitem key={index} to={item.route} item={item.route} name={item.name}/>
              )
            }) 
          } 
        
        </div>
        {
            isLogin ?
              <div className="flex flex-row gap-4 lg:order-3">
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
                <button onClick={() => setToggleNavbar(toggleNavbar ? false : true)} className='lg:hidden block'>
                  <img className='h-8 inline' src= {toggleNavbar ?  "/images/xmark-solid.svg": "/images/bars-solid.svg"} alt=''/>
                </button>
              </div> :
                <div className="authentikasi items-center gap-x-4 hidden sm:block sm:flex order-2 sm:order-3 lg:order-2">
                    <button onClick={()=> {
                        navigate('/signin')
                    }} className='px-8 py-2 items-center justify-center font-bold text-orange-950 shadow-md rounded-3xl hover:bg-amber-400'>Sign In</button>
                    <div onClick={()=> {
                        navigate('/signup')
                    }} className='cursor-pointer px-8 py-2 items-center justify-center bg-orange-950 text-white font-bold rounded-3xl hover:bg-amber-400 hover:text-orange-950'>Sign Up</div>
                </div>
                
        }
        <button onClick={() => setToggleNavbar(toggleNavbar ? false : true)} className='lg:hidden block order-3 sm:order-1'>
          <img className='h-8 inline' src= {toggleNavbar ?  "/images/xmark-solid.svg": "/images/bars-solid.svg"} alt='' />
        </button>
    </div>
    <div className= {toggleNavbar ? "block" : "hidden"} >
      <div className="flex flex-col items-start justify-center gap-y-4 list-none bg-white px-6 sm:px-16 py-4">
          {
            dataNav.map((item, index,) => {
              return (
                <Navitem  key={index} to={item.route} item={item.route} name={item.name}/>
              )
            }) 
          } 
        <div className="authentikasi items-center gap-x-4 flex w-full sm:hidden">
                    <button onClick={()=> {
                        navigate('/signin')
                    }} className='w-full px-8 py-2 items-center justify-center font-bold text-orange-950 shadow-md rounded-3xl hover:bg-amber-400'>Sign In</button>
                    <div onClick={()=> {
                        navigate('/signup')
                    }} className='w-full cursor-pointer px-8 py-2 items-center justify-center bg-orange-950 text-white font-bold rounded-3xl hover:bg-amber-400 hover:text-orange-950'>Sign Up</div>
                </div>
        </div>
    </div>
    </>
  )
}

export default Navbar