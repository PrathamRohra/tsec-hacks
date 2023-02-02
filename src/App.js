import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import Signup from "./scenes/signup/Signup";

import Listflat from "./scenes/listaflat/Listflat";

import HomePage from "./scenes/Homepage/HomePage";
import Upload from "./scenes/listaflat/Upload";
import Amenities from "./scenes/listaflat/Amenities";
<<<<<<< HEAD
import Home from "./scenes/home/Home";
import Hotel from "./scenes/hotel/Hotel";
import List from "./scenes/list/List";
=======
import { LocationContextProvider } from './Context/LocationContext';


>>>>>>> e6c2be09905abe951a476c620ad3c5f0a5eeaf11

function App() {
    return (
        <div className="Apps">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />

                    <Route path="/signup" element={<Signup />} />

<<<<<<< HEAD
                    <Route path="/listflat" element={<Listflat />} />
=======

                    <Route path="/listflat" element={<Listflat/>}/>
>>>>>>> e6c2be09905abe951a476c620ad3c5f0a5eeaf11

                    {/* <Route path="/geolocation" element={<GeoAPI />} /> */}

<<<<<<< HEAD
                    <Route path="/homePage" element={<HomePage />} />
=======
                    <Route path="/homePage" element={<HomePage/>}/>
                    
                    <Route path="/listflat" element={<Upload/>}/>
>>>>>>> e6c2be09905abe951a476c620ad3c5f0a5eeaf11

                    <Route path="/listflat" element={<Upload />} />
                    <Route path="/Amenities" element={<Amenities />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/hotels" element={<List />} />
                    <Route path="/hotels/:id" element={<Hotel />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
