import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div className="flex flex-col justify-center items-center mx-16 gap-8">
            <h2 className="mt-36 text-3xl font-bold">Oops!</h2>
            <h2 className="text-lg font-bold">404 - Page Not Found</h2>
            <p className="text-md text-center">The page you are looking for might have been removed, had its name
                changed or is temporarily unavailable.
            </p>
            <Link to="/"><h2 className='text-xs underline text-[#666666]'>Back To Home</h2></Link>
        </div>
    )
}

export default NotFound;