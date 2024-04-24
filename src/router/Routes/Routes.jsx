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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../../compoments/Dashboard/Profile/Profile";
import ResetForm from "../../compoments/ResetForm/ResetForm";
import ResetVerifyOtpForm from "../../compoments/ResetVerifyOtpForm/ResetVerifyOtpForm";
import ChangePasswordForm from "../../compoments/ChangePasswordForm/ChangePasswordForm";
import AdByCategoryPage from "../../pages/AdtByCategoryPage";
import SearchAdPage from "../../pages/SearchAdPage";
import Users from "../../compoments/Dashboard/Users/Users";
import AllAds from "../../compoments/Dashboard/AllAds/AllAds";



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
                path: "/ad-by-category/:categoryID",
                element: <AdByCategoryPage />
               
            },
            {
                path: "/reset-form",
                element: <ResetForm />
               
            },
            {
                path: "/reset-verify-otp",
                element: <ResetVerifyOtpForm />
               
            },
            {
                path: "/change-password-form",
                element: <ChangePasswordForm />
               
            },
            {
                path: "/by-keyword/:keyword",
                element: <SearchAdPage />
               
            },
        
        
           


        ]

    },
    {
        path: "/dashboard", 
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
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
            {
                path: "/dashboard/profile",
                element: <Profile />
            },
            {
                path: "/dashboard/users",
                element: <Users />
            },
            {
                path: "/dashboard/all-ads",
                element: <AllAds />
            },

        ]
    }
])

export default router;