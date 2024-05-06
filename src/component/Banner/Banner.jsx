import { NavLink } from 'react-router-dom';
import bannerimg from '../../assets/bannerbook.png'

const Banner = () => {
    return (
        <div className='w-[1170px] h-[554px] bg-[#13131310] rounded-3xl flex items-center justify-between'>
            <div className='mx-8'>
                <h1 className='font-playfair font-bold text-[56px] text-[#131313]'>Books to freshen <br /> up your bookshelf</h1>

                {/* <button className='btn w-[189px] h-[66px] bg-[#23BE0A] font-work font-bold text-xl text-white my-8'> View The List</button> */}
                <NavLink to={'/listedbook'} className='btn w-[189px] h-[66px] bg-[#23BE0A] font-work font-bold text-xl text-white my-8'> View The List </NavLink>
            </div>
            <img src={bannerimg} alt="" />
        </div>
    );
};

export default Banner;