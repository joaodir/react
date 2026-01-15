import EmployeeDetails from "./EmployeeDetails";
const Main = () => {
    const employees = [
        { matricula: 1, nome: 'Ana', cargo: 'Desenvolvedora', insalubridade: false, periculosidade: true },
        { matricula: 2, nome: 'Bruno', cargo: 'Designer', insalubridade: false, periculosidade: false },
        { matricula: 3, nome: 'Carla', cargo: 'Gerente de Projetos', insalubridade: false, periculosidade: false },
    ];
    return (
        <>
            {
                employees.map((employee) => (
                    <EmployeeDetails
                        key={employee.matricula}
                        nome={employee.nome}
                        cargo={employee.cargo}
                        insalubridade={employee.insalubridade}
                        periculosidade={employee.periculosidade}
                        matricula={employee.matricula}
                    />
                ))};
        </>
    )
};

export default Main;