import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/scss/secondScreen/popularMobile.scss";
import { useEffect } from "react";

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
};

const PopularElemMobile = ({ id, title, dottedPrice, price }) => {
  return (
      <a href="#" className="popular-services-item-mobile" key={id}>
        <div className="popular-services-item-text-mobile">
          <p className="popular-services-item-title-mobile">{title}</p>
          <p className="dotted-price">
            <s>{dottedPrice} &#8381;</s>
          </p>
          <p className="price">{price} &#8381;</p>
        </div>
      </a>
  );
};

const PopularMobile = () => {
  const slides = [];

  // функция для автоматической обрезки заголовков определенной длины
  useEffect(() => {
    (function () {
      const cropElement = document.querySelectorAll(
        "p.popular-services-item-title-mobile"
      ); // выбор элементов

      let size = 30;
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

  let titles = Object.values(data.title);
  let prices = Object.values(data.price);
  let dottedPrices = Object.values(data.price);

  // Помещение элементов в слайдер
  for (let i = 0; i < 10; i += 1) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <PopularElemMobile
          key={i}
          id={i}
          title={titles[i]}
          price={prices[i]}
          dottedPrice={dottedPrices[i]}
        />
      </SwiperSlide>
    );
  }

  return (
    <div className="popular-services-mobile">
      <React.Fragment>
        {/* slidePerView = {"auto"} для автоматической подгонки под ширину и высоту, которую я указываю, иначе меняет в зависимости от размера экрана */}
        {/* spaceBetween = расстояние в px между блоками */}

        <Swiper id="main" spaceBetween={8} slidesPerView={"auto"}>
          {slides}
        </Swiper>
      </React.Fragment>
    </div>
  );
};

export default PopularMobile;
