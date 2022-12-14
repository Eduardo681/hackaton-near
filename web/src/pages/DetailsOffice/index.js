import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DetailsOffice = () => {
    const navigate = useNavigate();

    const clickButtonReturn = () => {
        navigate("/list-escritorios");
    }

    return (
        <div className="detail-office">
            <Sidebar/>
            <div className="container">
                <div className="title">Detalhes</div>
                <div className="containerForm">
                    <div className="containerFields">
                        <div>
                            <label>Razão Social</label>
                            <input
                                className="input-transparent"
                                type="text"
                                placeholder="Informe razão social"
                                value={"Kruszlink ME"}
                            />
                        </div>
                        <div>
                            <label>CNPJ</label>
                            <p className="color-white" type="text"></p>
                            <input
                                className="input-transparent"
                                type="text"
                                placeholder="Informe o cnpj"
                                value={"11.570.199/0001-00"}
                            />
                        </div>
                        <div>
                            <label>CRC</label>
                            <input
                                type="text"
                                placeholder="Informe CRC"
                                value={"1SP999999/P1"}
                            />
                        </div>
                    </div>
                    <div className="teste">
                        <div>
                            <label>Contador responsável</label>
                            <input
                                type="text"
                                placeholder="Informe o contador responsável"
                                value={"Donicio"}
                            />
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input
                                type="text"
                                placeholder="Informe o e-mail"
                                value={"email@gmail.com"}
                            />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input
                                className="input-transparent"
                                type="password"
                                placeholder="Informe a senha"
                                value={"TESTE"}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid-buttons">
                    <button
                        className="btn-outline-primary"
                        onClick={() => clickButtonReturn()}
                    >
                        Excluir
                    </button>
                    <button
                        className="btn-primary"
                        onClick={() => clickButtonReturn()}
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsOffice;