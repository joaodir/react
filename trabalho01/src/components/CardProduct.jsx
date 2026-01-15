import clsx from 'clsx';
import styles from './CardProduct.module.css';

const CardProduct = ({ nome, preco, imagem, isDisponivel, arrowfunction }) => {
    return (
        <div className={styles.card}>
            <img src={imagem} alt={nome} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            <h3>{nome}</h3>
            <p>Preço: R${preco},00</p>
            <p >{isDisponivel ? "Produto em estoque" : "Produto indisponível"}</p>
            <p>{preco > 50 ? "Frete grátis" : " Frete: R$15,00"}</p>
            <div className={styles.botao}>
                <button
                    className={
                        clsx(isDisponivel === true ? styles.disponivel : styles.indisponivel)
                    }
                    onClick={() => arrowfunction({ nome })}

                >
                    {isDisponivel ? "Comprar" : "Indisponível"}
                </button>
            </div>

        </div>



    )
}

export default CardProduct;