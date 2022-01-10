import left_arrow from "../../assets/images/left-arrow.svg";
import eye from "../../assets/images/eye.svg";
import person from "../../assets/images/person.svg";
import "../../assets/scss/header/top.scss";

import { Link } from "react-router-dom";

function Topinfo() {
  window.onscroll = function () {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled >= 80 && window.innerWidth > 993) {
      document.querySelector(".lab-header").classList.add("large");
    } else if (
      scrolled >= 80 &&
      window.innerWidth < 993 &&
      window.innerWidth > 553
    ) {
      document.querySelector(".lab-header").classList.remove("large");
      document.querySelector(".lab-header").classList.add("md");
    } else if (scrolled >= 80 && window.innerWidth < 552) {
      document.querySelector(".lab-header").classList.remove("md");
      document.querySelector(".lab-header").classList.add("small");
    } else {
      document.querySelector(".lab-header").classList.remove("md");
      document.querySelector(".lab-header").classList.remove("small");
      document.querySelector(".lab-header").classList.remove("large");
    }
  };

  return (
    <>
      <div className="top-info">
        <div className="top-info_left-block">
          <img
            className="top-info_left-block__left-arrow"
            src={left_arrow}
            alt="arrow"
          />
          <Link className="link-back" to="/">
            Назад на главную
          </Link>
        </div>
        <div className="top-info_right-block">
          <img className="eye" src={eye} alt="eye" />
          <div className="cabinet">
            <img className="person" src={person} alt="person" />
            <Link className="link-cabinet" to="/">
              Личный кабинет
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topinfo;
