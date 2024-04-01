import { create } from 'zustand'
import axios from 'axios';

const AdStore = create( (set)=>({
    

    ImageUploadRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/file-upload`, data);
        return res["data"];
    },




} ))


export default AdStore;