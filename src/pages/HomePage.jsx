import { useEffect } from "react";
import CategorySection from "../compoments/HomePage/CategorySection/CategorySection";
import HeroSection from "../compoments/HomePage/HeroSection/HeroSection";
import CategoryStore from "../store/CategoryStore";
import StartMarketing from "../compoments/HomePage/StartMarketing/StartMarketing";




const HomePage = () => {
    const {CategoryRequest, Categories} = CategoryStore();
    useEffect(()=>{
        (async()=>{
            await CategoryRequest()
        })()



    } , [])
console.log(Categories);


    return (
        <>
        <HeroSection />
        <CategorySection />
        <StartMarketing />
         
        </>
    );
};

export default HomePage;