import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../../assets/scss/secondScreen/popularMobile.scss";
// import "../../assets/scss/secondScreen/popular.scss"

const PopularMobile = () => {
  const slides = [];
  for (let i = 0; i < 7; i += 1) {
    slides.push(
        <SwiperSlide key={`slide-${i}`}>
        <div className="popular-services-item">
          <p className="popular-services-item-text">
            Диагностика диабета, {"\n"} биохимическая
          </p>
          <div className="popular-services-item-hovered">
            <p className="dotted-price">
              <s>1450 &#8381;</s>
            </p>
            <p className="price">1450 &#8381;</p>
            <p className="popular-services-item-hovered-title">
              TORCH-комплекс, базовый
            </p>
            <p className="popular-services-item-hovered-subtitle">
              Включает определение антител классов IgM и IgG к возбудителям
              группы TORCH-инфекций
            </p>
          </div>
        </div>
      </SwiperSlide>
    );
  }

  return (
    <div className="popular-services-mobile">
      <React.Fragment>
        <Swiper id="main" spaceBetween={8} slidesPerView={'auto'}> 
          {slides}
        </Swiper>
      </React.Fragment>
    </div>
  );
};

export default PopularMobile;
