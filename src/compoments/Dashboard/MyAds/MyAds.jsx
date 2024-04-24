import { useEffect } from 'react';
import AdStore from '../../../store/AdStore';
import './MyAds.css';
import { Table } from 'react-bootstrap';
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { GrView } from "react-icons/gr";

import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const MyAds = () => {
    const {MyAdsRequest,  MyAds, DeleteAdRequest} = AdStore();
    const navigate =useNavigate();

    useEffect(()=>{

        ( async()=>{
            await MyAdsRequest()
        } )()

    } ,[]);


    const handleDelete =async(id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                (async()=>{
                   const result = await DeleteAdRequest(id)
                   if(result["status"] ==="success"){
                    await MyAdsRequest();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Category has been deleted.",
                        icon: "success"
                      });
                }
                })()
 
            }
          });
    };
    const handleViewDetails =(id)=>{
        navigate(`/details/${id}`)
    }


   
    if(MyAds === null){
        return <p>Loading...</p>
    }
    
    return (
        <div className='bg-white p-5 rounded-2'>
            <h1>My Ads</h1>
            <Table striped bordered hover className="align-middle">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Thumbnail</th>
                        <th>Ad Title</th>
                        <th>Post Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        MyAds.length === 0 ?  "You did not publish add yet" : 
                        MyAds.map( (item, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img  crossOrigin ="anonymous"   className="thumb " src={`${import.meta.env.VITE_URL}/${item.images[0]}`} alt="Picture" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.createdAt.split("T")[0]}</td>
                                    <td>{item.status}</td>
                                    <td>
                                    <button onClick={async()=>handleViewDetails(item["_id"])} className="btn btn-warning"> <GrView/> </button>  
                                    <button onClick={async()=> navigate(`/dashboard/edit-ad/${item["_id"]}`)   } className="btn btn-success ms-2"><CiEdit /> </button>  
                                    <button onClick={async()=>handleDelete(item["_id"])} className="btn btn-danger ms-2"><MdOutlineDeleteForever /> </button>  
                                    </td>
                                </tr>
                            )
                        } )   
                    }
                    
                    
                </tbody>
            </Table>
        </div>
    );
};

export default MyAds;