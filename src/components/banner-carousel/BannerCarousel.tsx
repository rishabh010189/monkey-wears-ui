import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const BannerCarousel = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 3000 }} loop>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_1_1_Qzig4te.jpg?w=1500&dpr=1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/homepage_1_qqu8zra.jpg?w=1500&dpr=1" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
