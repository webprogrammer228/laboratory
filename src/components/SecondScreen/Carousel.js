import banner_desktop from "../../assets/images/banner-desktop.jpg";
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
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="desktop-banner"
              src={banner_desktop}
              alt="banner_desktop"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="desktop-banner"
              src={banner_desktop}
              alt="banner_desktop"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="desktop-banner"
              src={banner_desktop}
              alt="banner_desktop"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="right-slider__bottom"></div>
    </>
  );
};

export default CarouselElem;
