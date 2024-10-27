import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="mx-auto">
        <div className="w-full flex absolute justify-center mx-auto object-cover">
          <img className="object-conver w-full h-72 lg:h-full" src="/images/background.png" alt="" />
        </div>

        <div className="flex flex-row justify-between p-8">
        <div className="">
            <div className="flex text-white flex-col text-left gap-y-4 justify-center relative lg:px-12 lg:py-24">
                <h1 className="font-bold lg:text-5xl">
                  Start Your Day with <br /> Coffee and Good Meals
                </h1>
                <p className="text-xs lg:text-lg">
                  We provide high quality beans, good taste, and healthy <br />
                  meals made by love just for you. Start your day with us <br /> for
                  a bigger smile!
                </p>
                <button className="bg-orange-500 w-full p-2 rounded-3xl lg:py-8 lg:w-60">
                  <span>Get Started</span>
                </button>
            </div>
            </div>
            <div className="flex relative w-32 h-8 lg:w-[250px] lg:h-[60px] justify-center bg-white lg:rounded-full rounded-3xl">
              <div className="flex relative flex-row items-center justify-end py-4 px-2 w-full gap-2">
                <img
                  className="lg:flex lg:w-[20px] lg:h-[20px] h-4 inline"
                  src="/images/search.svg"
                  alt="search.svg"
                />
                <input
                  className="w-full rounded-3xl lg:p-4 outline-none py-1"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            
        </div>
      </div>
      <div className="bg-white w-[80%] lg:h-40 relative shadow-lg py-4 rounded-xl ml-[9%] items-center mt-4">
        <div className="flex h-full justify-between px-4 lg:px-16 items-center">
          <div className="flex gap-2 items-center">
            <img className="h-12 inline lg:h-20" src="/images/icon-user.svg" alt="" />
            <div className="staff">
              <h3 className="text-sm lg:text-xl font-bold">90+</h3>
              <span className="text-sm lg:text-lg">Staff</span>
            </div>
          </div>
          <div className="border-r-2"></div>
          <div className="flex gap-2">
            <img className="h-12 inline" src="/images/icon-location.svg" alt="" />
            <div className="stores items-start">
              <h3 className="text-sm font-bold">30+</h3>
              <span className="text-sm">Stores</span>
            </div>
          </div>
          <div className="border-r-2"> </div>
          <div className="flex gap-2">
            <div className="flex items-center justify-center bg-yellow-500 h-12 w-12 rounded-full">
              <img className="love" src="/images/icon-love.svg" alt="" />
            </div>
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-bold">800+</h3>
              <span className="text-sm">Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Provider */}
      <div className="flex flex-col lg:flex-row items-center gap-4 py-8 px-16 ">
        <div className="w-full">
          <img src="/images/image.png" alt="" />
        </div>
        <div className="flex flex-col text-left gap-4">
          <h1 className="font-bold text-2xl">
            We Provide Good Coffee and Healthy Meals
          </h1>
          <p className="text-sm">
            You can explore the menu that we provide with fun and have
            their own taste and make your day better.
          </p>
          
          <div className="flex flex-col text-left text-sm justify-center gap-4">
            <div className="list">
              <img src="/images/Ceklis.svg" alt="" />
              <li>High quality beans</li>
            </div>
            <div className="list">
              <img src="/images/Ceklis.svg" alt="" />
              <li>Healthy meals, you can request the ingredients</li>
            </div>
            <div className="list">
              <img src="/images/Ceklis.svg" alt="" />
              <li>Chat with our staff to get better experience for ordering</li>
            </div>
            <div className="list">
              <img src="/images/Ceklis.svg" alt="" />
              <li>Free member card with a minimum purchase of IDR 200.000.</li>
            </div>
          </div>
        </div>
      </div>

      {/* Here is People’s Favorite */}
      <div className="bg-gray-100 flex flex-col py-8 px-16 gap-4">
        <div className="">
          <h1 className="font-bold text-2xl">Here is People’s Favorite</h1>
          <p className="text-sm">
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
        </div>
        <div className=" flex flex-col lg:flex-row justify-between p-4 gap-4">
          <div className="box-1">
            <img src="/images/Hazelnut Latte.png" alt="Hazelnut Latte" />
            <h3 className="font-bold">Hazelnut Latte</h3>
            <ul className="list-Hazelnut text-left">
              <li>Hazelnut Syrup</li>
              <li>Wanilla Whipped Cream</li>
              <li>Ice / Hot</li>
              <li>Sliced Banana on Top</li>
            </ul>
            <div className="idr">
              <h2 className="font-bold">IDR 25.000</h2>
              <button className="btn-ordernow">Order Now</button>
            </div>
          </div>
          <div className="box-2">
            <img src="/images/Pinky Promise.png" alt="Pinky Promise" />
            <h3 className="font-bold">Pinky Promise</h3>
            <ul className="list-Pinky text-left">
              <li>1 Shot of Coffee</li>
              <li>Vanilla Whipped Cream</li>
              <li>Chocolate Biscuits</li>
              <li>Strawberry Syrup</li>
              <li>Sliced strawberry on Top</li>
            </ul>
            <div className="idr-pinky">
              <h2 className="font-bold">IDR 30.000</h2>
              <button className="btn-select1">Select</button>
            </div>
          </div>
          <div className="box-3">
            <img src="/images/Chicken Wings.png" alt="Chicken Wings" />
            <h3 className="font-bold">Chicken Wings</h3>
            <ul className="list-chicken text-left">
              <li>Wings</li>
              <li>Drum Sticks</li>
              <li>Mayonaise and Lemon</li>
              <li>Hot Fried</li>
              <li>Secret Recipe</li>
              <li>Buy 1 Get 1 only for Dine in</li>
            </ul>
            <div className="idr-chicken">
              <h2 className="font-bold">IDR 40.000</h2>
              <button className="btn-chicken">Select</button>
            </div>
          </div>
        </div>
      </div>

      {/* Visit Our Store */}
      <div className="visit">
        <div className="content-visit">
          <div className="judul-content">
            <h1 className="font-bold text-3xl">
              Visit Our Store in the <br /> Spot on the Map Below
            </h1>
            <p>
              See our store in every city on the spot and spen your good day
              there. <br /> See you soon!
            </p>
          </div>
          <div className="peta">
            <img src="/images/Huge Global.png" alt="" />
          </div>
        </div>
      </div>

      {/* Partner */}
      <div className="container-partner">
        <h1 className="font-bold text-3xl">Our Partner</h1>
        <div className="lg:partner items-center">
          <div className=";lg:content-partner justify-between items-center">
            <div className="lg:logo-partner grid grid-cols-2 items-center justify-center p-8 gap-x-8 gap-y-4">
              <div className="w-full items-center flex">
                <img className="" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netfilx" />
              </div>
              <div className="w-full justify-center">
                <img className=" " src="https://cdn.worldvectorlogo.com/logos/reddit-1.svg" alt="reddit" />
              </div>
              <div className="w-full">
                <img className="" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="amazon" />
              </div>
              <div className="w-full">
                <img className="" src="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg" alt="discord" />
              </div>
              <div className="w-full">
                <img className="" src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="lg:container-slider">
        <div className="judul-slider">
          <h1 className="font-bold text-3xl">
            Loved by Thousands of <br /> Happy Customer
          </h1>
          <p>
            These are the stories of our customers who have visited us with
            great <br /> pleasure.
          </p>
        </div>

        <div className="lg:box-slider flex flex-col gap-4 items-center">
          <div className="box-slider-1">
            <div className="nama-1">
              <img src="/images/Viezh Robert.png" alt="" />
              <div className="nama-viezh-robert">
                <div className="robert text-left">
                  <span className="viezh-robert">Viezh Robert</span>
                  <span className="warsaw">Warsaw, Poland</span>
                </div>
                <div className="rating">
                  <img src="/images/Rating.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="coment">
              <p>
                “Wow... I am very happy to spend my whole day here. the Wi-fi is
                good, and the coffee and meals tho. I like it here!! Very
                recommended!
              </p>
            </div>
          </div>
          <div className="box-slider-1">
            <div className="nama-1">
              <img src="/images/Yessica Christy.png" alt="" />
              <div className="nama-viezh-robert">
                <div className="robert text-left">
                  <span className="viezh-robert">Yessica Christy</span>
                  <span className="warsaw">Shanxi, China</span>
                </div>
                <div className="rating">
                  <img src="/images/Rating.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="coment">
              <p>
                “I like it because I like to travel far and still can make my
                day better just by drinking their Hazelnut Latte
              </p>
            </div>
          </div>
          <div className="box-slider-1">
            <div className="nama-1">
              <img src="/images/Kim Young Jou.png" alt="" />
              <div className="nama-viezh-robert">
                <div className="robert2 text-left flex flex-col">
                  <span className="viezh-robert">Kim Young Jou</span>
                  <span className="warsaw">Seoul, South Korea</span>
                </div>
                <div className="rating-3">
                  <span>4.5</span>
                  <img src="/images/star.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="coment">
              <p>
                “This is very unusual for my taste, I haven’t liked coffee
                before but their coffee is the best! and yup, you have to order
                the chicken wings, the best in town!
              </p>
            </div>
          </div>
        </div>
        <div className="navigasi">
          <div className="titik">
            <img src="/images/titik-titik.svg" alt="" />
          </div>
          <div className="panah">
            <img src="/images/left.svg" alt="" />
            <img className="panah-right" src="/images/left.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Promo */}
      <div className="lg:promo-home bg-white w-[78%] ml-[11%] rounded-xl shadow-md mt-32 relative">
        <div className="lg:content-promo">
          <div className="lg:text-promo">
            <h1 className="font-bold text-3xl">
              Check our promo <br /> today!
            </h1>
            <p>Let's see the deals and pick yours!</p>
          </div>
          <div className="btn-promo">
            <button>See Promo</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container-footer">
        <div className="row">
          <div className="footer-left">
            <div className="logo-coffe">
              <img src="/images/logo-coffe.svg" alt="logo" />
              <span>Coffe Shop</span>
            </div>
            <div className="p-icon">
              <div className="text-coffe">
                <p className="text-left">
                  Coffee Shop is a store that sells some good <br /> meals, and
                  especially coffee. We providebr <br /> high quality beans
                </p>
              </div>
              <div className="img-icon">
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
            <div className="copyright text-left">
              <p>©2020CoffeeStore</p>
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-col">
              <div className="judul-list">
                <h4>Product</h4>
              </div>
              <div className="list-footer">
                <li>Download</li>
                <li>Pricing</li>
                <li>Locations</li>
                <li>Countries</li>
                <li>Blog</li>
              </div>
            </div>
            <div className="footer-col">
              <div className="judul-list">
                <h4>Engage</h4>
              </div>
              <div className="list-footer">
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
    </div>
  );
};

export default HomePage;
