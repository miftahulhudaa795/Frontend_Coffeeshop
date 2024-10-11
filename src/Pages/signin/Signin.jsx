import React, { useEffect, useState } from "react";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../../components/Footer";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    setIsLoading(true);
    
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/auth/login`, {
        email,
        password,
      });
      console.log({ response });
      if (response.status === 200 ) {
        localStorage.setItem('token', response.data?.token)
      }
      if (response.status === 200) {
        Swal.fire({
          title: "Success",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      Swal.fire(error?.response?.data?.msg);
    }
    setIsLoading(false);
  };
  const [isLogin, setIsLogin] = useState(false)
    // akan dieksekusi ketika website pertama kali dimuat
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogin(true)
        }
    }, [])

    useEffect(()=>{
      isLogin && navigate('/')
    }, [isLogin])

  return (
    <>
      <div className="container1">
        <div className="images">
          <img className="img-login" src="/images/images-login.png" alt="" />
        </div>
        <div className="form">
          <div className="top">
            <div className="logo">
              <img src="/images/logo-coffe.svg" alt="logo-coffe" />
              <span className="cursor-pointer" onClick={()=>{
                navigate('/')
            }}>Coffe Shop</span>
            </div>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="px-8 py-2 items-center justify-center font-bold text-orange-950 bg-amber-400 hover:bg-orange-950 hover:text-amber-400 shadow-md rounded-3xl">
              Sign Up
            </button>
          </div>
          <h2 className="font-bold text-2xl mb-10">Login</h2>

          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-y-24">
              <div className="form-input">
                <label className="font-bold" for="">
                  Email Address :
                </label>
                <input 
                  className="input-signin"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-input">
                <label className="font-bold" for="">
                  Password :
                </label>
                <input
                  className="input-signin"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div onClick={() => {
              navigate('/forgot-password')
            }} className="flex text-left font-bold px-2 py-20 cursor-pointer ml-24 hover:underline">
              Forgot Password?
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
              <div
                onClick={login}
                className="btn-login h-[75px]">
                {isLoading ? "Loading..." : "Login"}
              </div>
              <div className="btn-google-signin">
                <img src="/images/icon-google.svg" alt="icon-google" />
                <span className="font-bold">Login With Google</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        <div className="relative flex flex-row justify-around items-center bg-white shadow-md rounded-2xl w-[70%] h-[225px] left-[180px] top-[-100px]">
          <div className="flex flex-col text-left justify-center px-10">
            <h1 className="font-bold text-4xl">
              Get your member <br /> card now!
            </h1>
            <p>Let's join with our member and enjoy the deals.</p>
          </div>
          <div>
           <button className="w-[250px] h-[60px] rounded-[10px] bg-[#FFBA33] font-bold">Create Now</button>
          </div>
        </div>

      <Footer/>
    </>
  );
};

export default Signin;
