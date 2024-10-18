import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../FormPage/FormPage.scss";
import Footer from "../../components/Footer/Footer";

function FormPage() {
    const [color, setColor] = useState("#00549a");

    //set document title
    useEffect(() => {
        document.title = "Send a Mindful Moment";
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    return (
        <div className="form">
            <h1 className="form__title">Send A Mindful Moment</h1>
            <form className="form__box">
                <label htmlFor="title" className="form__label">
                    Take a moment to...
                    <select
                        id="title"
                        type="select"
                        className="form__input form__input--select"
                    >
                        <option>Select an Action</option>
                        <option>Breathe</option>
                        <option>Smile</option>
                        <option>Laugh</option>
                        <option>Relax</option>
                    </select>
                </label>
                <label htmlFor="message" className="form__label">
                    Personal Message
                    <textarea
                        id="message"
                        type="text area"
                        className="form__input form__input--tall"
                        placeholder="Write a personalized message"
                    />
                </label>
                <label htmlFor="gift" className="form__label">
                    Gift
                    <select
                        id="gift"
                        type="select"
                        className="form__input form__input--select"
                    >
                        <option>Select a Gift (optional)</option>
                        <option>$5 for Coffee</option>
                        <option>$5 for Me Time</option>
                        <option>$5 for a Massage</option>
                        <option>$5 for Lunch</option>
                    </select>
                </label>
                <label htmlFor="to" className="form__label">
                    To
                    <input
                        id="to"
                        type="text"
                        className="form__input"
                        placeholder="(123) 456 7890"
                    />
                </label>
                <label htmlFor="from" className="form__label">
                    From
                    <input
                        id="from"
                        type="text"
                        className="form__input"
                        placeholder="Write your name (optional)"
                    />
                </label>
                <label htmlFor="length" className="form__label">
                    Message Length
                    <select
                        id="length"
                        type="select"
                        className="form__input form__input--select"
                    >
                        <option>Select Length of Message</option>
                        <option>10 sec</option>
                        <option>30 sec</option>
                        <option>45 sec</option>
                        <option>60 sec</option>
                    </select>
                </label>
                <label htmlFor="color" className="form__label">
                    Background Colour
                    <input
                        id="color"
                        type="color"
                        className="form__input form__input--select form__input--color"
                        defaultValue="#00549a"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </label>
                <div className="form__button-container">
                    <Link to={`/messages`}>
                        <button className="form__button">Send</button>
                    </Link>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default FormPage;
