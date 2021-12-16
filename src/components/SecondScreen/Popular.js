import "../../assets/scss/secondScreen/popular.scss";
import PopularMobile from "./Popular-mobile";

const Popular = () => {
  return (
      <>
    <div className="popular">
      <div className="popular-header">
        <p className="popular-header__title">Популярное</p>
        <a className="popular-header__all-services" href="/">
          Все услуги лаборатории
        </a>
      </div>

      <div className="popular-services">
        <div className="popular-services-item">
          <p className="popular-services-item-text">
            Диагностика диабета, {"\n"} биохимическая
          </p>
          <div className="popular-services-item-hovered">
          <p className="dotted-price"><s>1450 &#8381;</s></p>
            <p className="price">1450 &#8381;</p>
            <p className="popular-services-item-hovered-title">
              TORCH-комплекс, базовый
            </p>
            <p className="popular-services-item-hovered-subtitle">
              Включает определение антител классов IgM и IgG к возбудителям
              группы TORCH-инфекций
            </p>
          </div>
        </div>
        <div className="popular-services-item">
          <p className="popular-services-item-text">
            Диагностика {"\n"} диабета
          </p>

          <div className="popular-services-item-hovered">
          <p className="dotted-price"><s>1450 &#8381;</s></p>
            <p className="price">1450 &#8381;</p>
            <p className="popular-services-item-hovered-title">
              TORCH-комплекс, базовый
            </p>
            <p className="popular-services-item-hovered-subtitle">
              Включает определение антител классов IgM и IgG к возбудителям
              группы TORCH-инфекций
            </p>
          </div>
        </div>
        <div className="popular-services-item">
          <p className="popular-services-item-text">
            Диагностика диабета, {"\n"} биохимическая
          </p>

          <div className="popular-services-item-hovered">
            <p className="dotted-price"><s>1450 &#8381;</s></p>
            <p className="price">1450 &#8381;</p>

            <p className="popular-services-item-hovered-title">
              TORCH-комплекс, базовый
            </p>
            <p className="popular-services-item-hovered-subtitle">
              Включает определение антител классов IgM и IgG к возбудителям
              группы TORCH-инфекций
            </p>
          </div>
        </div>
        <div className="popular-services-item">
          <p className="popular-services-item-text">
            Диагностика диабета, {"\n"} биохимическая
          </p>

          <div className="popular-services-item-hovered">
          <p className="dotted-price"><s>1450 &#8381;</s></p>
            <p className="price">1450 &#8381;</p>
            <p className="popular-services-item-hovered-title">
              TORCH-комплекс, базовый
            </p>
            <p className="popular-services-item-hovered-subtitle">
              Включает определение антител классов IgM и IgG к возбудителям
              группы TORCH-инфекций
            </p>
          </div>
        </div>
        <div className="popular-services-item">
          <p className="popular-services-item-text">
            Диагностика {"\n"} диабета
          </p>

          <div className="popular-services-item-hovered">
          <p className="dotted-price"><s>1450 &#8381;</s></p>
            <p className="price">1450 &#8381;</p>
            <p className="popular-services-item-hovered-title">
              TORCH-комплекс, базовый
            </p>
            <p className="popular-services-item-hovered-subtitle">
              Включает определение антител классов IgM и IgG к возбудителям
              группы TORCH-инфекций
            </p>
          </div>
        </div>
        <div className="popular-services-item">
          <p className="popular-services-item-text">
            Диагностика {"\n"} диабета
          </p>

          <div className="popular-services-item-hovered">
          <p className="dotted-price"><s>1450 &#8381;</s></p>
            <p className="price">1450 &#8381;</p>
            <p className="popular-services-item-hovered-title">
              TORCH-комплекс, базовый
            </p>
            <p className="popular-services-item-hovered-subtitle">
              Включает определение антител классов IgM и IgG к возбудителям
              группы TORCH-инфекций
            </p>
          </div>
        </div>
      </div>
    </div>
    <PopularMobile />
    </>
  );
};

export default Popular;
