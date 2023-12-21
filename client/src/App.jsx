import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import CountriesInfo from "./CountriesInfo";
import FindACook from "./FindACook";
import Azurcam from "./Azurcam";
import Spiderman from "./Spiderman";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/azurcam" element={<Azurcam />} />
        <Route path="/findacook" element={<FindACook />} />
        <Route path="/countriesinfo" element={<CountriesInfo />} />
        <Route path="/spiderman" element={<Spiderman />} />
      </Routes>
    </Router>
  );
}

export default App;
