import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Promo from "../../components/Promo";
import CartProduct from "../../components/CartProduct";


const Products = () => {
  const [product, setProduct] = useState([])
  const [page, setPage] =useState(1)

  const getProduct = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST}/product?orderBy=id&sortBy=DESC&limit=100&page=${page}`)
      console.log({response});
      setProduct(response.data?.data)
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
      <div className="w-full flex items-start justify-between">
        <Promo/>
        <div className="flex flex-col w-full h-2/3 justify-center items-center gap-10 p-10">
            <ul className="flex  items-center text-md  text-gray-500 gap-20">
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Favorite Product</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Coffee</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Non Coffee</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Foods</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Add-on</li>
            </ul>
          
            <div className="w-3/4 grid grid-cols-4 gap-8">
              {
                product.map((item, index) => {
                  <CartProduct item={item} key={index} />
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
