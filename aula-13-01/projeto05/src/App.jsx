import ShowUserLogged from "./components/ShowUserLogged"

function App() {
  return (
    <>
      <ShowUserLogged 
        nome="Maria" 
        nivel="ouro" 
        isLoading={true} 
        isDisabled={true} 
        isDarkMode={false}
      />
    </>
  )
}

export default App
