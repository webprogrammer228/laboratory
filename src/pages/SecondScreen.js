import "../assets/scss/container.scss";
import Analyzies from "../components/SecondScreen/Analyzies";
import Location from "../components/SecondScreen/Location";
import Popular from "../components/SecondScreen/Popular";

const SecondScreen = () => {
  return (
    <main className="container">
      <Analyzies />
      <Location />
      <Popular />
    </main>
  );
};

export default SecondScreen;
