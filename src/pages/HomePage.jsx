import { useEffect } from "react";
import CategorySection from "../compoments/HomePage/CategorySection/CategorySection";
import HeroSection from "../compoments/HomePage/HeroSection/HeroSection";
import CategoryStore from "../store/CategoryStore";
import StartMarketing from "../compoments/HomePage/StartMarketing/StartMarketing";
import AboutSection from "../compoments/HomePage/AboutSection/AboutSection";




const HomePage = () => {
    const {CategoryRequest} = CategoryStore();
    useEffect(()=>{
        (async()=>{
            await CategoryRequest()
        })()

    } , [])



    return (
        <>
        <HeroSection />
        <CategorySection />
        <StartMarketing />
        <AboutSection />
         
        </>
    );
};

export default HomePage;