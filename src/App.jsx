import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePageImg from "./assets/home_page_image.png";
import EQSection from "./components/eq_section/EQSection";

function App() {
  return (
    <div>
      <Navbar />
      <br />
      <img className="w-11/12 ml-auto mr-auto" src={HomePageImg} alt="" />
      <br />
      <EQSection />
    </div>
  );
}

export default App;
