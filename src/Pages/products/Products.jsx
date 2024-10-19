import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import axios from "axios";
import Promo from "../../components/Promo";
import CartProduct from "../../components/CartProduct";


const Products = () => {
  const [product, setProduct] = useState([])
  const [page, setPage] =useState(1)
  const [limit, setLimit] = useState(12)

  const getProduct = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST}/product?orderBy=id&sortBy=DESC&limit=${limit}&page=${page}`)
      console.log({response});
      setProduct(response.data?.data)
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(()=>{
    getProduct()
  }, [page])

  return (
    <div>
      <Navbar/>
      <div className="w-full flex ">
        <Promo/>
        <div className="flex flex-col lg:w-[1440px] lg:h-[1240px] justify-start items-center gap-10 p-10">
            <ul className="flex  items-center text-md  text-gray-500 gap-20">
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Favorite Product</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Coffee</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Non Coffee</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Foods</li>
                <li className="hover:text-orange-950 hover:font-bold hover:text-lg cursor-pointer">Add-on</li>
            </ul>
            <div className="w-full flex flex-col gap-12">
              <div className="grid grid-cols-4 gap-4">
                {
                  product.map((item, index) => {
                    return <CartProduct item={item} key={index} />
                  })
                }
              </div>
              <div className="flex items-center justify-between px-8">
                <button disabled={page === 1} onClick={()=>{page > 1 && setPage(page - 1)}}
                className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-xl px-6 py-2 shadow-lg"> Prev </button>
                <button onClick={()=> setPage(page + 1)} 
                className="border-2 border-orange-500 hover:bg-orange-500 hover:text-white font-semibold rounded-xl px-6 py-2 shadow-lg">Next</button>
              </div>
            </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
