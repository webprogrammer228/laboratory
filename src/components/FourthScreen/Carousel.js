import FirstImg from "../../assets/images/article-carousel-item1.jpg";
import SecondImg from "../../assets/images/article-carousel-item2.jpg";
import ThirdImg from "../../assets/images/article-carousel-item3.jpg";
import "../../assets/scss/fourthScreen/articles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import React from "react";

// если будет ошибка в зависимостях, то надо заменить две строки на такие:
//   [вот эту часть как здесь] => "./swiper.min.css":  [а здесь текущая зависимость] => "./swiper.min.css",
//  [вот эту часть как здесь] =>  "./swiper-bundle.min.css": [а здесь текущая зависимость] => "./swiper-bundle.min.css",

const data = {
  imgs: {
    img1: FirstImg,
    img2: FirstImg,
    img3: SecondImg,
    img4: ThirdImg,
    img5: FirstImg,
    img6: FirstImg,
    img7: SecondImg,
    img8: ThirdImg,
    img9: FirstImg,
    img10: FirstImg,
    img11: SecondImg,
    img12: ThirdImg,
  },
  dates: {
    date1: "12 января 2021",
    date2: "12 января 2021",
    date3: "12 января 2021",
    date4: "12 января 2021",
    date5: "12 января 2021",
    date6: "12 января 2021",
    date7: "12 января 2021",
    date8: "12 января 2021",
    date9: "12 января 2021",
    date10: "12 января 2021",
    date11: "12 января 2021",
    date12: "12 января 2021",
  },
  titles: {
    title1: "В Детском «Евромеде» новый врач ультразвуковой диагностики",
    title2: "Новые тесты с автоматическим подсчетом антител к COVID-19",
    title3:
      "В Детском «Евромеде» новый детский стоматолог, челюстно-лицевой хирург",
    title4: "В «Евромеде» стартовала вакцинация против гриппа",
    title5: "В Детском «Евромеде» новый врач ультразвуковой диагностики",
    title6: "Новые тесты с автоматическим подсчетом антител к COVID-19",
    title7:
      "В Детском «Евромеде» новый детский стоматолог, челюстно-лицевой хирург",
    title8: "В «Евромеде» стартовала вакцинация против гриппа",
    title9: "В Детском «Евромеде» новый врач ультразвуковой диагностики",
    title10: "Новые тесты с автоматическим подсчетом антител к COVID-19",
    title11:
      "В Детском «Евромеде» новый детский стоматолог, челюстно-лицевой хирург",
    title12: "В «Евромеде» стартовала вакцинация против гриппа",
  },
  subtitles: {
    subtitle1:
      "Врач проводит ультразвуковые исследования у детей с самого рождения и до 18 лет.",
    subtitle2: "Новые тесты с автоматическим подсчетом антител к COVID-19",
    subtitle3:
      "В Детском «Евромеде» ведет прием новый опытный врач - челюстно-лицевой хирург, детский...",
    subtitle4: "В «Евромеде» стартовала вакцинация против гриппа.",
    subtitle5:
      "Врач проводит ультразвуковые исследования у детей с самого рождения и до 18 лет.",
    subtitle6: "Новые тесты с автоматическим подсчетом антител к COVID-19",
    subtitle7:
      "В Детском «Евромеде» ведет прием новый опытный врач - челюстно-лицевой хирург, детский...",
    subtitle8: "В «Евромеде» стартовала вакцинация против гриппа.",
    subtitle9:
      "Врач проводит ультразвуковые исследования у детей с самого рождения и до 18 лет.",
    subtitle10: "Новые тесты с автоматическим подсчетом антител к COVID-19",
    subtitle11:
      "В Детском «Евромеде» ведет прием новый опытный врач - челюстно-лицевой хирург, детский...",
    subtitle12: "В «Евромеде» стартовала вакцинация против гриппа.",
  },
};

let img = Object.values(data.imgs);
let date = Object.values(data.dates);
let title = Object.values(data.titles);
let subtitle = Object.values(data.subtitles);

const SlideElem = ({ img, date, title, subtitle }) => {
  return (
    <a href="#" className="carousel-article">
      <div className="article-block">
        <img
          className="desktop-banner"
          src={img}
          alt="article_banner_desktop"
        />
        <div className="text-block">
          <p className="article-date">{date}</p>
          <p className="article-title">{title}</p>
          <p className="article-subtitle">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

const slides = [];
for (let i = 0; i < 6; i += 1) {
  slides.push(
    <SwiperSlide key={`slide-${i}`}>
      <SlideElem
        key={i}
        img={img[i]}
        date={date[i]}
        title={title[i]}
        subtitle={subtitle[i]}
      />
    </SwiperSlide>
  );
}

const ArticleCarouselElem = () => {
  return (
    <React.Fragment>
      <Swiper
        modules={[Navigation, Pagination]}
        id="main"
        spaceBetween={16}
        slidesPerView={"auto"}
        navigation
        pagination={{ clickable: true }}
        loop={true}
      >
        {slides}
      </Swiper>
      <a className="show-all-articles__link" href="#">
        <button className="show-all-articles">Посмотреть все статьи</button>
      </a>
    </React.Fragment>
  );
};

export default ArticleCarouselElem;
