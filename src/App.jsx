import "./App.css";
import Navbar from "./components/navbar/Navbar";
import EQSection from "./components/eqSsection/EQSection";
import Cards from "./components/carousel/Cards";
import MeetTheAheadApp from "./components/meetTheAheadApp/meetTheAheadApp";
import SelfImprovement from "./components/selfImprovement/SelfImprovement";
import EverWonderedCard from "./components/everWonderedCard/EverWonderedCard";
import StartTest from "./components/startATest/StartTest";
import Footer from "./components/footer/Footer";
import Vacancies from "./components/vacancy/Vacancies";
import MasterLife from "./components/masterLife/MasterLife";

function App() {
  return (
    <div className="">
      <Navbar />
      <br />
      <MasterLife />
      <br />
      <EQSection content={"first"} />
      <Cards />
      <MeetTheAheadApp />
      <SelfImprovement />
      <EQSection content={"second"} />
      <EverWonderedCard />
      <StartTest />
      <Vacancies />
      <Footer />
    </div>
  );
}

export default App;
