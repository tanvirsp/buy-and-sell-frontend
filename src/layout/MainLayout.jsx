
import { Outlet } from 'react-router-dom';
import Header from '../compoments/Shared/Header/Header';
import Footer from '../compoments/Shared/Footer/Footer';



const MainLayout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;