import { useEffect, useState } from 'react';
import './EditAd.css';
import { useParams } from 'react-router-dom';
import AdStore from '../../../store/AdStore';
import toast from 'react-hot-toast';
import CategoryStore from '../../../store/CategoryStore';
import { RxCross1 } from "react-icons/rx";



const EditAd = () => {
    const {id} = useParams();
    
    const [divisions, setDivisions] = useState([]);
    const [selectedDivision, setSelectedDivision] = useState("");
    const [divisionData, setDivisionData] = useState([]);
    const[district, setDistrict] = useState("");
    
    const [images, setImages] = useState([])
    const [adData, setAdData] = useState({});


    
    //Global Store
    const { MultiImageUploadRequest, UpdateAdRequest, AdDetailsRequest, AdDetails} = AdStore();
    const {Categories, CategoryRequest} = CategoryStore()


    useEffect(()=>{

        ( async()=>{
            setImages([])
            await AdDetailsRequest(id)
            setImages(AdDetails["images"])
            setAdData(AdDetails)


        } )()

    } ,[id]);




    
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

   
    

    
 


    
    if(AdDetails === null){
        return <p> Loading...</p>
    }



    const handleImageUpload = async(e) =>{

        const selectedFiles = e.target.files;
        const selectedFilesArray = Array.from(selectedFiles);

        if(selectedFilesArray.length > 5){
            toast.error("Miximum 5 Images you can upload")
        } else {
            const formData = new FormData();
            selectedFilesArray.map( data =>{
                formData.append("image", data);
            })
        
            const result = await MultiImageUploadRequest(formData);
            if(result.status){
                const fileName = result.data.map(file => file.filename );
                setImages(fileName);
            }   
        }


    };

    
    const handleDeleteImage = index =>{
        images.splice(index,1);
        setImages([...images]);
    }


    

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
        const allData = {
            ...adData,
            images: images
        };
        const result = await UpdateAdRequest(allData._id, allData);
        if(result.status ==="success"){
            toast.success("Updated Successfully")
        } else {
            toast.error("Something went wrong!!")
        }

        console.log(allData);
    }


    return (
        <section className='bg-white p-4 rounded-3'>
        <h3>Edit Ad</h3>
        <div className="row mt-3">
            <div className="col-md-6">
                <label>Product Name</label>
                <input defaultValue={AdDetails.name} onBlur={async(e) => handleFormData("name", e.target.value)} className='form-control' type="text" />
            </div>
            <div className="col-md-3">
                <label> Price(tk)</label>
                <input defaultValue={AdDetails.price}  onBlur={async(e) => handleFormData("price", e.target.value)} className='form-control' type="text" />
            </div>
            <div className="col-md-3">
                <label> Edition</label>
                <input defaultValue={AdDetails.edition}  onBlur={async(e) => handleFormData("edition", e.target.value)} className='form-control' type="text" />
            </div>

        </div>
        <div className="row">
            <div className="col-md-4 mt-4">
                <label>Select Division</label>
                <select   defaultValue=""  onChange={async(e) => handleSelectDivision(e.target.value)} className="form-select" aria-label="Default select example">
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
                    <input onChange={async() => handleFormData("condition", "used")} type="radio" name="condition"  id="used"  checked={AdDetails.condition === "used" ? true: false } />
                    <label className='form-check-label ps-2' htmlFor="used">Used </label>

                    <input onChange={async() => handleFormData("condition", "new")} type="radio"  name="condition"  id="new" className='ms-3'  checked={AdDetails.condition === "new" ? true: false } />
                    <label  className='form-check-label ps-2' htmlFor="new">New</label>
            </div>
            <div className="col-md-2">
                <label className='form-label' >Negotiable</label> <br />
                    <input onChange={async() => handleFormData("negotiable", "yes")} type="radio" name="negotiable"  id="yes" checked={AdDetails.negotiable === "yes" ? true: false } />
                    <label className='form-check-label ps-2' htmlFor="yes">Yes </label>

                    <input onChange={async() => handleFormData("negotiable", "no")}  type="radio"  name="negotiable"  id="no" className='ms-3' checked={AdDetails.negotiable === "no" ? true: false }/>
                    <label className='form-check-label ps-2' htmlFor="no">No</label>
            </div>
            <div className="col-md-3">
                <label className='form-label' >Brand</label> 
                <input defaultValue={AdDetails?.brand}  onBlur={async(e) => handleFormData("brand", e.target.value)}  className='form-control' type="text"  />
            </div>
            <div className="col-md-3">
                <label className='form-label' >Model</label> 
                <input defaultValue={AdDetails?.model}   onBlur={async(e) => handleFormData("model", e.target.value)}  className='form-control' type="text"  />
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
                <textarea defaultValue={AdDetails?.description}   onBlur={async(e) => handleFormData("description", e.target.value)}  className='form-control' name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-md-3">
            <label className='file-label'>+ Add Images  <br /> <span>up to 5 images</span>
                <input type="file"   name="image"onChange={handleImageUpload} 
                multiple
                />
            </label>


            </div>
        </div>
        <div className="row mt-3">
            {
               images?.length> 0 && images?.map( (item, index) => {
                    return(
                    <div  key={index}  className="col-md-2">
                        <div className='uploaded-img'> 
                        <div className='img-overlay'></div>
                            <img  src={`http://localhost:5000/${item}`} alt="image"  crossOrigin ="anonymous"/>
                            <span onClick={()=>handleDeleteImage(index)} className='cross-icon'> <RxCross1 /></span>
                        </div>
                    </div>
                    )
                    
                }  )
            }
        
  
        </div>


        <button onClick={sendFormData}  className='btn-post mt-4'>Update Ad</button>

    </section>
    );
};

export default EditAd;