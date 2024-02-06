import Login from "./Components/LoginComponent/Login";
import LoginPage from "./Layouts/LoginPage";

import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";

function App() {
    return (
        <Routes>
            <Route element={<LoginPage />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="/" element={<Dashboard />}></Route>
        </Routes>
    );
}

export default App;
