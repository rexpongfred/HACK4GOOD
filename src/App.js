import Login from "./Components/LoginComponent/Login";
import Register from "./Components/Register/Register";
import Unauthorized from "./Pages/Unauthorized";
import LoginPage from "./Layouts/LoginPage";

import { Routes, Route } from "react-router-dom";
import VolunteerDashboard from "./Components/Dashboard/DashboardVolunteer";
import AdminDashboard from "./Components/Dashboard/DashboardAdmin";
import EnrolledActivities from "./Pages/Enrolled Activities";
import Opportunities from "./Pages/Opportunities";
import MyCertificate from "./Pages/MyCertificate";
import CreateForm from "./Pages/CreateForm";
import DashboardLayout from "./Layouts/DashboardLayout";
import RequireAuth from "./Components/RequireAuth";
import PersistLogin from "./Components/PersistLogin";

function App() {
    return (
        <Routes>
            <Route element={<LoginPage />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="unauthorized" element={<Unauthorized />} />
            </Route>
            <Route element={<PersistLogin />}>
                <Route element={<DashboardLayout />}>
                    <Route
                        element={<RequireAuth allowedRoles={["volunteer"]} />}
                    >
                        <Route path="/" element={<VolunteerDashboard />} />
                    </Route>

                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route
                        path="/enrolled-activities"
                        element={<EnrolledActivities />}
                    />
                    <Route path="/Opportunities" element={<Opportunities />} />
                    <Route path="MyCertificate" element={<MyCertificate />} />
                    <Route path="createForm" element={<CreateForm />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
