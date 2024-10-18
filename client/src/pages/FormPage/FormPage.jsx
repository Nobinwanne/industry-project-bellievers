import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../FormPage/FormPage.scss";
import Footer from "../../components/Footer/Footer";

function FormPage() {
    const [color, setColor] = useState("#00549a");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        moment: "",
        message: "",
        gift: "",
        recipient: "",
        name: "",
        phone: "",
        length: "",
    });

    const addMoment = async () => {
        try {
            const newMoment = {
                name: formData.name,
                moment: formData.moment,
                message: formData.message,
                length: formData.length,
                gift: formData.gift,
                recipient: formData.recipient,
                phone: formData.phone,
                timestamp: Date.now(),
            };

            console.log(newMoment);

            await axios.post(`http://localhost:8080/moments`, newMoment);
            setFormData({
                moment: "",
                message: "",
                gift: "",
                recipient: "",
                name: "",
                phone: "",
                length: "",
            });

            setIsSubmitted(true);
        } catch (err) {
            console.error("Failed to send moment", err);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        addMoment();
        console.log("Moment added");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === "color") {
            setColor(value);
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        document.title = "Send a Mindful Moment";
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    let navigate = useNavigate();

    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                navigate("/moments");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [isSubmitted, navigate]);

    return (
        <div className="form" id="postMoment">
            <h1 className="form__title">Send A Mindful Moment</h1>
            <form className="form__box" onSubmit={submitHandler}>
                <label htmlFor="moment" className="form__label">
                    Take a moment to...
                    <select
                        id="moment"
                        name="moment"
                        value={formData.moment}
                        onChange={handleChange}
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form__input form__input--tall"
                        placeholder="Write a personalized message"
                    />
                </label>
                <label htmlFor="gift" className="form__label">
                    Gift
                    <select
                        id="gift"
                        name="gift"
                        value={formData.gift}
                        onChange={handleChange}
                        className="form__input form__input--select"
                    >
                        <option>Select a Gift (optional)</option>
                        <option>$5 for Coffee</option>
                        <option>$5 for Me Time</option>
                        <option>$5 for a Massage</option>
                        <option>$5 for Lunch</option>
                    </select>
                </label>
                <label htmlFor="recipient" className="form__label">
                    To
                    <input
                        id="recipient"
                        name="recipient"
                        type="text"
                        value={formData.recipient}
                        onChange={handleChange}
                        className="form__input"
                        placeholder="Recipient's phone number (123) 456 7890"
                    />
                </label>
                <label htmlFor="name" className="form__label">
                    From
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="form__input"
                        placeholder="Your name (optional)"
                    />
                </label>
                <label htmlFor="length" className="form__label">
                    Message Length
                    <select
                        id="length"
                        name="length"
                        value={formData.length}
                        onChange={handleChange}
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
                        name="color"
                        type="color"
                        value={color}
                        onChange={handleChange}
                        className="form__input form__input--color"
                    />
                </label>
                <div className="form__button-container">
                    <button className="form__button">Send</button>
                </div>
            </form>
            <Footer />
        </div>
    );
}

export default FormPage;
