import { useParams } from 'react-router-dom';
import './AdDetails.css'
import { useEffect } from 'react';
import AdStore from '../../store/AdStore';
import DetailsSlider from '../DetailsSlider/DetailsSlider';
import CategoryStore from '../../store/CategoryStore';
import AllCategoryList from '../AllCategoryList/AllCategoryList';







const AdDetails = () => {
    const {id} = useParams();
    const {AdDetailsRequest, AdDetails} = AdStore();
    const {CategoryRequest, Categories} = CategoryStore();
 

    


    useEffect(()=>{

        ( async()=>{
            await AdDetailsRequest(id)
            Categories == null && await CategoryRequest()
        } )()

    } ,[id]);


    if(AdDetails === null){
        return <p>Loading...</p>
    }


    const {name, brand, description} = AdDetails


    return (
        <section className='container'>
            <div className='details-container'>
                <div className="row">
                    <div className="col-md-9">
                        <DetailsSlider />
                        
                        <div className='product-info d-md-flex  justify-content-between mb-3'>
                            <div>
                                <p>Product Name: <b>{name}</b></p>
                                <p>Brand: <b>{brand}</b></p>
                                <p>Model: <b>{brand}</b></p>
                                <p>Edition: <b>{brand}</b></p>
                                <p>Districts: <b>{brand}</b></p>
                                <p>Posted Ads Date: <b>{brand}</b></p>
                            </div>
                            <div>
                                <p>Condition: <b>{name}</b></p>
                                <p>Authenticity: <b>{brand}</b></p>
                                <p>Model: <b>{brand}</b></p>
                                <p>Category: <b>{brand}</b></p>
                                <p>Sub-Districts: <b>{brand}</b></p>
                                <p>Email: <b>{brand}</b></p>
                            </div>
                        </div>
                        <p className='mb-2'><strong>Description:</strong> </p>
                        <p>{description}</p>

                   
                       
                        

                    </div>
                    <div className="col-md-3 p-4 rounded-4">
                        <p>Sales by: </p>
                        <hr />
                        <h6 className='btn-post'>Number for Call</h6>
                        <h3 className='my-2'><b>01722199479</b></h3>
                        <AllCategoryList />

                    </div>
                </div>

            </div>
            
        </section>
    );
};

export default AdDetails;