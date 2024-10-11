import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const register = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_HOST}/auth/register`, {
        email,
        password,
        phoneNumber,
      });
      console.log({ response });
      if (response.status === 201) {
        Swal.fire({
            title: "Success",
            text: "You clicked the button!",
            icon: "success"
          });
        navigate("/signin");
      }
    } catch (error) {
      console.log(error);
      Swal.fire(error?.response?.data?.msg);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="container">
        <div className="images-signup">
          <img className="img-signup" src="/images/images-login.png" alt="" />
        </div>
        
        <div className="form1">
          <div className="top-signup">
            <div className="logo-signup">
              <img src="/images/logo-coffe.svg" alt="logo-coffe" />
              <span>Coffe Shop</span>
            </div>
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="btn-login2">
              Login
            </button>
          </div>
          <h2 className="font-bold text-2xl">Sign Up</h2>
          
          <div className="form-signup">
            <div className="form-input-signup">
              <label className="font-bold" for="">
                Email Address :
              </label>
              <input className="input-signup"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="text"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-input-signup">
              <label className="font-bold" for="">
                Password :
              </label>
              <input className="input-signup"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-input-signup">
              <label className="font-bold" for="">
                Phone Number :
              </label>
              <input className="input-signup"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                type="number"
                placeholder="Enter your phone number"
              />
            </div>

          </div>
          <div className="flex flex-col items-center justify-center gap-4 mt-10">
            <div
              onClick={register}
              className="btn-signup">
              {" "}
              {isLoading ? "Loading..." : "Sign Up"}{" "}
            </div>
            <div className="btn-google-signup">
              <img src="/images/icon-google.svg" alt="icon-google" />
              Login With Google
            </div>
          </div>

        </div>
      </div>

      <div className="footer">
        <div className="member">
          <div className="flex flex-col text-left justify-center px-10">
            <h1 className="font-bold text-4xl">Get your member <br/> card now!</h1>
            <p>Let's join with our member and enjoy the deals.</p>
          </div>
          <button className="btn-createnow hover:bg-orange-950 hover:text-amber-400">
            Create Now
          </button>
        </div>
        <div className="footer-bawah">
          <div className="row">
            <div className="flex flex-col gap-4">
              <div className="logo-coffe">
                <img src="/images/logo-coffe.svg" alt="logo" />
                <span>Coffe Shop</span>
              </div>
              <div className="flex flex-col static gap-4">
                <p className="text-left">
                  Coffee Shop is a store that sells some good <br /> meals, and
                  especially coffee. We providebr <br /> high quality beans
                </p>
                <div className="flex flex-row static">
                  <img
                    className="logo-sosmed"
                    src="/images/Facebook.png"
                    alt="Facebook"
                  />
                  <img
                    className="logo-sosmed"
                    src="/images/Twitter.png"
                    alt="Twiter"
                  />
                  <img
                    className="logo-sosmed"
                    src="/images/Instagram.png"
                    alt="Instagram"
                  />
                </div>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-col">
                <h4>Product</h4>
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Countries</li>
                <li>Blog</li>
              </div>
              <div className="footer-col">
                <h4>Engage</h4>
                <li>Coffe Shop ?</li>
                <li>FAQ</li>
                <li>About Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
