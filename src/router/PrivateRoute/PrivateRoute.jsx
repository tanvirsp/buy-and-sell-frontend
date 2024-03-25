/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoute = ({children}) => {
    const user = true
    
    
    const location = useLocation();

    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;