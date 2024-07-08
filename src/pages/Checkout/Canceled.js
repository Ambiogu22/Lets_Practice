import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Canceled = () => {
    return(
        <div className='px-16'>
            <div className="flex flex-col justify-center items-center mt-24">
                <div className="flex flex-col justify-center items-center px-3 py-3 bg-[#FFECEC] rounded-full">
                    <div className="flex flex-col justify-center items-center px-3 py-3 bg-[#FBC0C0] rounded-full">
                        <div className="flex flex-col justify-center items-center px-3 py-3 bg-[#FB7878] rounded-full">
                            <div className="flex flex-col justify-center items-center px-4 py-4 bg-[#F71E1E] rounded-full">
                            <FontAwesomeIcon icon={faXmark} className="text-2xl font-bold text-[#FFF] text-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-[1px] border-[#A9A9A9] my-16"/>
            <div className='flex flex-col justify-center items-center gap-8'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <h2 className='text-3xl font-semibold text-[#DB1010]'>Payment Error</h2>
                    <p className='text-md text-[#F95C5C]'>Oops!</p>
                </div>
                <Link to="/"><h2 className='text-xs underline text-[#A2A2A2]'>Back To Home</h2></Link>
            </div>
        </div>
    )
}

export default Canceled;