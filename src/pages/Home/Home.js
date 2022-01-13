import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import FourthScreen from "./FourthScreen";
import { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.body.style.height = "";
    }, [])
    return (
        <>
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
        </>
    )
}

export default Home;