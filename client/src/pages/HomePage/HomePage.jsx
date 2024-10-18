import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../HomePage/HomePage.scss";
import Message from "../../components/Message/Message";

function HomePage() {
    const navigate = useNavigate();

    //set document title
    useEffect(() => {
        document.title = "Mindful Moments";
    }, []);

    // to redirect user to timeout page after message time is up
    //time will change depending on form submission
    useEffect(() => {
        setTimeout(() => {
            navigate("/timeout");
        }, 2000);
    }, [navigate]);

    return (
        <>
            <img
                src="/src/assets/icons/Bell Let's Talk white.svg"
                alt="Bell Let's Talk Logo"
                className="logo"
            />
            <Message />
        </>
    );
}

export default HomePage;
