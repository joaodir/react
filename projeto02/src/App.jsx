import Aside from "./components/Aside"
import Footer from "./components/Footer";
import Header from "./components/Header"
import Main from "./components/Main";
import UserDetails from "./components/UserDetails";

function App() {

  return (
    <>
      <Header />
      <Aside />
      <Main />
      <Footer usuario="joaoo">
        <h6>Último login em 07/01/2026 às 19:59</h6>
      </Footer>
    </>
  )
}

export default App;
