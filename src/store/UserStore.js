import { create } from 'zustand'
import axios from 'axios';
import Cookies from "js-cookie";



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
    

    Profile: null,
    ProfileRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/profile`, {withCredentials: true} );
        set({Profile: res["data"]["data"]})
        

    },
    





} ))


export default UserStore;