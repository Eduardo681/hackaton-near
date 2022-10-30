import Sidebar from "../../components/Sidebar";

const DetailsOffice = () => {

    return (
        <div className="detail-office">
            <Sidebar/>
            <div className="container">
                <div className="title">Detalhes</div>
                <div className="containerForm">
                    <div className="teste">
                        <div>
                            <label>Razão Social</label>
                            <input
                                className="input-transparent"
                                type="text"
                                placeholder="Informe razão social"
                                value={"RAZÃO SOCIAL FODA"}
                            />
                        </div>
                        <div>
                            <label>CNPJ</label>
                            <p className="color-white" type="text"></p>
                            <input
                                className="input-transparent"
                                type="text"
                                placeholder="Informe o cnpj"
                                value={"CNPJ FODA"}
                            />
                        </div>
                        <div>
                            <label>CRC</label>
                            <input type="text" placeholder="Informe CRC" />
                        </div>
                    </div>
                    <div className="teste">
                        <div>
                            <label>Contador responsável</label>
                            <input type="text" placeholder="Informe o contador responsável" />
                        </div>
                        <div>
                            <label>E-mail</label>
                            <input type="text" placeholder="Informe o e-mail" />
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
                <button className="btn-outline-primary">Excluir</button>
                <button className="btn-primary">Salvar</button>
            </div>
        </div>
    )
}

export default DetailsOffice;