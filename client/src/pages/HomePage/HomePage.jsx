import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../HomePage/HomePage.scss";
import Message from "../../components/Message/Message";
import Footer from "../../components/Footer/Footer";

function HomePage() {
    const navigate = useNavigate();

    //set document title
    useEffect(() => {
        document.title = "Mindful Moments";
    }, []);

    // to redirect user to timeout page after message time is up
    //time will change depending on form submission input
    useEffect(() => {
        setTimeout(() => {
            navigate("/timeout");
        }, 10000);
    }, [navigate]);

    return (
        <>
            <Message />
            <Footer />
        </>
    );
}

export default HomePage;
