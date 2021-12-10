import banner_desktop from "../../assets/images/banner-desktop.jpg";
import "../../assets/scss/secondScreen/analyzies.scss";
import Carousel from "react-bootstrap/Carousel";

const Analyzies = () => {
  return (
    <div className="first-screen">
      <div className="first-screen__left-banner"></div>
      <div className="first-screen__right-slider">
        <img
          className="desktop-banner"
          src={banner_desktop}
          alt="banner_desktop"
        />
        <div className="right-slider__bottom"></div>
      </div>
      <Carousel>
        
      </Carousel>
    </div>
  );
};

export default Analyzies;
