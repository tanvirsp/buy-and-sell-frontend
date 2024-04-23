import './DashboardLayout.css';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaRegNewspaper, FaRegUser  } from "react-icons/fa";
import { TbNewSection} from "react-icons/tb";
import { FaBarsStaggered, FaRegHeart  } from "react-icons/fa6";
import { useState } from 'react';
import avatar from "../assets/images/avater.jpg"

const DashboardLayout = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate()


    return (
        <div>
            <div className='top-bar'>
               <div>
                    <FaBarsStaggered onClick={()=>setShow(!show)} />
                    {/* <img className='dashboard-logo' src={logo} alt="Logo" /> */}
               </div>
               <div>
                    {/* <span className='userName'>{Profile?.userName}</span> */}
                    <img className='avatar' src={  avatar } alt="" />
               </div>
            </div>
            <div className="d-flex">
                <div  className={ show ?  "admin-nav" :  "admin-nav d-none" } >  
                    <ul className="admin-nav-bar">
                        <li><Link to="/dashboard">  <FaRegNewspaper /> Dashboard</Link></li>
                        <li><Link to="/dashboard/my-ads">  <FaRegNewspaper /> My Ads</Link></li>
                        <li><Link to="/dashboard/create-ad"> <TbNewSection /> Create Ad</Link></li>
                        <li><Link> <FaRegUser  /> Profile</Link></li>
                        <li><Link> <FaRegHeart /> Favourite</Link></li>
                    </ul>
                    <button onClick={()=>navigate("/")} className='btn btn-light mt-5 ms-2'>Go Back</button>
                </div>
                <div  className={ show ?  "content-area" :  "full-width" } >
                    <Outlet />
                    
                </div>
                
           </div>

        </div>
    );
};

export default DashboardLayout;