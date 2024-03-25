import './StartMarketing.css';
import eComImg from '../../../assets/images/ecom.png'

const StartMarketing = () => {
    return (
        <section className='container'>
            <div className='smart-marketing-section'>
                <div className='w-50'>
                    <img className='img-fluid'  src={eComImg} alt="ecom" />
                </div>
                <div className='w-50'>
                    <h5>Start making money!</h5>
                    <p>Do you have something to sell? Post your first ad and start making money!</p>
                </div>
            </div>
            
        </section>
    );
};

export default StartMarketing;