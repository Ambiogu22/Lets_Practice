import { Link } from "react-router-dom";

const Footer = () => {
return(
    <div className="flex flex-col justify-between items-start px-20 py-10 bg-[#000] w-full gap-4 mt-auto">
        <Link to="/" className="text-lg font-bold text-[#FFF]">VFRESH</Link>
        <div className="flex flex-col gap-2 justify-between">
            <div className="flex flex-col gap-2">
                <Link to="/shop" className="text-sm text-[#FFF]">Shop</Link>
                <Link to="/shop/5x5-detox-carrot-juice" className="text-sm text-[#FFF]">5x5 Detox</Link>
                <Link to="/about" className="text-sm text-[#FFF]">About Us</Link>
                <div className="border-[1px] border-[#A9A9A9] w-full hidden"/>
            </div>
        </div>
    </div>
)
}

export default Footer;