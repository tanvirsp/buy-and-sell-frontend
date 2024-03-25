import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json"
import Skeleton from "react-loading-skeleton";


const OneAndHalfSkeleton = () => {
    return (
        <section className="container">
        <div className="row my-4">
            <div className="col-md-4">
                <Lottie className="w-75" animationData= {ImagePlaceholder} loop={true} />
                <Skeleton count={1} />
            </div>
            <div className="col-md-8">
                <div className="row">
                    {
                        Array.from({length:7}).map ( (item, index) =>{
                            return(
                                <div key={index} className="col-md-12">
                                    <div>  
                                        <Skeleton count={1} />
                                    </div>  
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        </div>
    </section>
    );
};

export default OneAndHalfSkeleton;