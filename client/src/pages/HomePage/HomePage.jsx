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
        <article className="message">
            <section className="message__container">
                <h1 className="message__header">Take a moment to...</h1>
                <p className="message__script">Breathe.</p>
            </section>
            <section className="timer">
                <span className="timer-box"></span>
            </section>
        </article>
    );
}

export default HomePage;
