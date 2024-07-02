import { useContext } from "react";
import AppContext from "../../context/Context";

const ShopItemCard = (props) => {

    const item = props.item

    const cart = useContext(AppContext);

    const itemQty = cart.getItemQty(item.id)

    console.log(cart.items)

    return(
        <div className="flex flex-col bg-[#EEEEEE] px-4 py-6 flex justify-center items-center gap-10 rounded-lg">
            <div className="flex max-w-32 max-h-40 flex-col justify-around items-center text-center gap-2">
                <img src={item.image} alt={item.title} className="w-32"/>
                <h2 className="text-md font-semibold ">{item.title}</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="font-semibold">${item.price}</h2>
                <div>
                    {itemQty >= 1 ?
                        <div className="flex text-sm">
                            <button className="px-[13px] py-[4px] border-[1px] border-[#7A7A7A] rounded-l-full" onClick={()=>cart.subtractQty(item.id)}>-</button>
                            <h2 className="px-[13px] py-[4px] border-[1px] border-[#7A7A7A]">{itemQty}</h2>
                            <button className="px-[13px] py-[4px] border-[1px] border-[#7A7A7A] rounded-r-full" onClick={()=>cart.addQty(item.id)}>+</button>
                        </div>
                    :
                        <button className="border-[1px] border-[#7A7A7A] px-2 py-[4px] rounded-full text-sm" onClick={()=>cart.addQty(item.id)}>ADD TO CART</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ShopItemCard;