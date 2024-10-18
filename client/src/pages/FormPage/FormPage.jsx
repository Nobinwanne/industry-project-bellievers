import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../FormPage/FormPage.scss";
import Footer from "../../components/Footer/Footer";

function FormPage() {
    //set document title
    useEffect(() => {
        document.title = "Send a Mindful Moment";
    }, []);

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
            <form className="form__box">
                <label htmlFor="title" className="form__label">
                    Take a moment to...
                    <input
                        id="title"
                        type="text"
                        className="form__input"
                        placeholder="breathe"
                    />
                </label>

                <label htmlFor="length" className="form__label">
                    Message Length
                    <input
                        id="length"
                        type="text"
                        className="form__input"
                        placeholder="60sec"
                    />
                </label>

                <label htmlFor="message" className="form__label">
                    Personal Message
                    <input
                        id="message"
                        type="text"
                        className="form__input"
                        placeholder="personal message"
                    />
                </label>

                <label htmlFor="gift" className="form__label">
                    Gift
                    <input
                        id="gift"
                        type="text"
                        className="form__input"
                        placeholder="add an optional gift"
                    />
                </label>
            </form>
            <Footer />
        </div>
    );
}

export default FormPage;
