const DoctorMenu = ({ active, setActive, length }) => {
  return (
    <div
      className={active ? "menu-block doctors active" : "menu-block doctors"}
      onClick={() => setActive(true)}
    >
      <h2 className="title">Врачи</h2>
      <span className="doctors-counter">{length}</span>
    </div>
  );
};

export default DoctorMenu;
