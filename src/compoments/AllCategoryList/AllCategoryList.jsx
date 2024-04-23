import { useEffect } from 'react';
import CategoryStore from '../../store/CategoryStore';
import './AllCategoryList.css'
import { useNavigate } from 'react-router-dom';


const AllCategoryList = () => {

    const {CategoryRequest, Categories} = CategoryStore();
    const navigate = useNavigate()
 

    useEffect(()=>{

        ( async()=>{
            Categories == null && await CategoryRequest()
        } )()

    } ,[]);



    return (
        <div>
            <h6 className='category-title'>All Categories :</h6>
            <ul className='category-list'>
                {
                    Categories?.map( (item, index) => <li onClick={()=> navigate(`/product-by-category/${item["_id"]}`)} key={index}>{item.name}</li> )
                }

            </ul>
        </div>
    );
};

export default AllCategoryList;