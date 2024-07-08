
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Success = () => {

    return(
        <div className='px-16'>
            <div className="flex flex-col justify-center items-center mt-24">
                <div className="flex flex-col justify-center items-center px-3 py-3 bg-[#E5FFE3] rounded-full">
                    <div className="flex flex-col justify-center items-center px-3 py-3 bg-[#C3FFBF] rounded-full">
                        <div className="flex flex-col justify-center items-center px-3 py-3 bg-[#99FC92] rounded-full">
                            <div className="flex flex-col justify-center items-center px-4 py-4 bg-[#33CE27] rounded-full">
                                <FontAwesomeIcon icon={faCheck} className="text-2xl font-bold text-[#FFF] text-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[0.5px] border-[#A9A9A9] my-16"/>
            <div className='flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-3xl font-semibold text-[#24AD1A]'>Order Placed!</h2>
                    <p className='text-md text-[#76CA70]'>Sit back and relax!</p>
                </div>
                <Link to="/"><h2 className='text-xs underline text-[#A2A2A2]'>Back To Home</h2></Link>
            </div>
        </div>
    )
}

export default Success;
