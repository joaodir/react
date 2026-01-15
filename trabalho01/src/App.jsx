import CardProduct from './components/CardProduct';
import mouse from './assets/mouse.jpg';
import pcgamer from './assets/pcgamer.jpg';
import nokia from './assets/nokia.jpg';
import alexa from './assets/alexa.jpg';
import monitor from './assets/monitor.jpg';
import fone from './assets/fone.jpg';
import './App.css'

function App() {
  const handleClick = ({ nome }) => {
    console.log(nome);
  }
  const products = [
    {
      id: 1,
      nome: 'Mouse Ergonômico',
      preco: 40.0,
      imagem: mouse,
      isDisponivel: false
    },
    {
      id: 2,
      nome: "PC Gamer Completo",
      preco: 5500.0,
      imagem: pcgamer,
      isDisponivel: true
    },
    {
      id: 3,
      nome: 'Alexa',
      preco: 300.0,
      imagem: alexa,
      isDisponivel: true
    },
    {
      id: 4,
      nome: 'Monitor 4K',
      preco: 1200.0,
      imagem: monitor,
      isDisponivel: false
    },
    {
      id: 5,
      nome: 'Nokia de última geração',
      preco: 100000.0,
      imagem: nokia,
      isDisponivel: false
    },
    {
      id: 6,
      nome: 'Fone de Ouvido Bluetooth',
      preco: 350.0,
      imagem: fone,
      isDisponivel: true
    }

  ]
  return (
    <div>
      <h1>Lojinha do João e Nicole</h1>
      <h2>Arrecadando fundos para a Mili e a Moli (e a Dura)</h2>
        {products.map(product => (
          <CardProduct
            key={product.id}
            nome={product.nome}
            preco={product.preco}
            imagem={product.imagem}
            isDisponivel={product.isDisponivel}
            arrowfunction={handleClick}
          />
        ))}
    </div>
  )
}

export default App
