import "../../assets/scss/secondScreen/locations.scss";
import "simplebar/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import React from "react";

// количество элементов для перебора
const numList = 5;

// объект с данными для перебора
const object = {
  title: {
    title: "ул. Старозагородная роща, 8",
    title1: "ул. Старозагородная роща, 8",
    title2: "пр. Карла Маркса, 15",
    title3: "пр. Карла Маркса, 15",
    title4: "пр. Карла Маркса, 15",
    title5: "пр. Карла Маркса, 15",
  },
  time: {
    time: "ПН-СБ с 8:00 до 20:00, ВС с 9:00 до 18:00",
    time2: "ПН-СБ с 8:00 до 20:00, ВС с 9:00 до 18:00",
    time3: "ПН-СБ с 8:00 до 20:00, ВС с 9:00 до 18:00",
    time4: "ПН-СБ с 8:00 до 20:00, ВС с 9:00 до 18:00",
    time5: "ПН-СБ с 8:00 до 20:00, ВС с 9:00 до 18:00",
  },
  adress: {
    adress: "Евромед на Левом берегу",
    adress2: "Евромед на Левом берегу",
    adress3: "Евромед на Левом берегу",
    adress4: "Евромед на Маркса 15",
    adress5: "Евромед на Маркса 15",
  },
  href: {
    href1: "https://goo.gl/maps/7BM13MNwABtqNco49",
    href2: "https://goo.gl/maps/7BM13MNwABtqNco49",
    href3: "https://goo.gl/maps/pit2kdDFNnxXAQVMA",
    href4: "https://goo.gl/maps/pit2kdDFNnxXAQVMA",
    href5: "https://goo.gl/maps/pit2kdDFNnxXAQVMA",
  },
  src: [
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.191002466315!2d73.33521681638307!3d55.00481685689576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab01d11eac40e3%3A0x2705b98f1884d318!2z0YPQuy4g0KHRgtCw0YDQvtC30LDQs9C-0YDQvtC00L3QsNGPINCg0L7RidCwLCA4LCDQntC80YHQuiwg0J7QvNGB0LrQsNGPINC-0LHQuy4sIDY0NDAzMw!5e0!3m2!1sru!2sru!4v1639479644295!5m2!1sru!2sru",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.191002466315!2d73.33521681638307!3d55.00481685689576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab01d11eac40e3%3A0x2705b98f1884d318!2z0YPQuy4g0KHRgtCw0YDQvtC30LDQs9C-0YDQvtC00L3QsNGPINCg0L7RidCwLCA4LCDQntC80YHQuiwg0J7QvNGB0LrQsNGPINC-0LHQuy4sIDY0NDAzMw!5e0!3m2!1sru!2sru!4v1639479644295!5m2!1sru!2sru",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.832462883514!2d73.3798174160236!3d54.976037159096144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafe07b7697969%3A0xc49a743e0d03c312!2z0JrQsNGA0LvQsCDQnNCw0YDQutGB0LAg0L_RgNC-0YHQvy4sIDE1LCDQntC80YHQuiwg0J7QvNGB0LrQsNGPINC-0LHQuy4sIDY0NDAxMA!5e0!3m2!1sru!2sru!4v1639760922848!5m2!1sru!2sru",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.832462883514!2d73.3798174160236!3d54.976037159096144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafe07b7697969%3A0xc49a743e0d03c312!2z0JrQsNGA0LvQsCDQnNCw0YDQutGB0LAg0L_RgNC-0YHQvy4sIDE1LCDQntC80YHQuiwg0J7QvNGB0LrQsNGPINC-0LHQuy4sIDY0NDAxMA!5e0!3m2!1sru!2sru!4v1639760922848!5m2!1sru!2sru",

    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.832462883514!2d73.3798174160236!3d54.976037159096144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafe07b7697969%3A0xc49a743e0d03c312!2z0JrQsNGA0LvQsCDQnNCw0YDQutGB0LAg0L_RgNC-0YHQvy4sIDE1LCDQntC80YHQuiwg0J7QvNGB0LrQsNGPINC-0LHQuy4sIDY0NDAxMA!5e0!3m2!1sru!2sru!4v1639760922848!5m2!1sru!2sru",
  ],
};


// Список для отображения на пк
const ItemListDesktop = ({ id, onClick, isSelected, adress, time, title }) => {
  return (
    <li
      key={id}
      id={id}
      className={`location-list-item${isSelected ? " active" : ""}`}
      onClick={onClick}
    >
      <span className="location-list-item-title">{title}</span>
      <div className="location-list-address">
        <p className="address-title">{adress}</p>
        <p className="adress-timetable">{time}</p>
      </div>
    </li>
  );
};

// Список для отображения на таблетках и мобильных
const ItemListMobile = ({
  id,
  onClick,
  isSelected,
  adress,
  time,
  title,
  href,
}) => {
  return (
    <a href={href}>
      <li
        key={id}
        id={id}
        className={`location-list-item`}
        onClick={onClick}
      >
        <span className="location-list-item-title">{title}</span>
        <div className="location-list-address">
          <p className="address-title">{adress}</p>
          <p className="adress-timetable">{time}</p>
        </div>
      </li>
    </a>
  );
};

// Элемент карты 
const Map = ({ src, id, isSelected }) => {
  return (
    <iframe
      src={src}
      id={id}
      className={`map-frame${isSelected ? " active" : ""}`}
      width="100%"
      height="460px"
      style={{ border: "0" }}
      allowFullScreen=""
      loading="lazy"
      title="rosha"
    ></iframe>
  );
};

function Location() {
  // смена состояния для активной кнопки, начальное состояние - первый элемент списка с индексом 0
  const [selectedItems, setSelectedItems] = React.useState(new Set("0"));

  // перебор количества элементов
  const ids = [...Array(numList).keys()].map((n) => n.toString());

  // Добавление id
  const handleClick = (id) => {
    setSelectedItems((prevState) => new Set([prevState, id]));
  };

  // получаю количество объектов в каждом объекте для дальнейшего перебора
  let adress = Object.values(object.adress);
  let time = Object.values(object.time);
  let title = Object.values(object.title);
  let href = Object.values(object.href);
  let src = object.src;

  return (
    <div className="location-block">
      <div className="left">
        <p className="map-title">Сдать анализы в Евромед</p>
        <p className="map-subtitle">Места приема анализов:</p>
        <ul className="location-list">
          {/* Помещаю список в элемент для стилизации прокрутки */}
          <SimpleBar style={{ maxHeight: 300 }}>
            {ids.map((id) => (
              <ItemListDesktop
                key={id}
                id={id}
                time={time[id]}
                adress={adress[id]}
                title={title[id]}
                isSelected={selectedItems.has(id)}
                onClick={() => handleClick(id)}
              />
            ))}
          </SimpleBar>
          {/*  */}
        </ul>

        <ul className="location-list-mobile">
          {/* Так же и для мобильных, помещаю в элемент стилизации прокрутки */}
          <SimpleBar>
            {ids.map((id) => (
              <ItemListMobile
                key={id}
                id={id}
                time={time[id]}
                adress={adress[id]}
                title={title[id]}
                href={href[id]}
                isSelected={selectedItems.has(id)}
                onClick={() => handleClick(id)}
              />
            ))}
          </SimpleBar>
          {/*  */}
        </ul>
      </div>
      <div className="map">
        {/* Если хоть один элемент true, то возвращаем карту с нужным id, иначе ничего, здесь isSelected передать тяжело, поэтому воспользовался состоянием напрямую(selectedItems.has(id)) */}
        {ids.map(function (id) {
          if (true === selectedItems.has(id)) {
            return (
              <Map
                src={src[id]}
                key={id}
                isSelected={selectedItems.has(id)}
                className="active"
              />
            );
          } else return "";
        })}
      </div>
    </div>
  );
}

export default Location;
