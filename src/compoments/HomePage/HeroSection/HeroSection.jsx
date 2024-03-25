import './HeroSection.css';
import { IoArrowForwardCircle } from "react-icons/io5";


const HeroSection = () => {
    return (
        <section className='hero-section'>
            <div className='hero-info'>
                <h1>WHAT ARE YOU <br /> <span> LOOKING</span></h1>
                <div className='search-bar'>
                    <input className='form-control mt-5 p-3 rounded-5' type="text" name="" id="" />
                     <IoArrowForwardCircle /> 
                </div>
            </div>
            
        </section>
    );
};

export default HeroSection;