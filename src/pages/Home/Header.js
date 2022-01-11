import "../../assets/scss/style.scss";
import Topinfo from "../../components/Header/Topinfo";
import CentralInfo from "../../components/Header/CentralInfo";
import Bottominfo from "../../components/Header/Bottominfo";

function Header() {
  return (
    <>
      <header className="lab-header">
        <div className="block">
          <Topinfo />
          <hr className="border_block" />
          <CentralInfo />
          <Bottominfo />
        </div>
      </header>
    </>
  );
}

export default Header;
