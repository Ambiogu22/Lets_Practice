import CartItemCard from "./CartItemCard";
import { itemsArray } from "../../Data/Items";

const Cart = () => {
    return(
        <div className="top-0 right-0 h-screen w-4/6 bg-[#BCBCBC] fixed z-40 py-24 mt-12 px-4">
            <h2 className="text-2xl font-semibold">Cart</h2>
            <h2 className="">Subtotal (1 Item): $0.00</h2>
            <div className="flex flex-col gap-4 my-8 mx-2">
                {itemsArray.map((item)=>(
                    <CartItemCard item={item} />
                ))}
            </div>
        </div>
    )
}

export default Cart;