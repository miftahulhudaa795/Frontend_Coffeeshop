
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Cart = () => {
   
  return (
        <div>
        <Navbar/>
        <div className="bg-[#EFEEEE] ">
            <div className=" px-28 py-14 gap-12 justify-start">
                <div className='font-bold text-white text-3xl flex flex-col items-start text-left drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-neutral-600'>Checkout your <br/> item now!</div>
                <div className="grid grid-rows-2 grid-flow-col gap-x-10 gap-y-4 p-4 justify-between">
                    <div className="w-[450px] h-[700px] row-span-4 flex flex-col bg-white rounded-3xl p-4 shadow-md">
                        <div className='flex flex-col items-center  py-12 px-4 gap-24'>
                            <div className="items-center font-bold text-3xl">Order Summary</div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex flex-row items-center justify-center gap-8">
                                    <img className='w-[82px] h-[90px] bg-orange-500 rounded-2xl ' src="" alt="img" />
                                    <label className='text-left' htmlFor="">Hazelnut Latte x 1 Regular</label>
                                    <label className='text-left' htmlFor="">IDR 24.000</label>
                                </div>
                               
                                <div className="flex flex-row items-center justify-center gap-8">
                                    <img className='w-[82px] h-[90px] bg-orange-500 rounded-2xl ' src="" alt="img" />
                                    <label className='text-left' htmlFor="">Chicken Fire Wings x 2</label>
                                    <label className='text-left' htmlFor="">IDR 30.000</label>
                                </div>
                                <div className="w-full flex border-b-2"></div>
                                <div className="flex flex-col gap-4 justify-between">
                                    <div className="flex flex-row justify-between gap-52">
                                        <div className=''>SUBTOTAL</div>
                                        <div>IDR 120.000</div>
                                    </div>
                                    <div className="flex flex-row justify-between gap-52">
                                        <div className=''>TAX & FEES</div>
                                        <div>IDR 20.000</div>
                                    </div>
                                    <div className="w-full flex flex-row justify-between gap-52">
                                        <div className=''>SHIPPING</div>
                                        <div>IDR 10.000</div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row justify-between">
                                    <div className='font-bold text-2xl'>TOTAL</div>
                                    <div className='font-bold text-2xl'>IDR 150.000</div>
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
                                <div className="w-full border-b-2 flex flex-col py-2">
                                    <div className='flex flex-row items-center justify-start gap-2'>
                                        <div className="h-5 w-5 relative  border-2 border-gray-500 rounded-full cursor-pointer"></div>
                                        <div className="h-8 w-8 relative  bg-[#F47B0A] rounded-lg cursor-pointer"></div>
                                        <h1 className="">Card</h1>
                                    </div>
                                    
                                </div>
                                <div className="w-full border-b-2 flex flex-col py-2">
                                    <div className="flex flex-row items-center justify-start gap-2">
                                        <div className="h-5 w-5 relative  border-2 border-gray-500 rounded-full cursor-pointer"></div>
                                        <div className="h-8 w-8 relative  bg-[#895537] rounded-lg cursor-pointer"></div>
                                        <h1 className="">Bank Account</h1>
                                    </div>
                                </div>
                                <div className="w-full  flex flex-col py-2">
                                    <div className="flex flex-row items-center justify-start gap-2">
                                        <div className="h-5 w-5 relative  border-2 border-gray-500 rounded-full cursor-pointer"></div>
                                        <div className="h-8 w-8 relative  bg-[#FFBA33] rounded-lg cursor-pointer"></div>
                                        <h1 className="">Cash On Delivery</h1>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className='justify-center'>
                        <button className='items-start w-[450px] h-[80px] bg-[#6A4029] rounded-2xl text-white font-bold'>Confirm and Pay</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
  )
}

export default Cart