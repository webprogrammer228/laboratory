import "../../assets/scss/thirdScreen/main.scss";
import WhiteLogo from "../../assets/images/logo-white.svg";
import Rounds from "../../assets/images/rounds.svg";
import Video from "../../assets/images/video.jpg";
import Play from "../../assets/images/play.svg";

import Shpric from "../../assets/images/syringe-white.svg";
import Reward from "../../assets/images/reward-white.svg";
import Timer from "../../assets/images/timer-white.svg";
import Search from "../../assets/images/search.svg";

const MainBlock = () => {
  return (
    <div className="third-screen-content-wrapper">
      <div className="third-screen-content">
        <div className="top">
          <img src={WhiteLogo} alt="white-logo" />
          <img src={Rounds} alt="rounds" />

          <p className="top__underlogo-text">
            Лабораторный комплекс «Евромед» {"\n"}
            включает 9 лабораторий, оборудованных современными автоматическими
            анализаторами и тест-системами ведущих мировых производителей.
          </p>
        </div>

        <div className="bottom">
          <div className="player">
            <a
              className="youtube-video-bottom"
              href="https://www.youtube.com/watch?v=GHSTeTbQ-hs"
              target="_blank"
              rel="noreferrer"
            >
              <img className="video" src={Video} alt="video" />
              <img className="play" src={Play} alt="play" />
            </a>
          </div>
          <div className="tour">
            <a
              className="excursion"
              href="https://www.youtube.com/watch?v=GHSTeTbQ-hs"
              target="_blank"
              rel="noreferrer"
            >
              3D-тур {"\n"} по лаборатории
            </a>
          </div>
        </div>

        <div className="benefits-block">
          <div className="first">
            <img
              className="first-benefit-image"
              src={Shpric}
              alt="syringe-img"
            />
            <p className="first-benefit">
              Зарубежные реагенты {"\n"} и высокоточное оборудование
            </p>
          </div>

          <div className="second">
            <img
              className="second-benefit-image"
              src={Reward}
              alt="reward-img"
            />
            <p className="second-benefit">
              Более 15 лет на рынке {"\n"} лабораторных исследований
            </p>
          </div>

          <div className="third">
            <img className="third-benefit-image" src={Timer} alt="timer-img" />
            <p className="third-benefit">
              Оперативное представление {"\n"} результатов любых анализов
            </p>
          </div>
        </div>

        <div className="search-analyzies-wrapper">
          <div className="search-analyzies">
            <div className="left-block">
              <form action="#">
                <input
                  type="text"
                  className="search"
                  placeholder="Поиск анализов..."
                />
                <img className="search-icon" src={Search} alt="search-icon" />

                <div className="text-description">
                  <div className="first">
                    <p className="amount">1557</p>
                    <p className="description">Видов {"\n"} анализов</p>
                  </div>

                  <div className="second">
                    <p className="amount">9</p>
                    <p className="description">
                      Современных {"\n"} лабораторий
                    </p>
                  </div>
                </div>
              </form>
            </div>

            <div className="diagnostic">
              <p className="diagnostic-title">Диагностика</p>

              <ul className="diagnostic-list">
                <li className="diagnostic-list-item">После COVID-19</li>
                <li className="diagnostic-list-item">Будущим мамам</li>
                <li className="diagnostic-list-item">Сосудистые заболевания</li>
                <li className="diagnostic-list-item">При диабете</li>
                <li className="diagnostic-list-item">Спортсменам</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
