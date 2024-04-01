import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layout/MainLayout";
import HomePage from "../../pages/HomePage";
import DashboardLayout from "../../layout/DashboardLayout";
import DashboardPage from "../../pages/DashboardPage";
import CreateAd from "../../compoments/Dashboard/CreateAd/CreateAd";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";



const router = createBrowserRouter([
    {
        path: "/",
        element:  <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
               
            },
            {
                path: "/login",
                element: <LoginPage />
               
            },
            {
                path: "/signup",
                element: <SignupPage />
               
            },
        
        
           


        ]

    },
    {
        path: "/dashboard", 
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPage />
            },
            {
                path: "/dashboard/create-ad",
                element: <CreateAd />
            },

        ]
    }
])

export default router;