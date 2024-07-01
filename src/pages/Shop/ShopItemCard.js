const ShopItemCard = (props) => {

    const item = props.item
    return(
        <div className="flex flex-col bg-[#EEEEEE] px-4 py-4 flex justify-center items-center gap-6 rounded-lg">
            <div className="flex max-w-40 min-h-44 flex-col justify-center items-center text-center gap-2">
                <img src={item.image} alt={item.title} className="w-40"/>
                <h2 className="text-lg font-semibold">{item.title}</h2>
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