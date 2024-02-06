import Login from "./Components/LoginComponent/Login";
import LoginPage from "./Layouts/LoginPage";

import { Routes, Route } from "react-router-dom";
import VolunteerDashboard from "./Components/Volunteer Dashboard/Dashboard";
import AdminDashboard from "./Components/Admin Dashboard/Dashboard";

function App() {
    return (
        <Routes>
            <Route element={<LoginPage />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="/volunteer" element={<VolunteerDashboard />}></Route>
            <Route path="/admin" element={<AdminDashboard />}></Route>
        </Routes>
    );
}

export default App;
