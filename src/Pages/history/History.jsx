import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { formatCurrency } from '../../helpers/formatter';

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
    setHistory(storedHistory);
  }, []);

  return (
    <div>
        <Navbar/>
        <div className='bg-[#EFEEEE]'>
          <div className="flex flex-col items-center py-24 gap-8">
            <div className="flex flex-col items-center">
              <label className='drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-neutral-600 text-white text-3xl font-bold'>Let’s see what you have bought!</label>
              <label className='drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-neutral-600 text-white text-xl font-bold'>Select item to delete</label>
            </div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-6 p-4">
              {history.length > 0 ? (
                history.map((item, index) => (
                <div key={index} className="w-full flex  bg-white rounded-xl gap-4 py-4 px-6">
                  <img className='rounded-full w-[75px] h-[75px] bg-orange-500 ' src={item?.product?.image} alt={item?.product?.name} />
                  <div className="flex flex-col items-start">
                    <label className='font-bold text-xl'>{item?.product?.name}</label>
                    <label className=''>{formatCurrency(item?.product?.price)}</label>
                    <div className="bg-red-500 w-full flex justify-between">
                      <div className=''>{item?.status}</div>
                      <div className="flex w-[24px] h-[24px] border-2 rounded-md border-orange-950 bg-[#EFEEEE] "></div>
                    </div>
                  </div>
                </div>
                ))
              ) : (
                <p>No transaction history available.</p>
              )}

            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default History