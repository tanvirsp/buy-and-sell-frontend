import { create } from 'zustand'
import axios from 'axios';
import Cookies from "js-cookie";
import { getEmail, setEmail } from '../utility/utility';



const UserStore = create( (set)=>({
    
    isLogin:()=>{

        return !!Cookies.get('token');
    },



    SignUpRequest: async(data) =>{
      
        const res = await axios.post(`http://localhost:5000/api/v1/register`, data);
        return res["data"]
    },

    
    LoginRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/login`, data, {withCredentials: true});
        return res["data"]
    },
    

    

    ChangePasswordRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/change-password`, data, {withCredentials: true} );
        return res["data"]
    },

    
    LogoutRequest: async() =>{
    const res = await axios.get(`http://localhost:5000/api/v1/logout`,  {withCredentials: true}  );
    return res["data"]

    },



    OtpProcessing: false,

    EmailVerifyRequest: async(email) =>{
        set({OtpProcessing: true});
        setEmail(email)
        const res = await axios.get(`http://localhost:5000/api/v1/send-otp/${email}`, );
        set({OtpProcessing: false});
        return res["data"]
    },

    OtpVerifyRequest: async(otp) =>{
        const email = getEmail()
        const res = await axios.get(`http://localhost:5000/api/v1/verify-otp/${email}/${otp}`, {withCredentials: true}  );
        return res["data"]

    }, 

    
    ResetPasswordRequest: async(newPassword) =>{
        //taking email from local store
        const email = getEmail()
        const data = {newPassword, email}
        const res = await axios.post(`http://localhost:5000/api/v1/reset-password`, data );
        return res["data"]
    },


  
    
    Profile: null,
    ProfileRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/profile`, {withCredentials: true} );
        set({Profile: res["data"]["data"][0]})
    },

    UpdateProfileRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/profile`, data, {withCredentials: true} );
        return res.data;
    },


    AllUsers : null,
    AllUsersRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/all-users`, {withCredentials: true} );
        set({AllUsers: res["data"]["data"]})
    },





} ))


export default UserStore;