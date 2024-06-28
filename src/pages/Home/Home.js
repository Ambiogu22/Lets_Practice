import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import GreenJuice from '../../assets/GreenJuice.jpg'
import '../../assets/home.css';

const Home = () => {
    return(
        <div className='flex flex-col mt-20 gap-6'>
            <div className='relative flex justify-center items-center'>
                <img src={GreenJuice} alt="Green Juice Image" />
                <Link to='/' className='absolute bottom-8'><Button title="Shop Now"/></Link>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <h2 className="test text-4xl font-bold">Green Juice!</h2>
                <p className='text-xl font-semibold'>Enjoy a delicious, fresh and natural green juice</p>
            </div>
        </div>
    )
}

export default Home;