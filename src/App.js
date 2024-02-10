import Login from "./Components/LoginComponent/Login";
import Register from "./Components/Register/Register";
import Unauthorized from "./Pages/Unauthorized";
import LoginPage from "./Layouts/LoginPage";

import { Routes, Route } from "react-router-dom";
import EnrolledActivities from "./Pages/Enrolled Activities";
import Opportunities from "./Pages/Opportunities";
import MyCertificate from "./Pages/MyCertificate";
import CreateForm from "./Pages/CreateForm";
import DashboardLayout from "./Layouts/DashboardLayout";
import RequireAuth from "./Components/RequireAuth";
import PersistLogin from "./Components/PersistLogin";
import Dashboard from "./Components/Dashboard/Dashboard";
import TakeAttendance from "./Pages/TakeAttendance";
import ViewActivities from "./Pages/ViewActivities";

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
                        element={
                            <RequireAuth
                                allowedRoles={["volunteer", "admin"]}
                            />
                        }
                    >
                        <Route path="/" element={<Dashboard />} />
                    </Route>

                    {/* Volunteer Routes */}
                    <Route
                        element={<RequireAuth allowedRoles={["volunteer"]} />}
                    >
                        <Route
                            path="/enrolled-activities"
                            element={<EnrolledActivities />}
                        />
                    </Route>
                    <Route
                        element={<RequireAuth allowedRoles={["volunteer"]} />}
                    >
                        <Route
                            path="/Opportunities"
                            element={<Opportunities />}
                        />
                    </Route>

                    <Route
                        element={<RequireAuth allowedRoles={["volunteer"]} />}
                    >
                        <Route
                            path="/MyCertificate"
                            element={<MyCertificate />}
                        />
                    </Route>
                    <Route
                        element={<RequireAuth allowedRoles={["volunteer"]} />}
                    >
                        <Route
                            path="/viewactivities"
                            element={<ViewActivities />}
                        />
                    </Route>

                    {/* Admin Routes */}
                    <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                        <Route
                            path="/takeattendance"
                            element={<TakeAttendance />}
                        />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                        <Route path="/createForm" element={<CreateForm />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
