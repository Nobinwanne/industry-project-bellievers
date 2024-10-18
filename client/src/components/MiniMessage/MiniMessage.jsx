import "../MiniMessage/MiniMessage.scss";

function MiniMessage({ script }) {
    return (
        <>
            <article className="mini-message">
                <section className="mini-message__container">
                    <h1 className="mini-message__header fade-in">
                        Take a moment to...
                    </h1>
                    <p className="fade-in mini-message__script">{script}</p>
                </section>
            </article>
        </>
    );
}

export default MiniMessage;
