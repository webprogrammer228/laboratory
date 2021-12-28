import left_arrow from "../../assets/images/left-arrow.svg";
import eye from "../../assets/images/eye.svg";
import person from "../../assets/images/person.svg";
import '../../assets/scss/header/top.scss';

import { Link } from "react-router-dom";

function Topinfo() {
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
