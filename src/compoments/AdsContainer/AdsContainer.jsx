import './AdsContainer.css';
import AdStore from "../../store/AdStore";
import { useNavigate } from 'react-router-dom';



const AdsContainer = () => {
    const {AdByCategory} = AdStore();
    const navigate = useNavigate();



    return (
        <div>
            {
                AdByCategory.map( (item, index) =>{
                    return(
                        <div onClick={()=> navigate(`/details/${item._id}`)} className="singleAd bg-white p-4 rounded-4" key={index}> 
                            <div>
                                <img className='img-thumbnail' crossOrigin ="anonymous"   src={`${import.meta.env.VITE_URL}/${item["images"][0]}`} alt="Picture" />
                            </div>
                            <div className='ad-info bg-white rounded-4'>
                                <h4>{item["name"]} <span className='badge rounded-pill bg-danger'>{item["condition"]} </span> </h4>
                                <small> {item["category"]["name"]}</small><br />
                                <small>{item.upazilla}, {item.district}, {item.division} </small>
                                <h5>Tk {item.price}</h5>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AdsContainer;