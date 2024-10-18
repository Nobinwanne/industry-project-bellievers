import "../Message/Message.scss";

function Message() {
    return (
        <>
            <article className="message">
                <section className="message__container">
                    <h1 className="message__header">Take a moment to...</h1>
                    <p className="message__script">Breathe.</p>
                </section>
            </article>
            <article className="timer">
                <span className="timer__container">
                    <div className="timer__dot"></div>
                    <div className="timer__dot"></div>
                    <div className="timer__dot"></div>
                    <div className="timer__dot"></div>
                    <div className="timer__dot"></div>
                    <div className="timer__dot"></div>
                </span>
            </article>
        </>
    );
}

export default Message;
