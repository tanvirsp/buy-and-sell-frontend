import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import UserStore from '../../../store/UserStore';
import { useEffect } from 'react';

const Header = () => {
    const {isLogin, ProfileRequest} = UserStore();
    const navigate = useNavigate()



    useEffect( ()=>{
        (async()=>{
          isLogin() && await ProfileRequest() ;
        })()
  
    } ,[isLogin()]);

    return (
        <header className='container' >
            <div><Link to="/"><h4 className='logo'>BUY & SELL</h4></Link></div>
            <nav>
                <ul>
                    <li>
                        <a href="#">All Ads</a>
                    </li>
                    <li>
                        <a href="#">About US</a>
                    </li>
                    <li>
                    
                    </li>
                    {
                        isLogin() ?  <li> <NavLink to="/dashboard">Dashboard </NavLink> </li>:
                        <li><NavLink to="/login">Login </NavLink></li>
                    }
                    
                    <li className='btn-post' onClick={()=>navigate("/dashboard/create-ad")}> Post Your Ad </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;