import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../HomePage/HomePage.scss";

function HomePage() {
    const navigate = useNavigate();

    //set document title
    useEffect(() => {
        document.title = "Mindful Moments";
    }, []);

    // to redirect user to timeout page after message time is up
    // useEffect(() => {
    //     setTimeout(() => {
    //         navigate("/timeout");
    //     }, 2000);
    // }, [navigate]);

    return (
        <div className="not-found">
            <h1 className="not-found__title">HomePage</h1>
            <p className="not-found__text">Home</p>
        </div>
    );
}

export default HomePage;
