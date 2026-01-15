import ShowMessage from "./components/ShowMessage";

function App() {
  const handleMostrarMensagem = () => {
    console.log("Olá, esta é a mensagem exibida no console!");
  };

  return (
    <>
      <ShowMessage arrowfunction={handleMostrarMensagem} />
    </>
  )
}

export default App
