import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import axios from 'axios'


const SingleProduct = () => {
    
    // const token = localStorage.getItem('token')
    // const [delivery, setDelivery] = useState<'Dine In'|'Door Delivery'|'Pick Up'>('Dine In')
    // const [isNow, setIsNow] = useState(false)
    // const [size, setSize] = useState<'R'|'L'|'XL'>('R')
    // const delives = [
    //     'Dine in',
    //     'Door Delivery',
    //     'Pick Up'
    // ]
    // const sizes = [
    //     'R',
    //     'L',
    //     'XL'
    // ]

    const [product, setProduct] = useState([])
    const getProduct = async () => {
      
      try {
        const response = await axios.get("http://localhost:5000/product")
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
    <div className="text-black bg-white">
        <Navbar/>
        

    </div>
  )
}

export default SingleProduct