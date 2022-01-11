import { useEffect } from "react";
import "../../assets/scss/secondScreen/popular.scss";
import PopularMobile from "./Popular-mobile";

const amount = 12;
const data = {
  title: {
    title: "Общий анализ крови (развернутый) + СОЭ",
    title1: "Витамин D",
    title2: "Общий анализ крови (развернутый) + СОЭ",
    title3: "Количественный тест на антитела к Covid-19",
    title4: "Лабораторный чекап (13 показателей)",
    title5: "Лабораторный чекап (13 показателей)",
    title6: "Контроль печени",
    title7: "Здоровые сосуды",
    title8: "Диагностика онкологических заболеваний",
    title9: "Проверка щитовидной железы",
    title10: "Здоровые почки",
    title11: "Диагностика онкологических заболеваний",
    title12: "Диагностика онкологических заболеваний",
  },
  price: {
    price: 1450,
    price1: 1450,
    price3: 1450,
    price4: 1450,
    price5: 1450,
    price6: 1450,
    price7: 1450,
    price8: 1450,
    price9: 1450,
    price10: 1450,
    price12: 1450,
    price13: 1450,
  },
  dottedPrice: {
    dottedPrice: 1450,
    dottedPrice1: 1450,
    dottedPrice3: 1450,
    dottedPrice4: 1450,
    dottedPrice5: 1450,
    dottedPrice6: 1450,
    dottedPrice7: 1450,
    dottedPrice8: 1450,
    dottedPrice9: 1450,
    dottedPrice10: 1450,
    dottedPrice12: 1450,
    dottedPrice13: 1450,
  },
  hoverSubtitle: {
    hoverSubtitle:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle1:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle2:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle3:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle4:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle5:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle6:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle7:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle8:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle9:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle10:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
    hoverSubtitle11:
      "Включает определение антител классов IgM и IgG к возбудителям группы TORCH-инфекций",
  },
};

const PopularElem = ({ id, title, dottedPrice, price, hoverSubtitle }) => {
  return (
    <a href="#" className="popular-services-item" key={id}>
      <div className="block-wrapper"></div>
      <h3 className="popular-services-item-text">{title}</h3>
      <div className="popular-services-item-hovered">
        <p className="dotted-price">
          <del>
            {dottedPrice} <span className="rub">i</span>
          </del>
        </p>
        <p className="price">
          {price} <span className="rub">i</span>
        </p>
        <h3 className="popular-services-item-hovered-title">{title}</h3>
        <p className="popular-services-item-hovered-subtitle">
          {hoverSubtitle}
        </p>
      </div>
    </a>
  );
};

const amountList = [...Array(amount).keys()].map((n) => n.toString());
let titles = Object.values(data.title);
let prices = Object.values(data.price);
let dottedPrices = Object.values(data.price);
let hoverSubtitles = Object.values(data.hoverSubtitle);

const Popular = () => {
  useEffect(() => {
    (function () {
      const cropElement = document.querySelectorAll(
        "p.popular-services-item-hovered-subtitle"
      ); // выбор элементов

      let size = 60;
      let endCharacter = "..."; // окончание

      cropElement.forEach((el) => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
          text = text.substr(0, size);
          el.innerHTML = text + endCharacter;
        }
      });
    })();
  }, []);

  return (
    <>
      <div className="popular">
        <div className="popular-header">
          <h1 className="popular-header__title">Услуги лаборатории</h1>
          <div className="categories">
            <a className="popular-header__category-link" href="#">
              Все услуги
            </a>
          </div>
        </div>

        <div className="popular-services">
          {amountList.map((id) => (
            <PopularElem
              key={id}
              id={id}
              title={titles[id]}
              price={prices[id]}
              dottedPrice={dottedPrices[id]}
              hoverSubtitle={hoverSubtitles[id]}
            />
          ))}
        </div>
      </div>
      <PopularMobile />
    </>
  );
};

export default Popular;
