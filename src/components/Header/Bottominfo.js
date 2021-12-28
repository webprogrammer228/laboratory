import { Link } from "react-router-dom";
import search from "../../assets/images/search.svg";
import "../../assets/scss/header/bottom.scss";

function Bottominfo() {
  return (
    <div className="bottom_info">
      <div className="search">
        <input
          className="index_search"
          type="text"
          name="search"
          placeholder="Найти услугу или врача..."
        />
        <img src={search} alt="search" />
      </div>
      <div className="navbar">
        <ul className="navlist">
          <li className="navlist-item">
            <Link to="/" className="navlist-item-link">
              Анализы
            </Link>
          </li>
          <li className="navlist-item">
            <Link to="/" className="navlist-item-link">
              Результаты
            </Link>
          </li>
          <li className="navlist-item">
            <Link to="/" className="navlist-item-link">
              Адреса
            </Link>
          </li>

          {/*Подменю для пункта меню "Пациенты"*/}
          <li className="navlist-item">
            <Link to="/" className="navlist-item-link">
              Пациентам
            </Link>
            <div className="item-list">
              <ul className="patientmenu">
                <Link to="/" className="patient-list">
                  <li className="patient-list-item">Контакты</li>
                </Link>
                <Link to="/" className="patient-list">
                  <li className="patient-list-item">Анализы на дому</li>
                </Link>
                <Link to="/" className="patient-list">
                  <li className="patient-list-item">После COVID-19</li>
                </Link>
                <Link to="/" className="patient-list">
                  <li className="patient-list-item">Дородовая диагностика</li>
                </Link>
                <Link to="/" className="patient-list">
                  <li className="patient-list-item">Адреса лабораторий</li>
                </Link>
              </ul>
            </div>
          </li>
          {/*Конец блока*/}

          <li className="navlist-item">
            <Link to="/" className="navlist-item-link">
              Контакты
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottominfo;
