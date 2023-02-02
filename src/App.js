import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import Signup from "./scenes/signup/Signup";

import Listflat from "./scenes/listaflat/Listflat";
import HomePage from "./scenes/Homepage/HomePage";

function App() {
    return (
        <div className="Apps">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route path="/listflat" element={<Listflat/>}/>
                    <Route path="/homePage" element={<HomePage/>}/>

                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
