import Card from "./Card";

const Main = () => {
    const notices = [
        { title: 'Novo Projeto', manchete: 'Lançamento do Novo Projeto X', texto: 'Estamos entusiasmados em anunciar o lançamento do Projeto X, que visa revolucionar a indústria com suas inovações.' },
        { title: 'Atualização de Sistema', manchete: 'Manutenção Programada', texto: 'Nosso sistema passará por uma manutenção programada no próximo sábado, das 2h às 4h da manhã.' },
        { title: 'Evento Corporativo', manchete: 'Conferência Anual da Empresa', texto: 'Junte-se a nós para a Conferência Anual, onde discutiremos as conquistas do ano e os planos futuros.' },
    ];

    return (
        <>
            {
                // aqui fazemos o map nas notices
                notices.map((notice) => (
                    // usamos o Card para cada notice pois ele é o componente que exibe as notícias
                    <Card
                        key={notice.title}
                        title={notice.title}
                        manchete={notice.manchete}
                        texto={notice.texto}
                    />
                ))
            }
        </>
       
    )
}

export default Main;