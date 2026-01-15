import './Header.css';

const Header = () => {
  const ehNatal = true;
  const genero = "masculino";
  return (
    <>
      <h3 className='titulo'>Cabeçalho - Header</h3>
      <p className='titulo_paragrafo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ducimus cupiditate omnis quod iure non accusantium incidunt nobis. Cum expedita quo, placeat minima eveniet sint inventore illum rem laudantium quas!</p>
      <p style={ehNatal ? {color:'red'} : {color: 'black'}}> Bem-vindo!</p>
      <p className={genero === "Feminino" ? "msg_mulher" : "msg_homem"}>Olá, {genero === "Feminino" ? "mulher" : "homem"}!</p>
    </>
  );
};

export default Header;