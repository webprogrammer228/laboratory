import banner_desktop from "../../assets/images/banner-desktop.jpg";
import banner_mobile from "../../assets/images/mobile-banner.jpg";
import { Carousel } from "react-bootstrap";
import "../../assets/scss/secondScreen/_carousel.scss";

const CarouselElem = () => {
  return (
    <>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="desktop-banner"
              src={banner_desktop}
              alt="banner_desktop"
            />
            <img
              className="mobile-banner"
              src={banner_mobile}
              alt="banner_mobile"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="desktop-banner"
              src={banner_desktop}
              alt="banner_desktop"
            />
            <img
              className="mobile-banner"
              src={banner_mobile}
              alt="banner_mobile"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="desktop-banner"
              src={banner_desktop}
              alt="banner_desktop"
            />
            <img
              className="mobile-banner"
              src={banner_mobile}
              alt="banner_mobile"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="desktop-banner"
              src={banner_desktop}
              alt="banner_desktop"
            />
            <img
              className="mobile-banner"
              src={banner_mobile}
              alt="banner_mobile"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="right-slider__bottom"></div>
    </>
  );
};

export default CarouselElem;
