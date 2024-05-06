
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Root = () => {
    return (
        <div className='w-[1170px] h-full'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;