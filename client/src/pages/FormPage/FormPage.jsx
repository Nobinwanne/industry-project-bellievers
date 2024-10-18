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

    //form validation NOT READY
    // const [redirect, setRedirect] = useState(false);

    // const inputLabels = ["Warehouse Name", "Street Address", "City", "Country"];
    // const inputLabels2 = ["Contact Name", "Position", "Phone Number", "Email"];

    // const [error, setError] = useState({
    //     warehouseName: "",
    //     streetAddress: "",
    //     city: "",
    //     country: "",
    //     contactName: "",
    //     position: "",
    //     phoneNumber: "",
    //     email: "",
    // });

    // const [formInput, setFormInput] = useState({
    //     warehouseName: "",
    //     streetAddress: "",
    //     city: "",
    //     country: "",
    //     contactName: "",
    //     position: "",
    //     phoneNumber: "",
    //     email: "",
    // });

    // let navigate = useNavigate();

    // function handleTyping(text) {
    //     return (event) => {
    //         setFormInput({ ...formInput, [text]: event.target.value });
    //     };
    // }

    // async function handleFormSubmit(event) {
    //     event.preventDefault();

    //     const newErrors = {};
    //     let isValid = true;
    //     function isEmailPattern(email) {
    //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(email);
    //     }
    //     function isPhoneNumberPattern(phoneNumber) {
    //         return /((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/i.test(
    //             phoneNumber
    //         );
    //     }

    //     Object.keys(formInput).forEach((field) => {
    //         if (!formInput[field].trim()) {
    //             newErrors[field] = "This field is required";
    //             isValid = false;
    //         }

    //         if (formInput.email && !isEmailPattern(formInput.email)) {
    //             newErrors.email = "Please enter valid email";
    //             isValid = false;
    //         }

    //         if (
    //             formInput.phoneNumber &&
    //             !isPhoneNumberPattern(formInput.phoneNumber)
    //         ) {
    //             newErrors.phoneNumber = "Please enter valid phone number";
    //             isValid = false;
    //         }
    //     });

    //     setError(newErrors);

    //     if (isValid) {
    //         try {
    //             const response = await axios.post(
    //                 `${baseUrl}warehouses`,
    //                 formInput
    //             );

    //             setFormInput({
    //                 warehouseName: "",
    //                 streetAddress: "",
    //                 city: "",
    //                 country: "",
    //                 contactName: "",
    //                 position: "",
    //                 phoneNumber: "",
    //                 email: "",
    //             });

    //             toast.success("Warehouse added successfully", {
    //                 position: "bottom-right",
    //                 autoClose: 2000,
    //             });

    //             setRedirect(true);
    //         } catch (error) {
    //             console.log("Error adding new warehouse:", error);
    //             toast.error("Error adding warehouse", {
    //                 position: "bottom-right",
    //                 autoClose: 2000,
    //             });
    //         }
    //     } else {
    //         console.log("Validation error", newErrors);
    //     }
    // }

    // useEffect(() => {
    //     if (redirect) {
    //         setTimeout(() => {
    //             navigate("/warehouse");
    //         }, 2500);
    //     }
    // }, [redirect, navigate]);

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
