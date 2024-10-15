import React from 'react'
import { formatCurrency } from '../helpers/formatter';
import { Link } from 'react-router-dom';

const CartProduct = ({item}) => {
  return (
    <Link to={`/product/${item?.id}`}>
        <div className='p-4 shadow-xl bg-white rounded-md flex items-center justify-center flex-col gap-y-4 cursor-pointer hover:scale-105 transition-all ease-out'>
            <img src={item?.image} alt={item?.name} className='h-30 w-30 rounded-full' />
            <div className="text-md">{item?.name}</div>
            <div className="text-md font-bold text-lg text-orange-900">{formatCurrency(item?.price)}</div>
        </div>
    </Link>
  )
}

export default CartProduct