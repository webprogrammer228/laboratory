import LogoWhite from "../../assets/images/logo-white.svg";
import Eye from "../../assets/images/eye-footer.svg";
import Telegram from "../../assets/images/telegram-icon.svg";
import Whatsapp from "../../assets/images/whatsup-icon.svg";
import Viber from "../../assets/images/viber-icon.svg";

import Vk from "../../assets/images/vk.svg";
import Insta from "../../assets/images/insta.svg";
import Fb from "../../assets/images/fb.svg";
import Youtube from "../../assets/images/youtube.svg";

const FooterTop = () => {
  return (
    <div className="footer_top">
      <div className="footer_logo">
        <img
          className="footer_logo__footer-logo"
          src={LogoWhite}
          alt="footer-logo"
        />
        <div className="eye-block">
          <img
            className="eye-block__eye-footer"
            src={Eye}
            alt="footer-eye-img"
          />
          <p className="eye-block__text">Версия для слабовидящих</p>
        </div>

        <div className="footer_socials">
          <a href="/" className="footer_socials__vk">
            <img src={Vk} alt="footer-vk-icon" />
          </a>

          <a href="/" className="footer_socials__insta">
            <img src={Insta} alt="footer-insta-icon" />
          </a>

          <a href="/" className="footer_socials__fb">
            <img src={Fb} alt="footer-fb-icon" />
          </a>

          <a href="/" className="footer_socials__youtube">
            <img src={Youtube} alt="footer-youtube-icon" />
          </a>
        </div>
      </div>

      <p className="mobile-text">
        Многие методы диагностики и лечения имеют противопоказания. Необходима
        консультация специалиста.
      </p>

      <div className="footer_patients">
        <h2 className="footer_patients__title">Пациентам</h2>
        <ul className="footer_patients__list">
          <li className="footer_patients__list-item">
            <a href="/" className="footer_patients__list-item-link">
              Новости
            </a>
          </li>
          <li className="footer_patients__list-item">
            <a href="/" className="footer_patients__list-item-link">
              Акции
            </a>
          </li>
          <li className="footer_patients__list-item">
            <a href="/" className="footer_patients__list-item-link">
              Анализы на дому
            </a>
          </li>
          <li className="footer_patients__list-item">
            <a href="/" className="footer_patients__list-item-link">
              После COVID-19
            </a>
          </li>
          <li className="footer_patients__list-item">
            <a href="/" className="footer_patients__list-item-link">
              Дородовая диагностика
            </a>
          </li>
          <li className="footer_patients__list-item">
            <a href="/" className="footer_patients__list-item-link">
              Адреса лабораторий
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_about">
        <h2 className="footer_about__title">О нас</h2>
        <ul className="footer_about_list">
          <li className="footer_about__list-item">
            <a href="/" className="footer_about__list-item-link">
              О лаборатории
            </a>
          </li>
          <li className="footer_about__list-item">
            <a href="/" className="footer_about__list-item-link">
              Нормативные документы
            </a>
          </li>
          <li className="footer_about__list-item">
            <a href="/" className="footer_about__list-item-link">
              Вакансии
            </a>
          </li>
          <li className="footer_about__list-item">
            <a href="/" className="footer_about__list-item-link">
              Оборудование и оснащение
            </a>
          </li>
          <li className="footer_about__list-item">
            <a href="/" className="footer_about__list-item-link">
              Новости
            </a>
          </li>
        </ul>
      </div>
      <div className="footer_contacts">
        <h2 className="footer_contacts__title">Контакты</h2>
        <p className="footer_phone-title">Круглосуточно</p>
        <a className="footer_phone" href="tel:+73812302010">
          <span className="added-numbers">(+7 3812)</span> {""}
          <span className="primary-numbers">30-20-10</span>
        </a>
        <p className="offer-call">Заказать звонок</p>

        <p className="message-title">Telegram</p>
        <div className="message-block">
          <a href="/">
            <img
              className="message-block__telegram-icon"
              src={Telegram}
              alt="telegram-icon"
            />
            <p className="message-block__telegram-nickname">@labeluromed</p>
          </a>
        </div>

        <p className="message-title">Whatsapp</p>
        <div className="message-block">
          <a href="https://bit.ly/3enYUdW">
            <img
              className="message-block__whatsapp-icon"
              src={Whatsapp}
              alt="whatsapp-icon"
            />
            <p className="message-block__whatsapp-number">+7 968 565-44-32</p>
          </a>
        </div>

        <p className="message-title">Viber</p>
        <div className="message-block">
          <a href="viber://chat?number=%2B79685654432">
            <img
              className="message-block__viber-icon"
              src={Viber}
              alt="viber-icon"
            />
            <p className="message-block__telegram-nickname">@labeOmskeuro</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
