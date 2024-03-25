import { create } from 'zustand'
import axios from 'axios';

const CategoryStore = create( (set)=>({
   
    Categories: null,
    CategoryRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/categories`);
        if(res.data["status"] ==="success"){
            set({Categories:res.data["data"] })
        }
    },

    SubCategories: null,
    SubCategoryRequest: async() =>{
        const res = await axios.get(`http://localhost:5000/api/v1/subcategories`);
        if(res.data["status"] ==="success"){
            set({SubCategories:res.data["data"] })
        }
    },


    AddCategoryRequest: async(data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/category`, data, {withCredentials: true} );
        return res["data"]
    }, 

    DeleteCategory: async(id) =>{
        const res = await axios.delete(`http://localhost:5000/api/v1/category/${id}`, {withCredentials: true} );
        return res["data"]
    }, 

    UpdateCategory: async(id, data) =>{
        const res = await axios.post(`http://localhost:5000/api/v1/category/${id}`, data, {withCredentials: true} );
        return res["data"]
    },

    SingleCategoryRequest: async(id) =>{
        const res = await axios.get(`http://localhost:5000/api/v1/category/${id}`);
        return res["data"]
        
    },










} ))


export default CategoryStore;