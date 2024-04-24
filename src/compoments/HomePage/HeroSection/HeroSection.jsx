import './HeroSection.css';

import SearchBar from '../../Shared/SearchBar/SearchBar';


const HeroSection = () => {

    


  

    return (
        <section className='hero-section'>
            <div className='hero-info'>
                <h1>WHAT ARE YOU <br /> <span> LOOKING</span></h1>
                <SearchBar />
            </div>
            
        </section>
    );
};

export default HeroSection;