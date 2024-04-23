/* eslint-disable react/prop-types */
import './PageTitle.css'

const PageTitle = ({title}) => {
    return (
        <div className='page-title'>
            <h1>{title}</h1>
        </div>
    );
};

export default PageTitle;