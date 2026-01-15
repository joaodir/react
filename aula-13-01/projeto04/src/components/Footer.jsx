import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
       <h6 className={styles.titulo}>Este é o rodapé do site.</h6>
       <p className={styles.texto_geral}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae voluptatum expedita temporibus, ex saepe ab autem, voluptates cumque, aliquam fugit architecto sed. Minus voluptatem aliquid quo natus ipsum ut consequuntur.</p>
       <p className={styles["texto-geral"]}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum aliquam explicabo, odio commodi nobis vel eum quis dicta nam hic aperiam nostrum delectus repudiandae iusto, tempore alias tenetur quam labore.</p>

    </>
  )
}

export default Footer;