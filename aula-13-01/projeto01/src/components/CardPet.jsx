import PicturePet from "./PicturePet";

const CardPet = ({nome, raca, imagem}) => {
    return (
        <div style={{border: 'dashed 2px purple', padding: '10px', margin: '10px'}}>
            <h1>Card Pet</h1>
            <p>Nome: {nome}</p>
            <p>Raça: {raca}</p>
            <PicturePet imagem={imagem} />
        </div>
    )
};

export default CardPet;