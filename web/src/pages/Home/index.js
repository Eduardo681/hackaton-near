import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const clickButton = () => {
        navigate("/list-escritorios");
    }

    const clickfirstAcess = () => {
        navigate("/first-acess");
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
                Bem vindo ao   <span style={{color: "#00CFC3", marginLeft: 5}}>Near</span>
            </div>
            <form action="">
                <input type="text" placeholder="Informe seu e-mail"/>
                <input type="password" placeholder="Informe sua senha"/>
                <button
                    className={"btn-primary button-pointer"}
                    onClick={() => {clickButton()} 
                }>
                    Entrar
                </button>
            </form>
            <button
                onClick={() => clickfirstAcess()}
                className="btn-first-acess"
            >
                Primeiro acesso
            </button>
        </div>
    </div>
}

export default Home;