import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../helpers/formatter";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Cart = () => {
  const [transaction, setTransaction] = useState([]);
  const [user, setUser] = useState([])
  const [paymentMethod, setPaymentMethod] = useState('')
  const navigate = useNavigate()

  const getTransactions = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_HOST}/transaction?orderBy=createdAt&sortBy=DESC&limit=10&page=1`
      );
      console.log({response});
      
      setTransaction(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTransactions();
  }, []);

  const getUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_HOST}/user?search=&oderBy=id&sortBy=ASC&limit=100&page=1`)
      setUser(response?.data?.data)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  useEffect(() => {
    getUser()
  }, [])

  const handlePaymentMethod = (method) => {
    setPaymentMethod(method);
};

  const deleteTransaction = async (id) => {
    const confirmDelete = Swal.fire({
        title: "Are you sure?",
        text: "Are you sure you want to delete this item from your cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      });
    if (!confirmDelete) return;

    try {
      const response = await axios.delete(`${process.env.REACT_APP_HOST}/transaction/${id}`);
      if (response.status === 200) {
        // Update the transaction state to remove the deleted item
        setTransaction(transaction.filter(item => item.id !== id));
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
      }
    } catch (error) {
      console.log('Error deleting item:', error);
      Swal.fire('Failed to delete item. Please try again.');
    }
  };

  const calculateSubtotal = () => {
    return transaction.reduce((sum, item) => sum + item?.product?.price, 0);
  };

  const calculateTax = (subtotal) => {
    const taxRate = 0.1;
    return subtotal * taxRate;
  };

  const calculateShipping = () => {
    return 10000; // Example flat shipping fee
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const shipping = calculateShipping();
  const total = subtotal + tax + shipping;

  const handleConfirmAndPay = () => {
    // Save the current transactions to localStorage
    const existingHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
    const newHistory = [...existingHistory, ...transaction];
    localStorage.setItem('transactionHistory', JSON.stringify(newHistory));

    // Navigate to the history page after confirming payment
    navigate('/history');
  };

  return (
    <div>
      <Navbar />
      <div className="bg-[#EFEEEE] ">
        <div className=" px-28 py-14 gap-12 justify-start">
          <div className="font-bold text-white text-3xl flex flex-col items-start text-left drop-shadow-[3px_3px_var(--tw-shadow-color)] shadow-neutral-600">
            Checkout your <br /> item now!
          </div>
          <div className="grid grid-rows-2 grid-flow-col gap-x-10 gap-y-4 p-4 justify-between">
            <div className="row-span-4 flex flex-col bg-white rounded-3xl p-4 shadow-md">
              <div className="flex flex-col items-center py-12 px-10 gap-24">
                <div className="items-center font-bold text-3xl">
                  Order Summary
                </div>
                <div className="flex flex-col gap-4">
                  {transaction.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex w-full items-center justify-between gap-24">
                            <div className="flex gap-4 items-center">
                                <img
                                className="w-[82px] h-[90px] bg-orange-500 rounded-2xl "
                                src={item?.product?.image}
                                alt={item?.product?.name}
                                />
                                <label className="text-left">{item?.product?.name}</label>
                            </div>
                        <div className="flex gap-4">
                          <label className="text-left">{formatCurrency(item?.product?.price)}</label>
                          <button onClick={() => deleteTransaction(item.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
                          <FontAwesomeIcon icon={faTrash} size="lg" />
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  <div className="w-full flex border-b-2"></div>
                  <div className="flex flex-col gap-4 justify-between">
                    <div className="flex flex-row justify-between gap-52">
                      <div className="">SUBTOTAL</div>
                      <div>{formatCurrency(subtotal)}</div>
                    </div>
                    <div className="flex flex-row justify-between gap-52">
                      <div className="">TAX & FEES</div>
                      <div>{formatCurrency(tax)}</div>
                    </div>
                    <div className="w-full flex flex-row justify-between gap-52">
                      <div className="">SHIPPING</div>
                      <div>{formatCurrency(shipping)}</div>
                    </div>
                  </div>
                  <div className="w-full flex flex-row justify-between">
                    <div className="font-bold text-2xl">TOTAL</div>
                    <div className="font-bold text-2xl">{formatCurrency(total)}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="w-[450px] text-left">
                <h1 className="text-left font-bold text-white text-xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-neutral-600">
                  Address Details
                </h1>
              </div>
              <div className="w-[450px] flex flex-col bg-white rounded-3xl shadow-md items-start p-8 gap-4">
                {user.map((item, index) => {
                  return(
                    <div key={index}>
                      <div className="w-full border-b-2 text-left">
                        <p>Delivery to <b>{item?.name}</b> </p>
                      </div>
                      <div className="w-full border-b-2 text-left">
                        <p>{item?.address}</p>
                      </div>
                      <div className="w-full text-left">
                        <p>{item?.phoneNumber}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <div className="w-[450px] text-left">
                <h1 className="text-left font-bold text-white text-xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-neutral-600">
                  Payment Method
                </h1>
              </div>
              <div className="w-[450px] flex flex-col bg-white rounded-3xl shadow-md  p-8 gap-4">
                <div className="w-full flex flex-col items-start justify-center gap-4">
                  <div className="w-full border-b-2 flex py-2">
                    <div className="flex items-center justify-start gap-2">
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
            <div className="justify-center">
              <button onClick={handleConfirmAndPay} className="items-start w-[450px] h-[80px] bg-[#6A4029] rounded-2xl text-white font-bold">
                Confirm and Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
