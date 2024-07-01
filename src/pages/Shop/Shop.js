import { itemsArray } from "../../Data/Items";
import ShopItemCard from "./ShopItemCard";

const Shop = () => {
    return(
        <div className="my-16">
            <h2 className="text-3xl font-semibold ml-6">Shop</h2>
            <div className="mx-2 my-16 flex justify-center  gap-4 flex-wrap">
                {itemsArray.map((item)=>(
                    <div>
                        <ShopItemCard item={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;