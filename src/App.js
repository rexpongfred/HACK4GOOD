import Login from "./Components/LoginComponent/Login";
import LoginPage from "./Layouts/LoginPage";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import Opportunities from "./Pages/Opportunities"

function App() {
    return (
        <Routes>
            <Route element={<LoginPage />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Opportunities" element={<Opportunities />} />
        </Routes>
    );
}

export default App;
