import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdStore from "../store/AdStore";
import AdsContainer from "../compoments/AdsContainer/AdsContainer";
import PageTitle from "../compoments/PageTitle/PageTitle";
import SearchBar from "../compoments/Shared/SearchBar/SearchBar";
import AllCategoryList from "../compoments/AllCategoryList/AllCategoryList";

import ReactPaginate from 'react-paginate';


const SearchAdPage = () => {
    const {keyword} = useParams();
    const {SearchProductRequest} = AdStore();

    const [currentPage, setCurrentPage] = useState(1)
    const [perPageKey, setPerPageKey] = useState(2);

    useEffect( ()=>{
        (async()=>{
            await SearchProductRequest(currentPage, perPageKey, keyword);
        }  )()

    } , [keyword, currentPage])


    const handlePageClick = (data)=>{
        setCurrentPage(data.selected);
        console.log(currentPage);
    }

    const pageCount = 50
// 
    return (
        <section className="">
            <PageTitle title={`Search By: ${keyword}`} />
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <AdsContainer />
                        <div >
                            <ReactPaginate
                                breakLabel="..."
                                nextLabel="next >"
                                onPageChange={handlePageClick}
                                pageRangeDisplayed={5}
                                pageCount={pageCount}
                                previousLabel="< previous"
                                renderOnZeroPageCount={null}
                                containerClassName="pagination justify-content-center my-4 "
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                nextClassName="page-item"
                                previousLinkClassName="page-link"
                                nextLinkClassName="page-link"
                                breakClassName="page-item"
                                breakLinkClassName="page-link"
                                activeClassName="active"

                            />
                        </div>
                        
                    </div>
                    <div className="col-md-3">
                        <div className="bg-white p-4 rounded-4">
                            <SearchBar /> <br />
                            <AllCategoryList />
                        </div>


                    </div>
                </div>
                <div>
                   
                
               
                </div>
            </div>
           
        </section>
    );
};

export default SearchAdPage;