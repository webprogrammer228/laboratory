// import { useEffect } from "react";
import Footer from "../Home/Footer";
import Header from "../Home/Header";
import "../../assets/scss/Search/search.scss";
import { useSearchParams } from "react-router-dom";
import Select from "react-select";
import SearchServices from "../../components/Search/Services";

const Search = () => {
  // мой велосипед со сменой стилей при переходе на страницу с поиском =))
  // useEffect(() => {
  //   document.body.style.height = "90%";
  //   document.querySelector(".center_info").style.display = "none";
  //   document.querySelector(".lab-header").style.height = "125px";
  //   document.querySelector(".navlist").style.paddingTop = "28px";
  //   document.querySelector(".container").style.paddingTop = "160px";
  //   document.querySelector(".search").style.alignSelf = "center";
  // }, []);
  //

  // данные для фильтров
  const options = [
    { value: "contacts", label: "Контакты" },
    { value: "analyzies", label: "Анализы на дому" },
    { value: "after-covid-19", label: "После COVID-19" },
    { value: "before-born-plastic", label: "Послеродовая пластика" },
    { value: "adresses", label: "Адреса лабораторий" },
    { value: "after-covid-19", label: "После COVID-19" },
  ];

  const options1 = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
  ];
  //

  // Кастомизация фильтров
  const customStyles = {
    singleValue: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "white" : "#00a7b5",
    }),
  };

  //  Компоненты фильтров
  const DepartmentFilter = () => (
    <Select
      styles={customStyles}
      options={options}
      isClearable={true}
      isSearchable={true}
      placeholder={"Отделение"}
      noOptionsMessage={() => "Ничего не найдено..."}
    />
  );

  const BuildingFilter = () => (
    <Select
      options={options1}
      isClearable={true}
      isSearchable={true}
      placeholder={"Корпус"}
      noOptionsMessage={() => "Ничего не найдено..."}
    />
  );


    // состояние для подтягивания инфы с get запросов
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <Header />
      <main className="container">
        {searchParams.get("result") === null ? (
          ""
        ) : (
          <h1 className="search-result__title">
            Результа поиска по запросу "{searchParams.get("result")}"
          </h1>
        )}

        <div className="filter-block">
          <span className="filter-block__title">Фильтры: </span>
          <DepartmentFilter />
          <BuildingFilter />
        </div>

        <hr className="filter-separator"/>

        <SearchServices />
      </main>

      {/* <div style={{ position: "fixed", bottom: "0", width: "100%" }}> */}
        <Footer />
      {/* </div> */}
    </>
  );
};

export default Search;
