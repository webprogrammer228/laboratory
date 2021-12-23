import "../../assets/scss/fourthScreen/consultation.scss";
import Rounds from "../../assets/images/rounds.svg";

const Consultation = () => {
  return (
    <div className="consultation">
      <div className="text-block">
        <h1 className="text-block__title">
          Предварительная {"\n"} консультация
        </h1>
        <p className="text-block__subtitle">
          Остались вопросы, или необходима консультация, {"\n"} — заполните
          форму и мы свяжемся с вами
        </p>
        <img className="rounds-consultation" src={Rounds} alt="rounds" />
      </div>
      <form className="consultation-desktop" action="#">
        <h2 className="form-title">Заполните форму</h2>

        <div className="contacts">
          <input type="text" name="name" placeholder="Имя" />
          <input
            type="text"
            name="telephone"
            placeholder="Контактный телефон"
          />
        </div>
        <textarea
          cols="10"
          rows="3"
          name="question"
          placeholder="Укажите по какому вопросу вам необходима консультация"
        />
        <button className="consultation-send" type="submit">
          Отправить
        </button>

        <p className="agreement">
          Отправляя форму, вы даете {""}
          <a className="agreement-link" href="/">
            Согласие на обработку персональных данных.{" "}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Consultation;
