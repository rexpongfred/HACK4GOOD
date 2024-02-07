import Login from "./Components/LoginComponent/Login";
import LoginPage from "./Layouts/LoginPage";

import { Routes, Route } from "react-router-dom";
import VolunteerDashboard from "./Components/Dashboard/DashboardVolunteer";
import AdminDashboard from "./Components/Dashboard/DashboardAdmin";
import EnrolledActivities from "./Pages/Enrolled Activities";
import Opportunities from "./Pages/Opportunities";
import DashboardLayout from "./Layouts/DashboardLayout";
import MyCertificates from "./Pages/MyCertificates";

function App() {
    return (
        <Routes>
            <Route element={<LoginPage />}>
                <Route path="login" element={<Login />} />
            </Route>
            <Route element={<DashboardLayout />}>
                <Route
                    path="/volunteer"
                    element={<VolunteerDashboard />}
                ></Route>
                <Route path="/admin" 
                element={<AdminDashboard />}>
                </Route>
                <Route
                    path="/enrolled-activities"
                    element={<EnrolledActivities />}
                ></Route>
                <Route path="/Opportunities" element={<Opportunities />} />
                <Route path="MyCertificates" element={<MyCertificates />} />
            </Route>
        </Routes>
    );
}

export default App;
