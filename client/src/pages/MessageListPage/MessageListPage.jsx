import { useEffect } from "react";
import { formatDate } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import "../MessageListPage/MessageListPage.scss";
import MiniMessage from "../../components/MiniMessage/MiniMessage";
import Footer from "../../components/Footer/Footer";
import "./MessageListPage.scss";

function MessageListPage() {
    const [color, setColor] = useState("#00549a");
    const [allMoments, setAllMoments] = useState([]);

    const getAllMoments = async () => {
        try {
            const response = await axios.get("http://localhost:8080/moments");
            setAllMoments(response.data);
        } catch (err) {
            console.error("Failed to fetch moments list", err);
        }
    };

    useEffect(() => {
        getAllMoments();
    }, [allMoments]);

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
        <div>
            {allMoments.map((currentMoment, key) => (
                <div className="moments__section" key={key}>
                    <p className="moments__message">{currentMoment.message}</p>
                    <div className="moments__container">
                        <p className="form__gift">
                            {" "}
                            Gift: {currentMoment.gift}
                        </p>
                        <p className="moments__name">
                            {" "}
                            From: {currentMoment.name}
                        </p>
                        <p className="moments__timestamp">
                            Posted: {formatDate(currentMoment.timestamp)}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );

    // return (
    //     <div className="gallery">
    //         <article className="gallery__wrapper">
    //             <section className="gallery__container">
    //                 {scripts.map((script, index) => (
    //                     <MiniMessage key={index} script={script} />
    //                 ))}
    //             </section>
    //         </article>
    //         <Footer />
    //     </div>
    // );
}

export default MessageListPage;
