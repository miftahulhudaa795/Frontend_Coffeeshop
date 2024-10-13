import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Promo from "../../components/Promo";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const navigate = useNavigate()
  const [product, setProduct] = useState([])
  const getProduct = async () => {
    
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST}/product?orderBy=id&sortBy=DESC&limit=100&page=1`)
      console.log(response);
      setProduct(response?.data?.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getProduct()
  }, [])

  return (
    <div>
      <Navbar/>
      <div className="w-full flex flex-row">
        <Promo/>

        <div className="flex flex-col w-full h-2/3 justify-center items-center gap-10 p-10">
            <ul className="flex  items-center text-md  text-gray-500 gap-20">
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Favorite Product</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Coffee</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Non Coffee</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Foods</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Add-on</li>
            </ul>
            <div className="grid grid-cols-4 gap-8">
            {
              product.map((item)=>{
                return (
                  <div onClick={()=>{navigate('/details')}} className="p-4 border shadow-lg shadow-gray-400 flex flex-col items-center justify-between py-8 gap-6 rounded-3xl cursor-pointer hover:border-2 hover:border-orange-900">
                    <img className="rounded-full shadow-lg shadow-gray-400 w-3/4" src={item.image} alt="product" />
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="font-bold"> IDR {item.price} </div>
                      <div>Stock : {item.stock}</div>
                    </div>
                  </div>
                )
              })
            }
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
