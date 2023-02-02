import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import Signup from "./scenes/signup/Signup";
import Listflat from "./scenes/listaflat/Listflat";

function App() {
    return (
        <div className="Apps">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/listflat" element={<Listflat/>}/>
                </Routes>
               
                
              
            </BrowserRouter>
        </div>
    );
}

export default App;
