import './DetailsSlider.css'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import AdStore from '../../store/AdStore';





const DetailsSlider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { AdDetails} = AdStore();


    return (
        <div>
            <Swiper
                style={{
                '--swiper-navigation-color': '#000000',
                '--swiper-pagination-color': '#000000',
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                {
                    AdDetails?.images.map( (item, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <img  crossOrigin ="anonymous"   src={`${import.meta.env.VITE_URL}/${item}`} alt="Picture" />
                            </SwiperSlide>
                        )
                    })
                }
               
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {
                    AdDetails?.images.map( (item, index) => {
                        return(
                            <SwiperSlide key={index}>
                                <img  crossOrigin ="anonymous"   src={`${import.meta.env.VITE_URL}/${item}`} alt="Picture" />
                            </SwiperSlide>
                        )
                    })
                }
               
            </Swiper>
      
        </div>
    );
};

export default DetailsSlider;