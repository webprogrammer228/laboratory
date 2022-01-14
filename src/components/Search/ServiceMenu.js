const ServiceMenu = ({ active, setActive, length }) => {
  return (
    <div
      className={!active ? "menu-block services active" : "menu-block services"}
      onClick={() => setActive(false)}
    >
      <h2 className="title">Услуги</h2>
      <span className="doctors-counter">{length}</span>
    </div>
  );
};

export default ServiceMenu;
