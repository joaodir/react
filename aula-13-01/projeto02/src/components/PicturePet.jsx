import CardPet from "./CardPet";

const PicturePet = ({ foto, nome, raca, idade, exibirDetalhes }) => {
  return (
    <div style={{border: 'dashed 2px green', padding: '10px', margin: '10px'}}>
      <img src={foto} title={nome} alt={raca} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />

      {exibirDetalhes && <CardPet nome={nome} raca={raca} idade={idade} />}
    </div>
  )
};

export default PicturePet;