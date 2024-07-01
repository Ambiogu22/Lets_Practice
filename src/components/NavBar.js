import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const NavBar = () => {

    const [bar, setBar] = useState(false)

    const handleBar = () => {
        setBar(!bar)
    }

    return(
            <div className="flex items-center justify-between py-8 px-12 shadow-[0px_-2px_10px_0px] shadow-[#8A8A8A] sticky w-full z-50 top-0 bg-[#FFF]">
                <div className="flex gap-8 items-center">
                    {bar == false 
                    ?
                        <>
                            <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl" onClick={handleBar}/>
                            <Link to="/" className="text-xl font-bold">VFRESH</Link>
                        </>
                    :
                        <>
                            <FontAwesomeIcon icon={faBarsStaggered} className="text-2xl font-bold" onClick={handleBar}/>
                            <Link to="/" className="text-lg font-semibold" onClick={handleBar}>Home</Link>
                            <Link to="/shop" className="text-lg font-semibold" onClick={handleBar}>Shop</Link>
                        </>
                    }
                </div>
                <div>
                    <Link to="/" className="text-xl"><FontAwesomeIcon icon={faCartShopping} onClick={()=>setBar(false)}/></Link>
                </div>
            </div>
    )
}

export default NavBar;