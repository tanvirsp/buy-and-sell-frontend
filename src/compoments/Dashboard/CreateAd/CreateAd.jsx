import { useEffect, useState } from 'react';
import './CreateAd.css';
import AdStore from '../../../store/AdStore';
import CategoryStore from '../../../store/CategoryStore';

const CreateAd = () => {
    const [divisions, setDivisions] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState("");
    const [divisionData, setDivisionData] = useState([]);
    const[district, setDistrict] = useState("");


    const [adData, setAdData] = useState({
        images: []
    });
    


    //Global Store
    const {ImageUploadRequest} = AdStore();
    const {Categories, CategoryRequest} = CategoryStore()
    


    //loading Division from API
    useEffect(()=>{
        (async()=>{
            const res = await fetch("https://bdapis.com/api/v1.1/divisions")
            const data = await res.json();
            setDivisions(data.data)

            Categories === null && await CategoryRequest()



        })()
    } ,[]);


    //loading District from API
    useEffect(()=>{
        (async()=>{
            const res = await fetch(`https://bdapis.com/api/v1.1/division/${selectedDivision}`)
            const data = await res.json();
            setDivisionData(data.data)

        })()
    } ,[selectedDivision]);

   

    const handleImageUpload = async(e) =>{
        e.preventDefault();
 
        const formData = new FormData();
        formData.append("image", e.target.files[0]);

        const result = await ImageUploadRequest(formData);
        if(result.status){
            setAdData({
                ...adData,
                images: [...adData.images, result.data.filename ]
        
            })
        }
       
        
    };



    const handleSelectDivision = async(e)=>{
        setSelectedDivision(e);
        setAdData({
            ...adData,
            division: e, 
        })
    }


    const handleSelectDistrict = async(e)=>{
        setDistrict(e);
        setAdData({
            ...adData,
            district: e, 
        })
       
    };

    const handleSelectUpazila =async(e) =>{
        setAdData({
            ...adData,
            upazilla: e, 
        })
    }

    const upazilla = divisionData?.find( dis => dis._id === district);



    const handleFormData = async(name, value) =>{
        setAdData({
            ...adData,
            [name]: value
        })

    }

    const sendFormData = async()=>{
        console.log(adData);
    }


    

    return (
        <section className='bg-white p-4 rounded-3'>
            <h3>Create New Ad</h3>
            <div className="row mt-3">
                <div className="col-md-6">
                    <label>Product Name</label>
                    <input onBlur={async(e) => handleFormData("name", e.target.value)} className='form-control' type="text" />
                </div>
                <div className="col-md-3">
                    <label> Price(tk)</label>
                    <input onBlur={async(e) => handleFormData("price", e.target.value)} className='form-control' type="text" />
                </div>
                <div className="col-md-3">
                    <label> Edition</label>
                    <input onBlur={async(e) => handleFormData("edition", e.target.value)} className='form-control' type="text" />
                </div>

            </div>
            <div className="row">
                <div className="col-md-3 mt-4">
                    <label>Select Division</label>
                    <select  defaultValue=""  onChange={async(e) => handleSelectDivision(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value="" disabled >Select  Division</option>
                            {
                                divisions && divisions.map( (item, index) => <option key={index} value={item["_id"]}>{item["division"]}</option> )
                            }
                    </select>

                </div>
                <div className="col-md-4 mt-4">
                    <label>Select District</label>
                    <select  defaultValue=""  onChange={async(e) => handleSelectDistrict(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value="" disabled >Select  District</option>
                            {
                                divisionData && divisionData.map( (item, index) => <option key={index} value={item["_id"]}>{item["district"]}</option> )
                            }
                    </select>

                </div>
                <div className="col-md-4 mt-4">
                    <label>Select Upazilla</label>
                    <select  defaultValue=""  onChange={async(e) =>handleSelectUpazila(e.target.value)}  className="form-select" aria-label="Default select example">
                        <option value="" disabled >Select  Upazilla</option>
                            {
                               upazilla?.upazilla?.map( (item, index) => <option key={index} value={item}>{item}</option>  )
                            }
                    </select>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-2">
                    <label className='form-label' >Condition</label> <br />
                        <input onChange={async() => handleFormData("condition", "used")} type="radio" name="condition"  id="used" />
                        <label className='form-check-label ps-2' htmlFor="used">Used </label>

                        <input onChange={async() => handleFormData("condition", "new")} type="radio"  name="condition"  id="new" className='ms-3' />
                        <label  className='form-check-label ps-2' htmlFor="new">New</label>
                </div>
                <div className="col-md-2">
                    <label className='form-label' >Negotiable</label> <br />
                        <input onChange={async() => handleFormData("negotiable", "yes")} type="radio" name="negotiable"  id="yes" />
                        <label className='form-check-label ps-2' htmlFor="yes">Yes </label>

                        <input onChange={async() => handleFormData("negotiable", "no")}  type="radio"  name="negotiable"  id="no" className='ms-3' />
                        <label className='form-check-label ps-2' htmlFor="no">No</label>
                </div>
                <div className="col-md-3">
                    <label className='form-label' >Brand</label> 
                    <input  onBlur={async(e) => handleFormData("brand", e.target.value)}  className='form-control' type="text"  />
                </div>
                <div className="col-md-3">
                    <label className='form-label' >Model</label> 
                    <input  onBlur={async(e) => handleFormData("model", e.target.value)}  className='form-control' type="text"  />
                </div>
                <div className="col-md-2">
                    <label>Select Category</label>
                    <select defaultValue=""  onChange={async(e) =>handleFormData("categoryID", e.target.value)}  className="form-select" aria-label="Default select example">
                        <option  value="" disabled >Select  Category</option>
                            {
                               Categories?.map( (item, index) => <option key={index} value={item["_id"]}>{item["name"]}</option>  )
                            }
                    </select>
                    
                </div>
                
            </div>
            <div className="row">
                <div className="col-12">
                    <label className='form-label' >Description</label> 
                    <textarea  onBlur={async(e) => handleFormData("description", e.target.value)}  className='form-control' name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-md-3">
                    <h6>Upload your images</h6>
                    <div className='d-flex align-items-center'>
                        <input onChange={handleImageUpload} name="image"  className='form-control my-2' type="file" /><span className='btn btn-danger ms-2'>Delete</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input onChange={handleImageUpload} name="image"  className='form-control my-2' type="file"  /><span className='btn btn-danger ms-2'>Delete</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input onChange={handleImageUpload} name="image"  className='form-control my-2' type="file"  /><span className='btn btn-danger ms-2'>Delete</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input onChange={handleImageUpload} name="image"  className='form-control my-2' type="file"  /><span className='btn btn-danger ms-2'>Delete</span>
                    </div>
                    <div className='d-flex align-items-center'>
                        <input onChange={handleImageUpload} name="image"  className='form-control my-2' type="file"  /><span className='btn btn-danger ms-2'>Delete</span>
                    </div>
                    
                </div>
            </div>
            


            <button onClick={sendFormData}  className='btn-post mt-4'>Create AD</button>

        </section>
    );
};

export default CreateAd;