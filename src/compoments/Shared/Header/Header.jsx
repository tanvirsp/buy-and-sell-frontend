import './Header.css';

const Header = () => {
    return (
        <header className='container' >
            <div><h4 className='logo'>BUY & SELL</h4></div>
            <nav>
                <ul>
                    <li>
                        <a href="#">All Ads</a>
                    </li>
                    <li>
                        <a href="#">About US</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a className='btn-post' href="#">Post Your Ad</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;