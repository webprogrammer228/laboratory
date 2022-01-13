import "../../assets/scss/Home/secondScreen/benefits.scss";
import clock from "../../assets/images/clock-icon.svg";
import microscope from "../../assets/images/microscope-icon.svg";
import file from "../../assets/images/file-icon.svg";

const Benefits = () => {
  return (
    <div className="benefits">
      <div className="fast">
        <img src={clock} alt="clock-icon" />
        <div className="text">
          <p className="title">Быстрое выполнение</p>
          <p className="description">
            Результаты любого анализа можно получить в течении 24 часов
          </p>
        </div>
      </div>
      <div className="precision">
        <img src={microscope} alt="clock-icon" />
        <div className="text">
          <p className="title">Точный результат</p>
          <p className="description">
            Лаборатория Евромед использует только собственное профессинальное
            оборудование
          </p>
        </div>
      </div>
      <div className="convenience">
        <img src={file} alt="clock-icon" />
        <div className="text">
          <p className="title">Результат всегда под рукой</p>
          <p className="description">
            Вы получаете лабораторное заключение как личном кабинете и на Email
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
