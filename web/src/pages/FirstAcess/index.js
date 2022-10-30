import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

const DetailsOffice = () => {
    const navigate = useNavigate();

    const clickButtonSave = () => {
        navigate("/list");
    }

    return (
        <div className="detail-office">
            <Sidebar/>
            <div className="container">
                <div className="title">Primeiro acesso - atualização de dados</div>
                <div className="containerForm">
                    <div className="containerFields">
                        <div>
                            <label>Razão Social</label>
                            <input
                                className="input-transparent"
                                type="text"
                                placeholder="Informe razão social"
                            />
                        </div>
                        <div>
                            <label>CNPJ</label>
                            <p className="color-white" type="text"></p>
                            <input
                                className="input-transparent"
                                type="text"
                                placeholder="Informe o cnpj"
                            />
                        </div>
                        <div>
                            <label>CRC</label>
                            <input
                                type="text"
                                placeholder="Informe CRC"
                            />
                        </div>
                    </div>
                    <div className="teste">
                        <div>
                            <label>Contador responsável</label>
                            <input
                                type="text"
                                placeholder="Informe o contador responsável"
                            />
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input
                                type="text"
                                placeholder="Informe o e-mail"
                            />
                        </div>
                        <div>
                            <label>Senha</label>
                            <input
                                className="input-transparent"
                                type="password"
                                placeholder="Informe a senha"
                            />
                        </div>
                    </div>
                </div>
                <div className="grid-buttons">
                    <button
                        className="btn-primary button-pointer"
                        onClick={() => clickButtonSave()}
                    >
                        Salvar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DetailsOffice;