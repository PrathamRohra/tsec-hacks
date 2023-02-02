import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import Signup from "./scenes/signup/Signup";

import Listflat from "./scenes/listaflat/Listflat";

import GeoAPI from "./scenes/GeoAPI";

import HomePage from "./scenes/Homepage/HomePage";
import Upload from "./scenes/listaflat/Upload";
import Amenities from "./scenes/listaflat/Amenities";


function App() {
    return (
        <div className="Apps">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route path="/listflat" element={<Listflat/>}/>

                    <Route path='/geolocation' element={<GeoAPI/>}/>

                    <Route path="/homePage" element={<HomePage/>}/>
                    
                    <Route path="/listflat" element={<Upload/>}/>
                    <Route path="/Amenities" element={<Amenities/>}/>

                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
