import LogoBottom from "../../assets/images/footer-bottom-logo-white.svg";

import Vk from "../../assets/images/vk.svg";
import Insta from "../../assets/images/insta.svg";
import Fb from "../../assets/images/fb.svg";
import Youtube from "../../assets/images/youtube.svg";

const FooterBottom = () => {
  return (
    <div className="bottom">
      <div className="bottom__logo-block">
        <img
          className="bottom__logo"
          src={LogoBottom}
          alt="footer-logo-bottom"
        />
        <p className="copyright">© ООО “МЦСМ «Евромед», 2009 – 2021. </p>
      </div>

      <div className="bottom__privacy">
        <a href="/" className="politic">
          Политика обработки персональных данных
        </a>
        <a href="/" className="agreement">
          Пользовательское соглашение
        </a>
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
  );
};

export default FooterBottom;
