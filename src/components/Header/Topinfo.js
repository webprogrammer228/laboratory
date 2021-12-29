import left_arrow from "../../assets/images/left-arrow.svg";
import eye from "../../assets/images/eye.svg";
import person from "../../assets/images/person.svg";
import '../../assets/scss/header/top.scss';

import { Link } from "react-router-dom";

function Topinfo() {

  window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if(scrolled >= 80) {
      document.querySelector(".top-info").style.visibility = 'hidden';
      document.querySelector(".top-info").style.height = '0';
      document.querySelector(".top-info").style.marginTop = '-10px';
      document.querySelector(".top-info").style.transition = 'all .3s';
      
      document.querySelector(".bottom_info").style.visibility = 'hidden';
      document.querySelector(".bottom_info").style.height = '0';
      document.querySelector(".bottom_info").style.marginTop = '-150px';
      document.querySelector(".bottom_info").style.transition = 'all .5s';


      document.querySelector(".lab-header").style.height = '96px';
    }
    else {
      document.querySelector(".top-info").style.marginTop = '7px';
      document.querySelector(".top-info").style.height = '40px';
      document.querySelector(".top-info").style.visibility = 'visible';

      document.querySelector(".bottom_info").style.marginTop = '0px';
      document.querySelector(".bottom_info").style.height = '80px';
      document.querySelector(".bottom_info").style.visibility = 'visible';

      document.querySelector(".lab-header").style.height = '208px';
    }
  }


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
