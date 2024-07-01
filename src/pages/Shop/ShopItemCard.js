
const ShopItemCard = (props) => {

    const item = props.item
    return(
        <div className="flex flex-col bg-[#EEEEEE] px-4 py-6 flex justify-center items-center gap-8 rounded-lg">
            <div className="flex max-w-32 max-h-40 flex-col justify-around items-center text-center">
                <img src={item.image} alt={item.title} className="w-32"/>
                <h2 className="text-md font-semibold">{item.title}</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <h2>${item.price}</h2>
                <div>
                    <button>ADD TO CART</button>
                    {/* <div>
                        <button>-</button>
                        <h2>0</h2>
                        <button>+</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ShopItemCard;