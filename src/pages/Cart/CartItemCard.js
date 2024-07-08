import { useContext } from "react";
import AppContext from "../../context/Context";
import { getItemData } from "../../data/Items";
import { Link } from "react-router-dom";

const CartItemCard = (props) => {

    const item = props.item;

    const cartItem = getItemData(item.id)

    const cart = useContext(AppContext);

    const cartItemQty = cart.getItemQty(item.id)

    return(
        <div className="flex justify-between items-center border-[1px] border-[#727272] p-4 rounded-lg">
            <div className="flex justify-center items-center">
                <Link to={cartItem.slug}>
                <img src={cartItem.image} alt={cartItem.title} className="w-16"/>
                </Link>
                <div className="flex flex-col items-start">
                    <h2 className="text-sm font-semibold">{cartItem.title}</h2>
                    <h2 className="text-sm font-semibold">${cartItem.price}</h2>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-4">
                <div className="flex">
                    <button className="px-[13px] py-[1px] border-[1px] border-[#7A7A7A] rounded-l-full" onClick={()=>cart.subtractQty(item.id)}>-</button>
                    <h2 className="px-[13px] py-[1px] border-[1px] border-[#7A7A7A]">{cartItemQty}</h2>
                    <button className="px-[13px] py-[1px] border-[1px] border-[#7A7A7A] rounded-r-full" onClick={()=>cart.addQty(item.id)}>+</button>
                </div>
                <button className="text-xs underline" onClick={()=>cart.removeItem(item.id)}>Remove</button>
            </div>
        </div>
    )
}

export default CartItemCard;