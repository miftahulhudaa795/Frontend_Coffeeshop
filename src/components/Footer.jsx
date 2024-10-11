import React from 'react'

const Footer = () => {
    
  return (
    <div>
      <div className=" bg-gray-50">
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
  )
}

export default Footer