import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../TimeoutPage/TimeoutPage.scss";
import Footer from "../../components/Footer/Footer";

function TimeoutPage() {
    //set document title
    useEffect(() => {
        document.title = "Mindful Moments";
    }, []);

    return (
        <>
            <article className="text">
                <section className="text__container">
                    <h1 className="text__body">
                        Thinking of you. Let's talk soon. Love, Mom
                    </h1>
                    <p className="text__body">Treat yourself! $5 for Coffee</p>
                    <p className="text__body">
                        "33% of employed Canadians are burned out.* In some
                        professions, however, it is much higher (e.g., 66% of
                        nurses, and 61% of the mental health workforce)"
                    </p>
                    <p className="text__body">
                        15% of Canadians have accessed mental health services in
                        the last year, an additional 6% believe they should but
                        are not."
                    </p>
                    <p className="text__body">
                        1 in 8 Canadians have been experiencing high levels of
                        anxiety. Those indicating feeling high anxiety was 7%
                        just before the pandemic and 11% now. 1 in 4 Canadians
                        will receive a lifetime diagnosis of anxiety."
                    </p>
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
