import PicturePet from './components/PicturePet';
import cm02 from './assets/cm02.webp';
import cm01 from './assets/cm01.jpg';
function App() {
  const pets = [
    {
      id: 1,
      foto: cm01,
      nome: 'Luna',
      raca: 'Siamês',
      idade: 3,
      exibirDetalhes: true
    },
    {
      id: 2,
      foto: cm02,
      nome: 'Thor',
      raca: 'Vira-lata',
      idade: 5,
      exibirDetalhes: false
    }
  ];

  return (
    <>
      {pets.map((pet) => (
        <PicturePet 
          key={pet.id}
          foto={pet.foto}
          nome={pet.nome}
          raca={pet.raca}
          idade={pet.idade}
          exibirDetalhes={pet.exibirDetalhes}
        />
      ))}
    </>
  )
}

export default App
