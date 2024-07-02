import CartItemCard from "./CartItemCard";
import { useContext } from "react";
import AppContext from "../../context/Context";

const Cart = () => {

    const cart = useContext(AppContext);

    const cartItems = cart.items;

    return(
        <div>
            <h2 className="text-2xl font-semibold px-4 mt-2">Cart</h2>
            <div className="flex flex-col items-start sticky top-[90px] bg-[#FFF] shadow-[0px_4px_4px_0px] shadow-[#8A8A8A] px-8 py-4 gap-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg">Subtotal (1 Item):</h2>
                    <h2 className="font-semibold">$0.00</h2>
                </div>
                <button className="text-[#FFF] bg-[#000] rounded-full w-full px-8 py-[4px]">Proceed to checkout (1 Item)</button>
            </div>
            <div className="pb-8 px-4">
                <div className="flex flex-col gap-4 my-8 mx-2">
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