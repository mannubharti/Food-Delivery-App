import React, { useState }from 'react';
import { IoMdClose } from "react-icons/io";
import ItemCart from './ItemCart';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';


const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
 // console.log(cartItems);
 const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
 
 const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);
 
 const navigate = useNavigate();
 return (
    <>
      <div className={`fixed top-0 right-0 w-full lg:w-[20vw]
         h-full bg-white shadow-lg p-4 
         ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className="flex items-center justify-between my-3">
          <span className="text-xl font-bold text-gray-800">My order</span>
          <IoMdClose 
           onClick={() => setActiveCart(!activeCart)} 
           className='border-2 border-gray-600 text-gray-600 p-1 text-xl 
            rounded-md hover:text-red-300 hover:border-red-300
             cursor-pointer'/>
        </div>

        {
          cartItems.length > 0 ? cartItems.map((food)=>{
            return <ItemCart
             key={food.id}
             id={food.id} 
             name={food.name}
             price={food.price} 
             img={food.img}
             qty={food.qty}
            />
          }) : <h2 className="text-center text-xl font-bold text-gray-800">Your Cart is empty</h2>
        }
          
          <div className='absolute bottom-0'>
         <h3 className="className=font-semibold text-gray-800">Items : {totalQty} </h3>
         <h3 className="className=font-semibold text-gray-800">Total Amount : {totalPrice} </h3>
         <hr className='w-[90vw] lg:w-[18vw] my-2' />
         <button
         onClick={() => navigate('/success')}
          className="bg-green-500 font-bold px-3 text-white py-2
         rounded-lg  w-full lg:width-[18vw]">Checkout</button>
      </div>
      </div>

    
      <div>
        <FaShoppingCart 
        onClick={()=> setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3
        fixed bottom-6 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`} />
      </div>
    </>
  );
};

export default Cart;