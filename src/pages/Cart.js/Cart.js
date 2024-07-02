import CartItemCard from "./CartItemCard";
import { useContext } from "react";
import AppContext from "../../context/Context";
import { Link } from "react-router-dom";

const Cart = () => {

    const cart = useContext(AppContext);

    const cartItems = cart.items;

    let totalCartCost = Number((cart.getTotalCartCost()).toFixed(3));

    let totalCartItems = cart.getTotalCartItems();

    return(
        <div>
            <h2 className="text-2xl font-semibold px-4 mt-2">Cart</h2>
            {cart.items.length >= 1 ?
                <div className="flex flex-col items-start sticky top-[90px] bg-[#FFF] shadow-[0px_4px_4px_0px] shadow-[#8A8A8A] px-8 py-4 gap-4">
                    <div className="flex items-center justify-between">
                    <h2 className="text-lg">Subtotal ({totalCartItems} Items):</h2>
                        <h2 className="text-xl font-semibold">${totalCartCost}</h2>
                    </div>
                    <button className="text-[#FFF] bg-[#000] rounded-full w-full px-8 py-[4px]">Proceed to checkout (1 Item)</button>
                </div>
            : 
                <div className="flex flex-col justify-center items-center gap-8">
                    <h2 className="text-2xl font-semibold px-4 mt-2">Your cart is empty.</h2>
                    <Link to='/shop' className="text-[#FFF] bg-[#000] rounded-full px-8 py-[4px]">Shop</Link>
                </div>
            }
            
            <div className="pb-8 px-4 mt-8 flex flex-col justify-center items-center">
                {cart.items.length >= 1 &&
                    <Link to='/shop' className="text-[#FFF] bg-[#000] rounded-full px-8 py-[4px]">Shop more items</Link>
                }
                <div className="flex flex-col gap-4 my-8 mx-2 w-full">
                    {cartItems.map((item, idx)=>(
                        <div key={idx}>
                            <CartItemCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cart;