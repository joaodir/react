import cm01 from "./assets/cm01.jpg";
import cm02 from "./assets/cm02.webp"; 
import CardPet from "./components/CardPet";

function App() {
  const pets = [
    {
      id: 1,
      nome: "Luna",
      imagem: cm01,
      raca: "frio"
    },
    {
      id: 2,
      nome: "Bolt",
      imagem: cm02,
      raca: "quente"
    },
  ];

  return (
    <>
      {
        pets.map((pet) => (
          <CardPet 
            key={pet.id}
            nome={pet.nome}
            raca={pet.raca}
            imagem={pet.imagem}
          />
        ))
      }    
    </>
  )
}

export default App
