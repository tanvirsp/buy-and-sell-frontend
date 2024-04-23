import './CategorySection.css';
import CategoryStore from '../../../store/CategoryStore';
import CategorySkeleton from '../../../skeletons/CategorySkeleton';
import { useNavigate } from 'react-router-dom';


const CategorySection = () => {
    const navigate = useNavigate()
    const {Categories} = CategoryStore();

    if(Categories === null){
        return <CategorySkeleton />
    }

    return (
        <section className='container'>
            <div className='category-section'>
                <h3 className='section-title text-center'>Browse items by <span>category</span></h3>

                {/* category  started */}
                <div className='row'>
                    {
                        Categories.length > 0 ? 
                            Categories.map( (item, index) => {
                                return(
                                    <div onClick={()=> navigate(`/product-by-category/${item["_id"]}`)} key={index} className="col-md-3">
                                        <div className='category'>
                                            <img src={item["image"]} alt="Call Icon" />
                                            <div>
                                                <h6>{item["name"]}</h6>
                                                {/* <small className='ad-count'>550 Ads</small> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            } )
                         : <div className='col-12'> <h3>No Cateroy Avaiable</h3> </div>
                    }
                    
                    

                </div>
            </div>
            {/* category  end */}
           
            
        </section>
    );
};

export default CategorySection;