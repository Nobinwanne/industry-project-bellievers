import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../FormPage/FormPage.scss";
import Footer from "../../components/Footer/Footer";

function FormPage() {
    //set document title
    useEffect(() => {
        document.title = "Send a Mindful Moment";
    }, []);

    return (
        <>
            Form Page Place holder
            <Footer />
        </>
    );
}

export default FormPage;
