import './AboutSection.css';
import team from '../../../assets/images/team.jpg'

const AboutSection = () => {
    return (
        <section className='container'>
            <div className='about-section'>
                
                <div className='w-50 ps-5 text-end me-5'>
                    <h3 className='section-title'>ABOUT <span>BUY & SELL</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores. Alias et neque laboriosam dolor ratione itaque at laborum ut.</p>
                    <button className='btn-post mt-3'>VIEW DETAILS</button>
                </div>
                <div className='w-50'>
                    <img className='img-fluid rounded-4'  src={team} alt="ecom" />
                </div>
            </div>
            
        </section>
    );
};

export default AboutSection;