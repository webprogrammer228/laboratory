import "../../assets/scss/secondScreen/analyzies.scss";
import CarouselElem from "./Carousel";
import Benefits from "./Benefits";

const Analyzies = () => {
  return (
    <div className="first-screen">
      <div className="first-screen__left-banner">
        <div className="left-banner__content">
          <p className="left-banner__title">Сдать анализы в Омске</p>
          <p className="left-banner__subtitle">Диагностика:</p>
          <ul className="diagnostic-list">
            <li className="diagnostic-item">
              <a href="/" className="diagnostic-item-list">
                Covid-19
              </a>
            </li>
            <li className="diagnostic-item">
              <a href="/" className="diagnostic-item-list">
                Заболевания почек
              </a>
            </li>
            <li className="diagnostic-item">
              <a href="/" className="diagnostic-item-list">
                Заболевания щитовидной железы
              </a>
            </li>
            <li className="diagnostic-item">
              <a href="/" className="diagnostic-item-list">
                Сосудистые заболевания
              </a>
            </li>
            <li className="diagnostic-item">
              <a href="/" className="diagnostic-item-list">
                Диабет
              </a>
            </li>
            <li className="diagnostic-item">
              <a href="/" className="diagnostic-item-list">
                Беременность
              </a>
            </li>
          </ul>

          <a href="/" className="diagnostic-show-all">
            Посмотреть все виды исследований
          </a>
        </div>
      </div>
      <div className="first-screen__right-slider">
        <CarouselElem />
      </div>
      <Benefits />
    </div>
  );
};

export default Analyzies;
