import './Footer.css';

const Footer = () => {
    return (
        <footer >
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <h4 className='footer-logo'>BUY & SELL</h4>
                        
                    </div>
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className='quick-links'>
                            <li> <a href="#">About Us</a> </li>
                            <li> <a href="#">Terms and Conditions</a> </li>
                            <li> <a href="#">Privacy policy</a> </li>
                            <li> <a href="#">Blog</a> </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Help & Support</h5>
                        <ul className='quick-links'>
                            <li> <a href="#">FAQ</a> </li>
                            <li> <a href="#">Stay safe</a> </li>
                            <li> <a href="#">Contact Us</a> </li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h5>Profile</h5>
                        <ul className='quick-links'>
                            <li> <a href="#">Login</a> </li>
                            <li> <a href="#">Profile</a> </li>
                            <li> <a href="#">My Favourite</a> </li>
                        </ul>
                    </div>
                </div>
                
            
            </div>
        </footer>
    );
};

export default Footer;