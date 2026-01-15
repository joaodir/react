const Card = ({ title, manchete, texto }) => {
    return (
        <>
        <h1>{title}</h1>
        <h2>{manchete}</h2>
        <p>{texto}</p>
        </>
    );
}

export default Card;