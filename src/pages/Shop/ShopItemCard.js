
const ShopItemCard = (props) => {

    const item = props.item
    return(
        <div className="flex flex-col bg-[#EEEEEE] px-4 py-6 flex justify-center items-center gap-12 rounded-lg">
            <div className="flex max-w-32 max-h-40 flex-col justify-around items-center text-center gap-2">
                <img src={item.image} alt={item.title} className="w-32"/>
                <h2 className="text-lg font-semibold ">{item.title}</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <h2 className="font-semibold">${item.price}</h2>
                <div>
                    <button className="border-[1px] border-[#000] px-2 py-[4px] rounded-full text-sm">ADD TO CART</button>
                    {/* <div className="flex gap-6 border-[1px] border-[#000] px-4 py-[4px] rounded-full text-sm">
                        <button className="text-md">-</button>
                        <h2 className="text-md">0</h2>
                        <button className="text-md">+</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ShopItemCard;