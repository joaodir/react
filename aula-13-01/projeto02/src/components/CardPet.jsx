const CardPet = ({ nome, raca, idade }) => {
    return (
        <div>
            <h2>Informações sobre o Pet</h2>
            <p>Nome: {nome}</p>
            <p>Raça: {raca}</p>
            <p>Idade: {idade}</p>
        </div>
    )
};

export default CardPet;