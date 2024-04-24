import { useNavigate } from 'react-router-dom';
import UserStore from '../../store/UserStore';
import './ResetVerifyOtpForm.css';
import { useState } from 'react';

const ResetVerifyOtpForm = () => {
    const {OtpVerifyRequest, } = UserStore();
    const nagivate = useNavigate();

    
    const [otp, setOtp] = useState()


    const handleOtp = (e)=>{
        setOtp(e.target.value);
    }

    
    const handleSubmit = async()=>{
        // e.preventDefault();
        const result = await OtpVerifyRequest(otp);
        if(result["status"] ==="success" ){
          
            //navigate user to change password
            nagivate("/change-password-form");
        }
        
    }

    return (
        <section className='login-form-section'>
             <div className='login-form  '>
                <input type="text" onBlur={ handleOtp }  className="form-control p-3" placeholder="Your OTP code"/>
                <input type="submit" onClick={handleSubmit} value="Verify" className="btn btn-post w-100 rounded-2 mt-2 p-3" />
                
            </div>
            
        </section>
    );
};

export default ResetVerifyOtpForm;