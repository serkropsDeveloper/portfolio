import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const ImageSlider = ({ carousel }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      loop={true}
      autoplay={{ delay: 5000 }}
      speed={2000}
      className="w-full"
    >
      {carousel.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center w-full">
            <img
              src={image.carousel_image.url}
              alt={`Slide ${index}`}
              className="max-w-full max-h-[100vh] object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
