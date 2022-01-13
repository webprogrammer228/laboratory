import doctor from "../../assets/images/doctor.jpg";

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
};

const numbers = [...Array(count).keys()].map((n) => n.toString());

const DoctorCard = ({ id, img, name, qualification, appointment }) => {
  return (
    <div className="doctor-card" key={id}>
      <img src={img} alt="doctor-image" />
      <div className="doctor-text">
        <span className="doctor-text__doctor-name">{name}</span>
        <span className="doctor-text__qualification">{qualification}</span>
        <span className="doctor-text__appointment">{appointment}</span>
      </div>
    </div>
  );
};

let img = Object.values(doctorsData.img);
let names = Object.values(doctorsData.titles);
let qualification = Object.values(doctorsData.descriptions);
let appointment = Object.values(doctorsData.subdescriptions);

const SearchServices = () => {
  return (
    <div className="search-services">
      <div className="search-services__header">
        <div className="search-services__header_left-block">
          <div className="menu-block">
            <h2 className="title">Врачи</h2>
            <span className="doctors-counter">{numbers.length}</span>
          </div>

          <div className="menu-block">
            <h2 className="title">Услуги</h2>
            <span className="doctors-counter">{numbers.length}</span>
          </div>

          
        </div>
        <div className="search-services__header_right-block">
          <a href="#" className="all-doctors">
            Все врачи
          </a>
        </div>
      </div>
      <div className="info">
        {numbers.map((id) => (
          <DoctorCard
            key={id}
            id={id}
            img={img[id]}
            name={names[id]}
            qualification={qualification[id]}
            appointment={appointment[id]}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchServices;
