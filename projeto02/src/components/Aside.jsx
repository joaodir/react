import EmployeeDetails from "./EmployeeDetails";
import UserDetails from "./UserDetails";
import ShowUserLogged from "./ShowUserLogged";

const Aside = () => {
    return (
        <>
            <ShowUserLogged login="jotade" nome="João Dirceu" />
            <UserDetails cargo="Técnico de TI" matricula="AAA123" idade={23} />
            <EmployeeDetails
                nome="Maria Silva"
                matricula="BBB456"
                cargo="Analista de Sistemas"
                insalubridade={false}
                periculosidade={false}
            />
            <EmployeeDetails
                nome="Carlos Souza"
                matricula="CCC789"
                cargo="Desenvolvedor Frontend"
                insalubridade={false}
                periculosidade={true}
            />
        </>
    )
}

export default Aside;