import { useNavigate } from "react-router-dom";

const HomeFirstAcess = () => {
    const navigate = useNavigate();

    const clickButton = () => {
        navigate("/first-acess-create");
    }

    const clickReturn = () => {
        navigate("/");
    }

    return <div className="home">
        <div className="half left">
            <div>
                <img src="logo.svg" alt="Logo"/>
                <span>
                As finanças <br/>ao seu alcance.
            </span>
            </div>
        </div>
        <div className="half right">
            <div className="title">
                Bem vindo ao<span style={{color: "#00CFC3", marginLeft: 5}}>Near</span>
            </div>
            <form action="">
                <input type="text" placeholder="Informe seu CNPJ"/>
                <input type="password" placeholder="Informe sua senha"/>
                <button
                    className={"btn-primary button-pointer"}
                    onClick={() => {clickButton()} 
                }>
                    Entrar
                </button>
            </form>
            <button
                onClick={() => clickReturn()}
                className="btn-first-acess"
            >
                <img src="arrow-return.svg" alt="Logo"/> Voltar
            </button>
        </div>
    </div>
}

export default HomeFirstAcess;