import { itemsArray } from "../../data/Items";
import ShopItemCard from "./ShopItemCard";

const Shop = () => {
    return(
        <div className="my-16 flex flex-col gap-4 ">
            <h2 className="text-3xl font-semibold mx-2 ml-8">Shop</h2>
            <div className="ml-8">
                <h2 className="text-sm font-semibold">Featured</h2>
                <h2 className="text-2xl">Healthy Juices</h2>
            </div>
            <div className="mx-2 flex justify-center items-center gap-4 flex-wrap">
                {itemsArray.map((item, idx)=>(
                    <div key={idx}>
                        <ShopItemCard item={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;