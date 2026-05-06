import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

const BannerCarousel = ({ category = 'home' }: { category?: string }) => {
  const BASE_URL = 'https://d2n41bjlvqia14.cloudfront.net';

  return (
    <div className="w-full overflow-hidden">
      <Swiper modules={[Navigation, Autoplay]} navigation autoplay={{ delay: 3000 }} loop>
        {[1, 2, 3].map((i) => (
          <SwiperSlide>
            <div className="flex justify-center items-center">
              <img src={`${BASE_URL}/banner/${category}/banner_${i}.avif`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
