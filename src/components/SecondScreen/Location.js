import "../../assets/scss/secondScreen/locations.scss";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useState } from "react";

function Location() {
  const [address, setAddress] = useState(false);

  return (
    <div className="location-block">
      <div className="left">
        <p className="map-title">Сдать анализы в Евромед</p>
        <p className="map-subtitle">Места приема анализов:</p>
        <ul className="location-list" id="location" onClick={function (event) {
          if (event.target.classList.contains('location-list-item')) {
            return event.target === setAddress(!address);
          }
        }}>
          <SimpleBar style={{ maxHeight: 300 }}>
            <li className='location-list-item' 
            // onClick={() => setAddress(!address)}
            >
              ул. Старозагородная роща, 8
              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>

            <li className='location-list-item'
            // onClick={(pre) => setAddress(pre)}
            >
              ул. Старозагородная роща, 8
              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>

            <li className='location-list-item'>
              пр. Карла Маркса, 15
              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>
            <li className='location-list-item'>
              пр. Карла Маркса, 15
              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>

            <li className='location-list-item'>
              пр. Карла Маркса, 15
              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>
          </SimpleBar>
        </ul>

        <ul className="location-list-mobile" >
          <SimpleBar>
            <li className="location-list-item">
              <a href="https://goo.gl/maps/7BM13MNwABtqNco49">
                ул. Старозагородная роща, 8
              </a>

              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>

            <li className="location-list-item">
              <a href="https://goo.gl/maps/7BM13MNwABtqNco49">
                ул. Старозагородная роща, 8
              </a>

              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>

            <li className="location-list-item">
              <a href="https://goo.gl/maps/pit2kdDFNnxXAQVMA">
                пр. Карла Маркса, 15
              </a>

              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>
            <li className="location-list-item">
              <a href="https://goo.gl/maps/pit2kdDFNnxXAQVMA">
                пр. Карла Маркса, 15
              </a>
              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>

            <li className="location-list-item">
              <a href="https://goo.gl/maps/pit2kdDFNnxXAQVMA">
                пр. Карла Маркса, 15
              </a>

              <div className="location-list-address">
                <p className="address-title">Евромед на Зеленом острове</p>
                <p className="adress-timetable"></p>ПН-СБ с 8:00 до 20:00, ВС с
                9:00 до 18:00
              </div>
            </li>
          </SimpleBar>
        </ul>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.191002466315!2d73.33521681638307!3d55.00481685689576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab01d11eac40e3%3A0x2705b98f1884d318!2z0YPQuy4g0KHRgtCw0YDQvtC30LDQs9C-0YDQvtC00L3QsNGPINCg0L7RidCwLCA4LCDQntC80YHQuiwg0J7QvNGB0LrQsNGPINC-0LHQuy4sIDY0NDAzMw!5e0!3m2!1sru!2sru!4v1639479644295!5m2!1sru!2sru"
          width="100%"
          height="460px"
          style={{
            border: "0",
          }}
          allowFullScreen=""
          loading="lazy"
          title="rosha"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
