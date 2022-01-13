import "../../assets/scss/Home/secondScreen/analyzies.scss";
import CarouselElem from "./Carousel";
import Benefits from "./Benefits";

const count = 12;
const data = {
  items: {
    item1: "Covid-19",
    item2: "Заболевания почек",
    item3: "Заболевания щитовидной железы",
    item4: "Сосудистые заболевания",
    item5: "Диабет",
    item6: "Covid-19",
    item7: "Заболевания почек",
    item8: "Заболевания щитовидной железы",
    item9: "Сосудистые заболевания",
    item10: "Диабет",
    item11: "Сосудистые заболевания",
    item12: "Диабет",
  },
};

const counter = [...Array(count).keys()].map((n) => n.toString());
let items = Object.values(data.items);

const AnalyziesList = ({ id, title }) => {
  return (
    <li className="diagnostic-item" key={id}>
      <a href="#" className="diagnostic-item-list">
        {title}
      </a>
    </li>
  );
};

const Analyzies = () => {
  return (
    <div className="first-screen">
      <div className="first-screen__left-banner">
        <div className="left-banner__content">
          <h1 className="left-banner__title">Сдать анализы в Омске</h1>
          <h2 className="left-banner__subtitle">Диагностика:</h2>
          <ul className="diagnostic-list">
            {counter.map((id) => (
              <AnalyziesList key={id} title={items[id]} />
            ))}
          </ul>
          <a href="#" className="diagnostic-show-all">
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
