import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import GreenJuice from '../../assets/GreenJuice.jpg'
import Detox5x5 from '../../assets/carrotJuice.jpg'
import '../../assets/home.css';
import NewProductCard from './NewProductCard';

const Home = () => {
    return(
        <div>
            <div className='flex flex-col my-24 gap-10'>
                <div className='relative flex justify-center items-center'>
                    <img src={GreenJuice} alt="Green Juice Image" />
                    <Link to='/' className='absolute bottom-8'><Button title="Shop Now"/></Link>
                </div>
                <div className='flex flex-col justify-center items-center gap-20'>
                    <div className='flex flex-col justify-center items-center gap-4 px-8'>
                        <h2 className="greenJuice text-4xl font-bold">Green Juice!</h2>
                        <p className='text-xl font-semibold text-center'>Enjoy a delicious, fresh and natural green juice</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-4 px-8 homeBgAnimation pt-10 pb-28 relative'>
                        <h2 className="text-2xl font-bold text-[#FFF]">Refresh Your Path.</h2>
                        <p className='text-lg text-center text-[#FFF]'>Discover our tailored cleanse programs and systems, designed 
                        to enhance your wellness journey whenever you seek a complete body rejuvenation.</p>
                        <Link to='/' className='absolute bottom-8'><Button title="Start Shopping"/></Link>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-12'>
                    <h2 className="text-2xl font-bold ">See What's Coming Soon.</h2>
                    <div className='flex flex-col justify-center items-center bg-[#000] py-8 gap-6'>
                        <NewProductCard 
                            title="5X5 Detox - Purify and Energize with Carrot Power" 
                            img={Detox5x5} 
                            description="Unlock the natural detoxifying benefits of carrots with our 5-Day Carrot Juice Detox."
                        />
                        <Button title="More Info"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;