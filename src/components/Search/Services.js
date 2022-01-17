import doctor from "../../assets/images/doctor.jpg";
import location from "../../assets/images/Subtract.svg";
import icon from "../../assets/images/shield.svg";
import React, { useState } from "react";
import DoctorMenu from "./DoctorMenu";
import ServiceMenu from "./ServiceMenu";

const count = 5;
// объект заглушка для вывода значений
const doctorsData = {
  titles: {
    title1: "Осипов Иван Анатольевич",
    title2: "Осипов Иван Анатольевич",
    title3: "Осипов Иван Анатольевич",
    title4: "Осипов Иван Анатольевич",
    title5: "Осипов Иван Анатольевич",
  },
  descriptions: {
    description1:
      "Врач ортопед–травматолог, ревматолог высшей квалификационной категории.",
    description2:
      "Врач ортопед–травматолог, ревматолог высшей квалификационной категории.",
    description3:
      "Врач ортопед–травматолог, ревматолог высшей квалификационной категории.",
    description4:
      "Врач ортопед–травматолог, ревматолог высшей квалификационной категории.",
    description5:
      "Врач ортопед–травматолог, ревматолог высшей квалификационной категории.",
  },
  subdescriptions: {
    subdescription1: "Инструктор-методист по лечебной физкультуре",
    subdescription2: "Инструктор-методист по лечебной физкультуре",
    subdescription3: "Инструктор-методист по лечебной физкультуре",
    subdescription4: "Инструктор-методист по лечебной физкультуре",
    subdescription5: "Инструктор-методист по лечебной физкультуре",
  },
  img: {
    img1: doctor,
    img2: doctor,
    img3: doctor,
    img4: doctor,
    img5: doctor,
  },
  icons: {
    icon: icon,
    icon2: icon,
    icon3: icon,
    icon4: icon,
    icon5: icon,
  },
};

const serviceData = {
  titles: {
    title1: "Исследование антител класса IgA к короновирусу",
    title2: "Исследование антител класса IgA к короновирусу",
    title3: "Исследование антител класса IgA к короновирусу",
    title4: "Исследование антител класса IgA к короновирусу",
    title5: "Исследование антител класса IgA к короновирусу",
  },
  prices: {
    price1: "1 450 ₽",
    price2: "1 450 ₽",
    price3: "1 450 ₽",
    price4: "1 450 ₽",
    price5: "1 450 ₽",
  },
  images: {
    img1: location,
    img2: location,
    img3: location,
    img4: location,
    img5: location,
  },
};

const DoctorCard = ({ id, img, name, qualification, appointment, shield }) => {
  return (
    <div className="doctor-card" key={id}>
      <img className="doctor-image" src={img} alt="doctor-image" />
      <div className="doctor-text">
        <span className="doctor-text__doctor-name">{name}</span>
        <span className="doctor-text__qualification">{qualification}</span>
        <span className="doctor-text__appointment">{appointment}</span>
      </div>
      <div className="right-block">
        <img className="doctor-regard" src={shield} alt="doctor-regard" />
        <div className="hover-info">
          <div className="triangle"></div>
          <span>Врач месяца по признанию пациентов</span>
        </div>
        <a href="#" className="more">
          Подробнее
        </a>
      </div>
    </div>
  );
};

let img = Object.values(doctorsData.img);
let names = Object.values(doctorsData.titles);
let qualification = Object.values(doctorsData.descriptions);
let appointment = Object.values(doctorsData.subdescriptions);
let shield = Object.values(doctorsData.icons);

const ServiceCard = ({ id, title, price, img }) => {
  return (
    <div className="service-card" key={id}>
      <div className="service-top">
        <div className="wrapper">
          <h3 className="service-top__service-title">{title}</h3>
          <div className="price">
            <h2 className="service-top__service-price">{price}</h2>
          </div>
        </div>
      </div>
      <div className="service-bottom">
        <div className="service-location">
          <img src={img} alt={`service-location-${id}`} />
          <div className="clinics">
            <span className="clinic">ЕВРОМЕД на Зеленом острове</span>
            <span className="clinic">ЕВРОМЕД на Левом берегу</span>
          </div>
        </div>
        <a href="#" className="more">
          Подробнее
        </a>
      </div>
    </div>
  );
};

const SearchServices = () => {
  const numbers = [...Array(count).keys()].map((n) => n.toString());

  let ServiceImg = Object.values(serviceData.images);
  let ServiceTitles = Object.values(serviceData.titles);
  let ServicePrices = Object.values(serviceData.prices);

  const [active, setActive] = useState(true);

  return (
    <div className="search-services">
      <div className="search-services__header">
        <div className="search-services__header_left-block">
          <DoctorMenu
            active={active}
            setActive={setActive}
            length={numbers.length}
          />
          <ServiceMenu
            active={active}
            setActive={setActive}
            length={numbers.length}
          />
        </div>

        <div className="search-services__header_right-block">
          <a href="#" className="all-doctors">
            Все врачи
          </a>
        </div>
      </div>
      <hr className="search-services__separator" />
      <div className="info">
        {active
          ? numbers.map((id) => (
              <DoctorCard
                key={id}
                id={id}
                img={img[id]}
                name={names[id]}
                qualification={qualification[id]}
                appointment={appointment[id]}
                shield={shield[id]}
              />
            ))
          : numbers.map((id) => (
              <ServiceCard
                key={id}
                id={id}
                img={ServiceImg[id]}
                title={ServiceTitles[id]}
                price={ServicePrices[id]}
              />
            ))}
      </div>
    </div>
  );
};

export default SearchServices;
