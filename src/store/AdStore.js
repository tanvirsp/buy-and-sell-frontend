import { create } from 'zustand'
import axios from 'axios';

const AdStore = create( (set)=>({
    
    Ads:null,

    ImageUploadRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/file-upload`, data);
        return res["data"];
    },

    MultiImageUploadRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/file-upload-all`, data);
        return res["data"];
    },

    CreateAdRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/ad`, data, {withCredentials: true});
        return res["data"];
    },


    MyAds : null,
    MyAdsRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/my-ads`,  {withCredentials: true});
        if(res.data["status"] ==="success"){
            set({MyAds: res.data["data"] })
        }
    },

    AdDetails : null,
    AdDetailsRequest: async(id) =>{
        set({AdDetails: null })
        const res = await axios.get(`http://localhost:5000/api/v1/ad/${id}`);
        if(res.data["status"] ==="success"){
            set({AdDetails: res.data["data"][0] })
        }
    },

    DeleteAdRequest: async(id) =>{
        const res = await axios.delete(`http://localhost:5000/api/v1/ad/${id}`);
        return res["data"]
    },

    UpdateAdRequest: async(id, data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/update-ad/${id}`, data, {withCredentials: true});
        return res["data"]
    },

   
    AdByCategoryRequest: async(id) =>{
        set({AdByCategory: null })
        const res = await axios.get(`http://localhost:5000/api/v1/ad-by-category/${id}`);
        if(res.data["status"] ==="success"){
            set({Ads: res.data.data })
        }
    },


    
    SearchKeyword:"",
    SearchKeywordRequest : async (keyword)=>{
        set({SearchKeyword: keyword});
    },

    SearchProductRequest: async(pageNumber, perPage, keyword) =>{
        const result = await axios.get(`http://localhost:5000/api/v1/search/${pageNumber}/${perPage}/${keyword}`);
        if(result.data['status'] ==="success"){
            set({Ads: result["data"]["data"]})
        }
    },





} ))


export default AdStore;