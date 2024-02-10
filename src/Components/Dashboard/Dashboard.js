import React from "react";

import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";

import { jwtDecode as jwt_decode } from "jwt-decode";
import DashboardVolunteer from "./DashboardVolunteer";
import DashboardAdmin from "./DashboardAdmin";

const DashboardBasedOnRole = {
    volunteer: <DashboardVolunteer />,
    admin: <DashboardAdmin />,
};

function Dashboard() {
    const { auth } = useAuth();

    const [role, setRole] = useState("volunteer");

    useEffect(() => {
        const decoded = auth?.accessToken
            ? jwt_decode(auth.accessToken)
            : undefined;

        setRole(decoded?.UserInfo?.role || "volunteer");
    }, []);
    return role ? DashboardBasedOnRole[role] : "";
}

export default Dashboard;
