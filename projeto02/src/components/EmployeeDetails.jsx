const EmployeeDetails = ({ nome, matricula, cargo, insalubridade, periculosidade }) => {
    return (
        <>
            <h2>Detalhes do Funcionário</h2>
            <p>Nome: {nome}</p>
            <p>Matrícula: {matricula}</p>
            <p>Cargo: {cargo}</p>
            <p>Recebe Insalubridade? <b>{insalubridade ? "Recebe" : "Não recebe"}</b></p>
            <p>Recebe Periculosidade? <b>{periculosidade ? "Recebe" : "Não recebe"}</b></p>
        </>
    );
};

export default EmployeeDetails;