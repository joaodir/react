import clsx from 'clsx';
import "./styles.css";

const ShowUserLogged = ({ nome, nivel, isLoading, isDisabled, isDarkMode }) => {
  return (
    <>
        <p>Olá, {nome}!</p>
        <button
            disabled={isDisabled}
            className={
                clsx("btn", nivel === "ouro" ? "ouro" : "prata", {
                    disabled: isDisabled,
                    loading: isLoading,
                    dark: isDarkMode,
                })
            }
        >
        {isLoading ? "Carregando..." : "Acessar área restrita"}
        </button>
    </>
  );
};

export default ShowUserLogged; 