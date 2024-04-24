import AdStore from '../../../store/AdStore';
import './SearchBar.css'
import { Link } from "react-router-dom";
import { IoArrowForwardCircle } from "react-icons/io5";


const SearchBar = () => {

    const {SearchKeywordRequest, SearchKeyword } = AdStore();

    return (
        <div className='search-bar'>
            <input onChange={(e)=>{SearchKeywordRequest(e.target.value)}} className='form-control p-3 rounded-5' type="text" placeholder='Search your product'/>
                <Link to={SearchKeyword.length > 0 ? `/by-keyword/${SearchKeyword}`: "/" } >  <IoArrowForwardCircle  /> </Link>
        </div>
    );
};

export default SearchBar;