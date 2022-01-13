import "../../assets/scss/Home/header/menu.scss";
import "../../assets/scss/Home/header/middle.scss";
import "../../assets/scss/Home/header/bottom.scss";
import telephone_icon from "../../assets/images/telephone_for_mobilev.svg";
import email_mobile from "../../assets/images/email_for_mobilev.svg";

const Menu = ({ active, setActive, patient, setPatientActive }) => {
  return (
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}
    >
      <div className="blur"></div>
      <div className="menu-block">
        <div className="menu__content" onClick={(e) => e.stopPropagation()}>
          <div className="nav">
            <ul className="nav-menu">
              <a href="#" className="nav-menu-item-link">
                <li
                  className={patient ? "nav-menu-item hidden" : "nav-menu-item"}
                >
                  Личный кабинет
                </li>
              </a>
              <a href="#" className="nav-menu-item-link">
                <li
                  className={patient ? "nav-menu-item hidden" : "nav-menu-item"}
                >
                  Анализы
                </li>
              </a>

              <a href="#" className="nav-menu-item-link">
                <li
                  className={patient ? "nav-menu-item hidden" : "nav-menu-item"}
                >
                  Результаты
                </li>
              </a>

              <a href="#" className="nav-menu-item-link">
                <li
                  className={patient ? "nav-menu-item hidden" : "nav-menu-item"}
                >
                  Адреса
                </li>
              </a>

              <li
                className={patient ? "nav-menu-item active" : "nav-menu-item"}
                onClick={() => setPatientActive(!patient)}
                href="#patient"
              >
                <span name="patient" id="patients">
                  Пациенты
                </span>
              </li>
              {/* dropdown block */}
              <div
                className={patient ? "patient-block active" : "patient-block"}
              >
                <a href="#" className="nav-menu-item-link">
                  <li className="nav-menu-item">Анализы на дому</li>
                </a>
                <a href="#" className="nav-menu-item-link">
                  <li className="nav-menu-item">После COVID-19</li>
                </a>
                <a href="#" className="nav-menu-item-link">
                  <li className="nav-menu-item">Дородовая диагностика</li>
                </a>
                <a href="#" className="nav-menu-item-link">
                  <li className="nav-menu-item">Адреса лабораторий</li>
                </a>
              </div>
              {/* end dropdown block */}

              <a href="#" className="nav-menu-item-link">
                <li
                  className={patient ? "nav-menu-item hidden" : "nav-menu-item"}
                >
                  Контакты
                </li>
              </a>
            </ul>
          </div>

          <div className="contacts">
            <p className="description">Единая справочная</p>

            <div className="telephone">
              <a href="tel:tel:+73812296836">
                <img
                  className="telephone_icon"
                  src={telephone_icon}
                  alt="telephone_icon"
                />
              </a>
              <a href="tel:tel:+73812296836">
                <span className="nubmer_mobile">+7 (3812) 29-68-36</span>
              </a>
            </div>

            <div className="email">
              <a href="mailto:info@euromed-omsk.ru">
                <img
                  className="email_icon"
                  src={email_mobile}
                  alt="email_mobile"
                />
              </a>
              <a href="mailto:info@euromed-omsk.ru">
                <span className="nubmer_mobile">info@euromed-omsk.ru</span>
              </a>
            </div>
            <form action="#">
              <button className="appointment">
                <span>Записаться на прием</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
