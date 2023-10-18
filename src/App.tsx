import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/sign-in" element={<LoginPage/>}/>
                <Route path="/sign-up" element={<RegisterPage/>}/>
                <Route path="/*" element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}

export default App;
