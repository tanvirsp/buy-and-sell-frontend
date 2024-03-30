import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layout/MainLayout";
import HomePage from "../../pages/HomePage";
import DashboardLayout from "../../layout/DashboardLayout";
import DashboardPage from "../../pages/DashboardPage";
import CreateAd from "../../compoments/Dashboard/CreateAd/CreateAd";



const router = createBrowserRouter([
    {
        path: "/",
        element:  <MainLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
               
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