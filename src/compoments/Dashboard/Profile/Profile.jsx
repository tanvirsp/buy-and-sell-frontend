import './Profile.css';
import avatar from '../../../assets/images/avater.jpg'
import UserStore from '../../../store/UserStore';
import { useEffect, useState } from 'react';
import ChangePasswordForm from "../../ChangePasswordForm/ChangePasswordForm"
import toast from 'react-hot-toast';


const Profile = () => {
    const {Profile, ProfileRequest, UpdateProfileRequest} = UserStore();
    const [profileData, setProfileData] = useState({});
    

    useEffect(()=>{
        (async ()=>{
            Profile === null && await ProfileRequest()
        })()
    },[])


    if(Profile === null){
        return <h2>Loading...</h2>

    }


    const handleImageUpload = (e) =>{
        e.preventDefault();
 
        const formData = new FormData();
        formData.append("image", e.target.files[0]);

        fetch(`${import.meta.env.VITE_URL}/api/v1/file-upload`, {
            method: "POST",
            body: formData  
        })
        .then(res => res.json())
        .then(data => {
            if(data.status){
                setProfileData({...profileData,[e.target.name]: data.data.filename })    
            }else {
                console.log("Something Wrong");
            }
        })
        
    };



    const handleFormData = (name, value)=>{
        setProfileData({
            ...profileData,
            [name]: value
        })
        
    }



    const handleSubmit = async(e) =>{
        e.preventDefault();
        const result = await UpdateProfileRequest(profileData);
        if(result.status ==="success"){
            toast.success("Profile Update Successfully");
            await ProfileRequest()
        } else {
            toast.error("Something Went Wrong");
            console.log(result);
        }
    }


    return (
        <section className=' bg-white p-5 rounded-2'>
            <div className="row g-5">
                <div className="col-md-6">
                    <div className='profile-info'>
                        {
                            Profile?.image ? <img crossOrigin ="anonymous"  src={ `${import.meta.env.VITE_URL}/${Profile?.image}`  } alt="Profile" /> : <img src={avatar} alt="" />
                        }
                    </div>
                    <div className='mb-4'>
                        <label>Upload Your Profile Picture</label><br />
                        <input type="file" name="image"onChange={handleImageUpload}/>
                    </div>

                    <form onSubmit={handleSubmit} >

                        <label>Your Name</label>
                        <input onBlur={(e)=>handleFormData("name", e.target.value)} defaultValue={Profile?.name} className='form-control mb-3 p-2' type="text" />

                        <label >Your Email </label>
                        <input disabled defaultValue={Profile?.email} className='form-control mb-3 p-2' type="email" />
                        
                        <label>Address </label>
                        <input onBlur={(e)=>handleFormData("address", e.target.value)} defaultValue={Profile?.address} className='form-control mb-3 p-2' type="text" />

                        <label>District </label>
                        <input onBlur={(e)=>handleFormData("district", e.target.value)} defaultValue={Profile?.district} className='form-control mb-3 p-2' type="text" />

                        <label>Mobile </label>
                        <input onBlur={(e)=>handleFormData("mobile", e.target.value)} defaultValue={Profile?.mobile} className='form-control mb-3 p-2' type="tel" />

                        <label>Age </label>
                        <input onBlur={(e)=>handleFormData("age", e.target.value)} defaultValue={Profile?.age}  className='form-control mb-3 p-2' type="text" />

                        

                       

                        <input className='btn btn-post rounded-2 mt-2' type="submit" value="Update Profile" />


                    </form>

                </div>
                <div className="col-md-6 mt-5">
                    <ChangePasswordForm />
                </div>
            </div>
            
        </section>
    );
};

export default Profile;