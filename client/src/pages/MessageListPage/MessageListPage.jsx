import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../MessageListPage/MessageListPage.scss";
import MiniMessage from "../../components/MiniMessage/MiniMessage";
import Footer from "../../components/Footer/Footer";

function MessageListPage() {
    //set document title
    useEffect(() => {
        document.title = "Your Mindful Moments";
    }, []);

    const scripts = [
        "Breathe.",
        "Love.",
        "Smile.",
        "Laugh.",
        "Relax.",
        "Live.",
        "Be You.",
    ];

    return (
        <div className="gallery">
            <article className="gallery__wrapper">
                <section className="gallery__container">
                    {scripts.map((script, index) => (
                        <MiniMessage key={index} script={script} />
                    ))}
                </section>
            </article>
            <Footer />
        </div>
    );
}

export default MessageListPage;
