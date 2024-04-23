import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdStore from "../store/AdStore";
import AdsContainer from "../compoments/AdsContainer/AdsContainer";
import PageTitle from "../compoments/PageTitle/PageTitle";
import AllCategoryList from "../compoments/AllCategoryList/AllCategoryList";
import CategoryStore from "../store/CategoryStore";
import NoProductFound from "../compoments/NoProductFound/NoProductFound";


const ProductByCategoryPage = () => {
    const {categoryID} = useParams();
    const {AdByCategoryRequest, AdByCategory} = AdStore();
    const {SingleCategoryRequest} = CategoryStore();

    const [catInfo, setCatInfo] = useState({})



    useEffect(()=>{
        (async()=>{
            await AdByCategoryRequest(categoryID);
            const categoryInfo = await SingleCategoryRequest(categoryID);
            setCatInfo(categoryInfo);
        })()
    } ,[categoryID])


    if(AdByCategory === null){
        return <h4>Loading...</h4>
    }

    return (
        <section>
           <div className="container">
                <div className="row">
                    <div className="col-12">
                        <PageTitle title={catInfo?.data?.name} />
                    </div>
                </div>
               <div className="row ">
                    <div className="col-md-9">
                        {
                           AdByCategory.length === 0 ? <NoProductFound /> :
                           <AdsContainer />
                        }
                       
                    </div>
                    <div className="col-md-3">
                        <div className="bg-white p-4 rounded-4">
                            <AllCategoryList />
                        </div>
                            
                    </div>
               </div>

           </div>
        </section>
    );
};

export default ProductByCategoryPage;