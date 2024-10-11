import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <div className="">
        <div className="w-full flex absolute justify-center">
          <img src="/images/background.png" alt="" />
        </div>

        <div className="flex flex-row justify-between p-8">
        <div className="">
            <div className="flex text-white flex-col text-left gap-y-4 justify-center relative px-12 py-24">
                <h1 className="font-bold text-5xl">
                  Start Your Day with <br /> Coffee and Good Meals
                </h1>
                <p>
                  We provide high quality beans, good taste, and healthy <br />
                  meals made by love just for you. Start your day with us <br /> for
                  a bigger smile!
                </p>
                <button className="btn-get rounded-2xl py-4">
                  <span>Get Started</span>
                </button>
            </div>
            </div>
            <div className="flex relative w-[250px] h-[60px] justify-center bg-white rounded-full">
              <div className="flex relative flex-row items-center justify-end p-4">
                <img
                  className="flex w-[20px] h-[20px] "
                  src="/images/search.svg"
                  alt="search.svg"
                />
                <input
                  className="w-full rounded-3xl p-4 outline-none"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            
        </div>
      </div>
      <div className="box">
        <div className="isi-box">
          <div className="icon-left">
            <img src="/images/icon-user.svg" alt="" />
            <div className="staff">
              <h3 className="text-xl font-bold">90+</h3>
              <span>Staff</span>
            </div>
            <div className="garis">
              <img src="/images/Vector 14.svg" alt="" />
            </div>
          </div>
          <div className="icon-center">
            <img src="/images/icon-location.svg" alt="" />
            <div className="stores">
              <h3 className="text-xl font-bold">30+</h3>
              <span>Stores</span>
            </div>
            <div className="garis">
              <img src="/images/Vector 14.svg" alt="" />
            </div>
          </div>
          <div className="icon-right">
            <div className="icon-love">
              <img className="bulat" src="/images/bulat.svg" alt="" />
              <img className="love" src="/images/icon-love.svg" alt="" />
            </div>
            <div className="customers">
              <h3 className="text-xl font-bold">800+</h3>
              <span>Customers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Provider */}
      <div className="container-provide">
        <div className="img-provide">
          <img src="/images/image.png" alt="" />
        </div>
        <div className="text-provide text-left">
          <h1 className="font-bold text-3xl">
            We Provide Good Coffee <br /> and Healthy Meals
          </h1>
          <p>
            You can explore the menu that we provide with fun and <br /> have
            their own taste and make your day better.
          </p>
          
          <div className="flex flex-col text-left justify-center gap-8">
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
      <div className="container-people">
        <div className="content-people">
          <h1 className="font-bold text-3xl">Here is People’s Favorite</h1>
          <p>
            Let’s choose and have a bit taste of poeple’s favorite. It might be
            yours too!
          </p>
        </div>
        <div className="box-people">
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
        <div className="partner">
          <div className="content-partner">
            <div className="logo-partner">
              <img src="/images/netfilx.svg" alt="netfilx" />
              <img src="/images/reddit.svg" alt="reddit" />
              <img src="/images/amazon.svg" alt="amazon" />
              <img src="/images/discord.svg" alt="discord" />
              <img src="/images/spotify.svg" alt="spotify" />
            </div>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="container-slider">
        <div className="judul-slider">
          <h1 className="font-bold text-3xl">
            Loved by Thousands of <br /> Happy Customer
          </h1>
          <p>
            These are the stories of our customers who have visited us with
            great <br /> pleasure.
          </p>
        </div>

        <div className="box-slider">
          <div className="box-slider-1">
            <div className="nama-1">
              <img src="/images/Viezh Robert.png" alt="" />
              <div className="nama-viezh-robert">
                <div className="robert">
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
                <div className="robert">
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
                <div className="robert2">
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
      <div className="promo">
        <div className="content-promo">
          <div className="text-promo">
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
