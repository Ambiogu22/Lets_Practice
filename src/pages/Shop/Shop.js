import { itemsArray } from "../../data/Items";
import ShopItemCard from "./ShopItemCard";

const Shop = () => {

    let allItems = itemsArray;

    let availableItems = itemsArray.filter(item=>{
        return item.available != false;
    })

    let newArrivalsItems = itemsArray.filter(item=>{
        return item.newItem && item.available;
    });

    let detoxItems = itemsArray.filter(item=>{
        return item.detox != false;
    });

    let comingItems = itemsArray.filter(item=>{
        return item.available != true;
    });

    return(
        <div className="my-16 flex flex-col gap-4 ">
            <h2 className="text-3xl font-semibold mx-2 ml-8">Shop</h2>
            <div className="flex flex-col gap-16 place-items-start mx-8">
                <div className="flex flex-col gap-6">
                    <div>
                        <h2 className="text-sm font-semibold">Featured</h2>
                        <h2 className="text-2xl">Available Juices</h2>
                    </div>
                    <div className="mx-2 flex justify-center items-center gap-4 flex-wrap">
                        {availableItems.map((item, idx)=>(
                            <div key={idx}>
                                <ShopItemCard item={item}/>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-sm font-semibold">Featured</h2>
                        <h2 className="text-2xl">New Arrivals</h2>
                    </div>
                    <div className="mx-2 flex justify-center items-center gap-4 flex-wrap">
                        {newArrivalsItems.map((item, idx)=>(
                            <div key={idx}>
                                <ShopItemCard item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-sm font-semibold">Systems and Cleanses</h2>
                        <h2 className="text-2xl">Detox</h2>
                    </div>
                    <div className="mx-2 flex justify-center items-center gap-4 flex-wrap">
                        {detoxItems.map((item, idx)=>(
                            <div key={idx}>
                                <ShopItemCard item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-sm font-semibold">Featured</h2>
                        <h2 className="text-2xl">Coming Soon</h2>
                    </div>
                    <div className="mx-2 flex place-items-center gap-4 flex-wrap">
                        {comingItems.map((item, idx)=>(
                            <div key={idx}>
                                <ShopItemCard item={item}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop;