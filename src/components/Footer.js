import { Link } from "react-router-dom";

const Footer = () => {
return(
    <div className="flex flex-col justify-center items-start px-20 py-10 bg-[#000]">
        <Link to="/" className="text-lg font-bold text-[#FFF]">VFRESH</Link>
        <div className="flex flex-col py-6 mt-8 gap-2">
            <h2 className="text-[#FFF] font-semibold text-md">SHOP</h2>
            <div className="flex flex-col gap-2">
                <Link to="/" className="text-sm text-[#FFF]">Juice Cleanses</Link>
                <Link to="/" className="text-sm text-[#FFF]">5x5 Detox</Link>
            </div>
        </div>
        <div className="border-[1px] border-[#A9A9A9] w-full mb-6"/>
        <Link to="/" className="text-md font-bold text-[#FFF]">About Us</Link>
    </div>
)
}

export default Footer;