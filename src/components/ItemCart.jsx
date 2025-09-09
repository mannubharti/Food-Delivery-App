import React from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, IncrementQty, DecrementQty} from "../Redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCart = ({id, name, qty, price, img}) => {
  ///console.log('print qty=', qty);
  const dispatch=useDispatch();
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={() => {
      dispatch(removeFromCart({id, name, img, qty, price}))
        toast(`${name} Removed!`, {
        icon: '👏',
    });
    }}

      className="absolute  right-5 lg:right-7 text-gray-600 cursor-pointer" />
      <img
        src={img}
        alt=""
        className="w-[50px] h-[50px] "
      />
      <div>
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="font-bold text-green-500">₹{price}</span>
          <div className="flex justify-center  gap-1 lg:gap-2 absolute  right-4 lg:right-7">
             <FiMinus
             onClick={()=>
              qty > 1 ? dispatch(DecrementQty({id})) : (qty = 0)
             }
              className="border-2 border-gray-600 text-gray-600 
                hover:text-white hover:bg-green-500 hover:border-none rounded-md
                p-1 text-xl transition-all ease-linear cursor-pointer"
            />
             <span>{qty}</span>
            <FiPlus
            onClick={()=>
              qty >= 1 ? dispatch(IncrementQty({id})) : (qty = 0)
            }
              className="border-2 border-gray-600 text-gray-600 
                hover:text-white hover:bg-green-500 hover:border-none rounded-md
                p-1 text-xl transition-all ease-linear cursor-pointer"
            />
           
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
