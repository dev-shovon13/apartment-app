import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import { BsHeart } from "react-icons/bs";

const ApartmentImageCarousel = ({ images }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      grabCursor={true}
      className="mySwiper"
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
      {images.map((image, i) => {
        return (
          <SwiperSlide key={i}>
            <img src={image} alt="" className="w-full" />
            <button className="absolute top-3 right-3 bg-black opacity-40 hover:opacity-50 rounded-lg text-white p-2">
              <BsHeart />
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ApartmentImageCarousel;
