import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../TimeoutPage/TimeoutPage.scss";

function TimeoutPage() {
    //set document title
    useEffect(() => {
        document.title = "Mindful Moments";
    }, []);

    //still to do here....
    //fix styling
    //add correct content
    //add animation so content appears one at a time fade in
    //style button and navigate to forj page

    return (
        <article className="text">
            <section className="text__container">
                <h1 className="text__from">Thinking of you. Love Mom</h1>
                <p className="text__gift">Gift goes here if there is one</p>
                <p className="text__stat">
                    "Everyday ............." - Stats Canada idk
                </p>
                <p className="text__resources">add some resource here</p>
                <button className="text__button">
                    Send Your Mindful Moment
                </button>
                <img
                    src="/src/assets/icons/Bell Let's Talk white.svg"
                    alt="Bell Let's Talk Logo"
                    className="text__logo"
                />
            </section>
        </article>
    );
}

export default TimeoutPage;
