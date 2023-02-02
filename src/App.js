import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./scenes/login/Login";
import Signup from "./scenes/signup/Signup";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />


                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
