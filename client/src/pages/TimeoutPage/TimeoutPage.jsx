import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../TimeoutPage/TimeoutPage.scss";
import Footer from "../../components/Footer/Footer";

function TimeoutPage() {
    //set document title
    useEffect(() => {
        document.title = "Mindful Moments";
    }, []);

    //still to do here....
    //fix styling
    //add correct content

    return (
        <>
            <article className="text">
                <section className="text__container">
                    <h1 className="text__body">Thinking of you. Love, Mom</h1>
                    <p className="text__body">Gift goes here if there is one</p>
                    <p className="text__body">
                        "Everyday ............." - Stats Canada idk lorem ipsum
                        fsldafsfdfffffffwfesfesafsae sfsdfsdfsdfsfsdfssb asfba
                        fas kfsfbsd
                    </p>
                    <p className="text__body">add some resource here</p>
                </section>
            </article>
            <article className="static">
                <div className="static__button-container">
                    <Link to={`/form`}>
                        <button className="static__button">
                            Send Your Mindful Moment
                        </button>
                    </Link>
                </div>
                <Footer />
            </article>
        </>
    );
}

export default TimeoutPage;
