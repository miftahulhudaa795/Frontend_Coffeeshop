
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { formatCurrency } from '../../helpers/formatter'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'


const Cart = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {cart, removeFromCart} = useContext(CartContext)
    const [paymentMethod, setPaymentMethod] = useState('')

     // Hitung subtotal dengan memperhatikan kuantitas item di keranjang
     const subtotal = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cart]);

    // Pajak 10% dari subtotal
    const taxes = subtotal * 0.1;

    // Biaya pengiriman tetap (misalnya, 10.000 IDR)
    const shipping = 10000;

    // Hitung total keseluruhan
    const total = subtotal + taxes + shipping;


   const getTransactions = async () => {
    setIsLoading(true)

    try {
        const response = await axios.post(`${process.env.REACT_APP_HOST}/transaction?orderBy=createdAt&sortBy=DESC&limit=10&page=1`, {
            method: paymentMethod,
            items: cart,
            subtotal,
            taxes,
            shipping,
            total
        })
        
        if (response?.data?.data) {
            alert('Payment Success')
        } else {
            alert('Payment Failed')
        }
    } catch (err) {
        console.error(err)
    }
    setIsLoading(false)

    }

    useEffect(()=>{
        getTransactions()
    },[])

    const handlePaymentMethod = (method) => {
        setPaymentMethod(method);
    };

    const handleConfirmAndPay = () => {
        if (!paymentMethod) {
            Swal.fire({
                title: "Error",
                text: 'Please select a payment method.',
                icon: "error",
            })
            return;
        }

        // Panggil fungsi untuk melakukan pembayaran
        getTransactions();
    };

  return (
        <div>
        <Navbar/>
        <div className="bg-[#EFEEEE] ">
            <div className=" px-28 py-14 gap-12 justify-start">
                <div className='font-bold text-white text-3xl flex flex-col items-start text-left drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-neutral-600'>Checkout your <br/> item now!</div>
                <div className="grid grid-rows-2 grid-flow-col gap-x-10 gap-y-4 p-4 justify-between">
                    <div className="w-[480px] h-[700px] row-span-4 flex flex-col bg-white rounded-3xl p-4 shadow-md">
                        <div className='flex flex-col items-center  py-12 px-4 gap-24'>
                            <div className="items-center font-bold text-3xl">Order Summary</div>
                            <div className="flex flex-col items-center gap-4">
                                { cart.length === 0 ? (<div className="text-center">Your cart is empty.</div>) : (
                                cart.map((item, index) => (
                                    <div className="flex flex-row items-center justify-center gap-8" key={index}>
                                        <img className='w-[82px] h-[90px] bg-orange-500 rounded-2xl ' src={item?.image} alt={item?.name} />
                                        <label className='text-left'>{item?.name}</label>
                                        <label className='text-left'>{formatCurrency(item?.price)}</label>
                                        <button onClick={() => removeFromCart(item.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md">Hapus</button>
                                    </div>
                                )))}
                                  
                                {/* <div className="flex flex-row items-center justify-center gap-8" key={item?.id}>
                                    <img className='w-[82px] h-[90px] bg-orange-500 rounded-2xl ' src={item?.image} alt={item?.name} />
                                    <label className='text-left' htmlFor="">{item?.name} x {item?.quantity} </label>
                                    <label className='text-left' htmlFor="">{formatCurrency(item?.price)}</label>
                                </div> */}
                                <div className="w-full flex border-b-2"></div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <div className="flex flex-row justify-between gap-52">
                                        <div className=''>SUBTOTAL</div>
                                        <div>{formatCurrency(subtotal)}</div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-52">
                                        <div className=''>TAX & FEES</div>
                                        <div>{formatCurrency(taxes)}</div>
                                    </div>
                                    <div className="w-full flex flex-row justify-between gap-52">
                                        <div className=''>SHIPPING</div>
                                        <div>{formatCurrency(shipping)}</div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between">
                                    <div className='font-bold text-2xl'>TOTAL</div>
                                    <div className='font-bold text-2xl'>{formatCurrency(total)}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <div className="w-[450px] text-left">
                            <h1 className='text-left font-bold text-white text-xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-neutral-600'>Address Details</h1>
                        </div>
                        <div className='w-[450px] flex flex-col bg-white rounded-3xl shadow-md items-start p-8 gap-4'>
                            <div className="w-full border-b-2 text-left">
                                <p>Delivery to Iskandar Street</p>
                            </div>
                            <div className="w-full border-b-2 text-left">
                                <p>Km 5 refinery road oppsite re <br/> public road, effurun, Jakarta</p>
                            </div>
                            <div className="w-full text-left">
                                <p>+62 81348287878</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        <div className='w-[450px] text-left'>
                            <h1 className='text-left font-bold text-white text-xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-neutral-600'>Payment Method</h1>
                        </div>
                        <div className='w-[450px] flex flex-col bg-white rounded-3xl shadow-md  p-8 gap-4'>
                            <div className="w-full flex flex-col items-start justify-center gap-4">
                                <div className="w-full border-b-2 flex py-2">
                                    <div className='flex items-center justify-start gap-2'>
                                        <div className={` flex items-center h-5 w-5 relative  border-2 ${paymentMethod === 'Card' ? 'bg-[#F47B0A]' : 'border-gray-500'} rounded-full cursor-pointer`}
                                        onClick={()=> handlePaymentMethod('Card')}></div>
                                        <div className="h-8 w-8 relative bg-[#F47B0A] rounded-lg"></div>
                                        <div>Card</div>
                                    </div>
                                
                                </div>
                                <div className="w-full border-b-2 flex flex-col py-2">
                                    <div className="flex flex-row items-center justify-start gap-2">
                                        <div className={` flex items-center h-5 w-5 relative  border-2 ${paymentMethod === 'Bank Account' ? 'bg-[#F47B0A]' : 'border-gray-500'} rounded-full cursor-pointer`}
                                        onClick={()=> handlePaymentMethod('Bank Account')}></div>
                                        <div className="h-8 w-8 relative  bg-[#895537] rounded-lg cursor-pointer"></div>
                                        <h1 className="">Bank Account</h1>
                                    </div>
                                </div>
                                <div className="w-full  flex flex-col py-2">
                                    <div className="flex flex-row items-center justify-start gap-2">
                                    <div className={` flex items-center h-5 w-5 relative  border-2 ${paymentMethod === 'Cash On Delivery' ? 'bg-[#F47B0A]' : 'border-gray-500'} rounded-full cursor-pointer`}
                                        onClick={()=> handlePaymentMethod('Cash On Delivery')}></div>
                                        <div className="h-8 w-8 relative  bg-[#FFBA33] rounded-lg cursor-pointer"></div>
                                        <h1 className="">Cash On Delivery</h1>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='justify-center'>
                        <button onClick={handleConfirmAndPay} className='items-start w-[450px] h-[80px] bg-[#6A4029] rounded-2xl text-white font-bold' disabled={isLoading}>
                            {isLoading ? 'Processing...' : 'Confirm and Pay'}</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
  )
}

export default Cart