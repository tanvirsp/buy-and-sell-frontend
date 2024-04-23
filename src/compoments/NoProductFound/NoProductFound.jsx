import './NoProductFound.css';
import box from "../../assets/images/icons/box.png"

const NoProductFound = () => {
    return (
        <div className='empty-box'>
            <img  src={box} alt="box Icon" />
            <h5>No Product Found</h5>
            
        </div>
    );
};

export default NoProductFound;