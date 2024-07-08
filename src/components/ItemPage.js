import { useParams } from "react-router";
import { itemsArray } from "../data/Items";
import { useState, useEffect } from "react";
import { useContext } from "react";
import AppContext from "../context/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const ItemPage = () => {

    const { slug } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(()=>{
        const findDetail = itemsArray.filter(item => item.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            alert("Page not found")
        }
    }, [slug])

    const cart = useContext(AppContext);

    const itemQty = cart.getItemQty(detail.id);

    return(
        <div className="my-16 mx-8 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-semibold">{detail.title}</h2>
                <div className="mt-12 flex flex-col gap-4">
                    <img src={detail.image} alt={detail.title} />
                    <p className="text-lg">{detail.description}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-around items-center">
                    <h2 className="text-2xl font-semibold">${detail.price}</h2>
                    <div>
                        {itemQty >= 1 ?
                                        <div className="flex text-sm">
                                            <button className="px-[13px] py-[4px] border-[1px] border-[#7A7A7A] rounded-l-full bg-[#000] text-[#FFF] font-semibold" onClick={()=>cart.subtractQty(detail.id)}>-</button>
                                            <h2 className="px-[13px] py-[4px] border-[1px] border-[#7A7A7A] bg-[#000] text-[#FFF] font-semibold">{itemQty}</h2>
                                            <button className="px-[13px] py-[4px] border-[1px] border-[#7A7A7A] rounded-r-full bg-[#000] text-[#FFF] font-semibold" onClick={()=>cart.addQty(detail.id)}>+</button>
                                        </div>
                                    :
                                        <button className="border-[1px] border-[#7A7A7A] px-2 py-[4px] rounded-full text-sm bg-[#000] text-[#FFF] font-semibold" onClick={()=>cart.addQty(detail.id)}>ADD TO CART</button>
                        }
                    </div>
                </div>
                <div className="flex flex-col my-20 gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-semibold">Benefits</h2>
                        <div className="flex justify-around gap-6">
                            <FontAwesomeIcon icon={faHeart} className="text-3xl" />
                            <p>{detail.benefits}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-lg font-semibold">Ingredients</h2>
                        <p className="">{detail.ingredients}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;