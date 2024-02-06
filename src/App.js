import Login from "./Components/LoginComponent/Login";
import LoginPage from "./Layouts/LoginPage";

import { Routes, Route } from "react-router-dom";
import VolunteerDashboard from "./Components/Dashboard/DashboardVolunteer";
import AdminDashboard from "./Components/Dashboard/DashboardAdmin";
import EnrolledActivities from "./Components/Dashboard/Enrolled Activities";
import Opportunities from "./Pages/Opportunities"

function App() {
    return (
        <Routes>
            <Route element={<LoginPage />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route path="/volunteer" element={<VolunteerDashboard />}></Route>
            <Route path="/admin" element={<AdminDashboard />}></Route>
            <Route path="/enrolled-activities" element={<EnrolledActivities />}></Route>
            <Route path="/Opportunities" element={<Opportunities />} />
        </Routes>
    );
}

export default App;
