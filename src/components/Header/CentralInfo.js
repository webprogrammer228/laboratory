import "../../assets/scss/header/middle.scss";
import lg_logo from "../../assets/images/logo.svg";
import sm_logo from "../../assets/images/sm_logo.svg";
import Menu from "./Menu";
import { useState } from "react";

function CentralInfo() {
  const [menuActive, setMenuActive] = useState(false);
  const [burgerActive, setBurgerActive] = useState(false);
  const [patientActive, setPatientActive] = useState(false);
  return (
    <div className="center_info">
      <div className="center_info__left-block">
        <div className="burger" onClick={() => setBurgerActive(!burgerActive)}>
          <div
            className={menuActive ? "burger-btn active" : "burger-btn"}
            onClick={() => setMenuActive(!menuActive)}
          >
            <span></span>
          </div>
        </div>
        <Menu
          active={menuActive}
          setActive={setMenuActive}
          patient={patientActive}
          setPatientActive={setPatientActive}
        />
        <img className="lg-logo" src={lg_logo} alt="logo" />
        <img className="sm-logo" src={sm_logo} alt="logo" />
      </div>

      <div className="center_info__right-block">
        <div className="phone">
          <p className="phone__title">Лаборатория «Евромед»</p>
          <a className="phone__number" href="tel:+73812302010">
            <span className="added">(+7 3812)</span>{" "}
            <span className="primary">30-20-10</span>
          </a>
        </div>
        <button className="appointment">Записаться на анализ</button>
        <a className="phone__number" href="tel:+73812302010">
          <button className="appointment-mini"></button>
        </a>
      </div>
    </div>
  );
}

export default CentralInfo;
