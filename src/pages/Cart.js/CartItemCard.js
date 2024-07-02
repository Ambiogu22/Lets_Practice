import { useContext } from "react";
import AppContext from "../../context/Context";
import { getItemData } from "../../data/Items";

const CartItemCard = (props) => {

    const item = props.item;

    const itemData = getItemData(item);

    const cart = useContext(AppContext);



    return(
        <div className="flex justify-between items-center border-[1px] border-[#727272] p-4 rounded-lg">
            <div className="flex justify-center items-center">
                <img src={item.image} alt={itemData.title} className="w-16"/>
                <div className="flex flex-col items-start">
                    <h2 className="text-md font-semibold">{item.title}</h2>
                    <h2 className="text-sm font-semibold">${item.price}</h2>
                </div>
            </div>
            <div className="flex flex-col justify-around items-center gap-4">
                <div className="flex">
                    <button className="px-[13px] py-[2px] border-[1px] border-[#7A7A7A] rounded-l-full">-</button>
                    <h2 className="px-[13px] py-[2px] border-[1px] border-[#7A7A7A]">0</h2>
                    <button className="px-[13px] py-[2px] border-[1px] border-[#7A7A7A] rounded-r-full">+</button>
                </div>
                <div className="text-xs underline">Remove</div>
            </div>
        </div>
    )
}

export default CartItemCard;