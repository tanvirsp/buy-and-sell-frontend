import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json"

const CategorySkeleton = () => {
    return (
        <section className='container'>
            <div className='category-section'>
                <h3 className='section-title text-center'>Browse items by <span>category</span></h3>

                {/* category  started */}
                <div className='row'>

                    {
                        Array.from({length:8}).map ( (item, index) =>{
                            return(
                                <div key={index} className="col-md-3">
                                    <div className="category" >
                                        <Lottie className="w-25" animationData= {ImagePlaceholder} loop={true} />
                                        <h6 className="w-75"><Skeleton count={2} /></h6>
                                    </div>
                                </div>
                            )
                        })
                    }
                   
                    

                </div>
            </div>
            {/* category  end */}
           
            
        </section>
    );
};

export default CategorySkeleton;