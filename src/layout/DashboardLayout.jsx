import './DashboardLayout.css';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaRegNewspaper, FaRegUser  } from "react-icons/fa";
import { TbNewSection} from "react-icons/tb";
import { FaBarsStaggered, FaRegHeart  } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import avatar from "../assets/images/avater.jpg"
import UserStore from '../store/UserStore';
import toast from 'react-hot-toast';
import { FaUsers } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";




const DashboardLayout = () => {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();


    const {ProfileRequest} = UserStore();

    useEffect(()=>{
        (async()=>{
            await ProfileRequest()
        })()

    } , [])
    


    const {LogoutRequest, Profile} = UserStore();

    const handleLogout = async()=>{
        const result = await LogoutRequest();
        if(result.status ==="success"){
          sessionStorage.clear();
          localStorage.clear();
          navigate("/");
          toast.success("Logout Successfully");
        }
    }

    
    if(Profile === null){
        return <h4>Loading...</h4>
    }

    return (
        <div>
            <div className='top-bar'>
               <div>
                    <FaBarsStaggered onClick={()=>setShow(!show)} />
                
               </div>
               <div>
                    
                    <button onClick={handleLogout} className='btn btn-danger me-3'>Logout</button>
                    
                    {
                        Profile?.image ? <img className='avatar' crossOrigin ="anonymous"  src={ `${import.meta.env.VITE_URL}/${Profile?.image}`  } alt="Profile" /> : 
                        <img className='avatar' src={avatar} alt="" />
                    }
                 
                    
               </div>
            </div>
            <div className="d-flex">
                <div  className={ show ?  "admin-nav" :  "admin-nav d-none" } >  

          
                    <ul className="admin-nav-bar">
                        <li><Link to="/dashboard">  <FaRegNewspaper /> Dashboard</Link></li>

                        {
                            Profile.role === "admin" &&  <>
                                                            <li><Link to="/dashboard/users">  <FaUsers /> Users</Link></li>
                                                            <li><Link to="/dashboard/all-ads">  <SiDatabricks /> All Ads</Link></li>
                                                         </>  
                        }

                
                        <li><Link to="/dashboard/my-ads">  <FaRegNewspaper /> My Ads</Link></li>
                        <li><Link to="/dashboard/create-ad"> <TbNewSection /> Create Ad</Link></li>
                        <li><Link to="/dashboard/profile">  <FaRegUser  /> Profile</Link></li>
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