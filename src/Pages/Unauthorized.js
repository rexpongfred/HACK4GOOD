import { useNavigate } from "react-router-dom";
// import "./pages.css";
import { Button } from "@mui/material";

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className="page">
            <h1>Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow">
                <Button variant="contained" onClick={goBack}>
                    Go Back
                </Button>
            </div>
        </section>
    );
};

export default Unauthorized;
