import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePageImg from "./assets/home_page_image.png";
import EQSection from "./components/eqSsection/EQSection";
import Cards from "./components/carousel/Cards";

function App() {
  return (
    <div className="">
      <Navbar />
      <br />
      <img className="w-11/12 ml-auto mr-auto" src={HomePageImg} alt="" />
      <br />
      <EQSection />
      <Cards />
    </div>
  );
}

export default App;
