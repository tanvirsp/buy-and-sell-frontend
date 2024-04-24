
import { useState } from 'react';
import './LoginForm.css';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import UserStore from '../../store/UserStore';
import { VscEyeClosed } from "react-icons/vsc";
import { BiShowAlt } from "react-icons/bi";


const LoginForm = () => {

    //zustand Global state
    const {LoginRequest, ProfileRequest } = UserStore();
    const navigate = useNavigate();

    const [showPassword, setShowPassowrd] = useState(false);
    const [data, setData] = useState({});

    


    const handleLoginData = (name, value)=>{
        setData({
            ...data,
            [name]:value
        })
    };


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const result  = await LoginRequest(data);
        if(result.status==="success"){
            toast.success("Login in successfully");
            navigate("/");
            await ProfileRequest()

        }else {
            toast.error(result.message);
        }
       

    };



    return (
        <section >
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <input onBlur={ (e)=>handleLoginData("email", e.target.value) } className='form-control p-3' type="email" placeholder='Your Email'  />
                    <div className='password-field '>
                        <input onBlur={ (e)=>handleLoginData("password", e.target.value) } 
                            className='form-control my-2 p-3'
                            type={showPassword ? "text" : "password"}  placeholder="Password" />
                        <span onClick={()=>setShowPassowrd(!showPassword)} className='password-icon'> {showPassword ? <BiShowAlt />   :  <VscEyeClosed />  } </span>
                    </div>

                    <input className='btn-post w-100 mt-2' type="submit" value="LOGIN" />
                </form>
                <p className='mt-2'> <Link to="/reset-form">Forget password?</Link> </p>
                <p className='mt-2 '>Need an account? <Link to="/signup">Sign Up</Link> </p>
                
            </div>
        </section>
    );
};

export default LoginForm;