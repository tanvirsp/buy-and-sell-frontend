import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../../Layout/MainLayout";
import HomePage from "../../pages/HomePage";
import DashboardLayout from "../../layout/DashboardLayout";
import DashboardPage from "../../pages/DashboardPage";
import CreateAd from "../../compoments/Dashboard/CreateAd/CreateAd";
import LoginPage from "../../pages/LoginPage";
import SignupPage from "../../pages/SignupPage";
import MyAds from "../../compoments/Dashboard/MyAds/MyAds";
import AdDetails from "../../compoments/AdDetails/AdDetails";
import EditAd from "../../compoments/Dashboard/EditAd/EditAd";
import ProductByCategoryPage from "../../pages/ProductByCategoryPage";



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
            {
                path: "/details/:id",
                element: <AdDetails />
               
            },
            {
                path: "/product-by-category/:categoryID",
                element: <ProductByCategoryPage />
               
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
            {
                path: "/dashboard/my-ads",
                element: <MyAds />
            },
            {
                path: "/dashboard/edit-ad/:id",
                element: <EditAd />
            },

        ]
    }
])

export default router;