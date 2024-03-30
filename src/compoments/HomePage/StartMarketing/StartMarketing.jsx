import './StartMarketing.css';
import eComImg from '../../../assets/images/ecom.png'

const StartMarketing = () => {
    return (
        <section className='container'>
            <div className='smart-marketing-section'>
                <div className='w-50'>
                    <img className='img-fluid'  src={eComImg} alt="ecom" />
                </div>
                <div className='w-50 ps-5'>
                    <h3 className='section-title'>Start making <span>money!</span> </h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores. Alias et neque laboriosam dolor ratione itaque at laborum ut.</p>
                    <button className='btn-post mt-3'>Post Your Ad</button>
                </div>
            </div>
            
        </section>
    );
};

export default StartMarketing;