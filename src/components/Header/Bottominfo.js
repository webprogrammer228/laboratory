import { Link } from "react-router-dom";
import search from "../../assets/images/search.svg";
import "../../assets/scss/Home/footer/footer.scss";
import SimpleBar from "simplebar-react";
import { useEffect, useRef, useState } from "react";

// список для поиска
const data = {
  titles: {
    title1: "Контакты",
    title2: "Анализы на дому",
    title3: "После COVID-19",
    title4: "Дородовая диагностика",
    title5: "Адреса лабораторий",
    title6: "Контакты",
    title7: "Анализы на дому",
    title8: "Дородовая диагностика",
  },
};

const numList = 8;
const ids = [...Array(numList).keys()].map((n) => n.toString());
let title = Object.values(data.titles);
// конец списка

function Bottominfo() {
  // состояние для того, что было ли что то написано в инпуте

  const [inputLength, setInputLength] = useState([]);
  useEffect(() => {
    setInputLength(input.current.value);
  }, [inputLength]);

  const [active, setActive] = useState(false); // состояние для инпута

  const input = useRef(null);

  const ItemListDesktop = ({ id, title }) => {
    return (
      <Link
        to={`/laboratory/search?result=${title}`}
        className="search-list-item-title"
        onMouseDown={(e) => e.preventDefault()}
        onClick={function resetBlur() {
          setActive(false);
          input.current.blur();
        }}
        key={id}
        id={id}
      >
        <li className={`search-list-item`}>{title}</li>
      </Link>
    );
  };

  return (
    <div className="bottom_info">
      <div className={!active ? "search" : "search active"}>
        <form action="#" method="#">
          <input
            className={!active ? "index_search" : "index_search active"}
            type="search"
            name="search"
            placeholder="Найти услугу или врача..."
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onChange={() => setInputLength(input.current.value)}
            ref={input}
          />

          {/* Показывать результаты поисковой выдачи, если элемент в фокусе */}
          {active && inputLength.length > 0 ? (
            <div className="search-results">
              <ul className="search-list">
                {/* Помещаю список в элемент для стилизации прокрутки */}
                <SimpleBar style={{ maxHeight: 300 }}>
                  {ids.map((id) => (
                    <ItemListDesktop key={id} id={id} title={title[id]} />
                  ))}
                </SimpleBar>
              </ul>
            </div>
          ) : (
            ""
          )}
          {(!active && inputLength.length === 0) ||
          (active && inputLength.length === 0) ? (
            <img src={search} className="search-icon" alt="search" />
          ) : (
            ""
          )}
          {/*  */}
        </form>
      </div>
      <div className="navbar">
        <ul className="navlist">
          <li className="navlist-item">
            <a href="#" className="navlist-item-link">
              Анализы
            </a>
          </li>
          <li className="navlist-item">
            <a href="#" className="navlist-item-link">
              Результаты
            </a>
          </li>
          <li className="navlist-item">
            <a href="#" className="navlist-item-link">
              Адреса
            </a>
          </li>

          {/*Подменю для пункта меню "Пациенты"*/}
          <li className="navlist-item">
            <a href="#" className="navlist-item-link">
              Пациентам
            </a>
            <div className="item-list">
              <ul className="patientmenu">
                <a href="#" className="patient-list">
                  <li className="patient-list-item">Контакты</li>
                </a>
                <a href="#" className="patient-list">
                  <li className="patient-list-item">Анализы на дому</li>
                </a>
                <a href="#" className="patient-list">
                  <li className="patient-list-item">После COVID-19</li>
                </a>
                <a href="#" className="patient-list">
                  <li className="patient-list-item">Дородовая диагностика</li>
                </a>
                <a href="#" className="patient-list">
                  <li className="patient-list-item">Адреса лабораторий</li>
                </a>
              </ul>
            </div>
          </li>
          {/*Конец блока*/}

          <li className="navlist-item">
            <a href="#" className="navlist-item-link">
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Bottominfo;
