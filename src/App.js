import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigacija from "./komponente/Navigacija";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Pocetna from "./stranice/Pocetna";
import ONama from "./stranice/ONama";
import Usluge from "./stranice/Usluge";
import Pitanja from "./stranice/Pitanja";
import Kontakt from './stranice/Kontakt';

function App() {
  return (
    <>
        <BrowserRouter>
            <Navigacija />
            <Routes>
                <Route path="/" element={<Pocetna />} />
                <Route path="/onama" element={<ONama />} />
                <Route path="/usluge" element={<Usluge />} />
                <Route path="/pitanja" element={<Pitanja />} />
                <Route path="/kontakt" element={<Kontakt />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
