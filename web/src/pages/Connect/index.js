import Sidebar from "../../components/Sidebar";

const Connect = () => {
    return (
        <div className="connect">
            <Sidebar/>
            <div className="container">
                <div className="title">Associar nova empresa</div>
                <div className="containerForm">
                    <div>
                        <label>CNPJ</label>
                        <input type="text" placeholder="Informe CNPJ"/>
                    </div>
                    <div>
                        <label>Razão social</label>
                        <input type="text" placeholder="Informe a razão social"/>
                    </div>
                    <div>
                        <label>Senha provisória</label>
                        <input type="text" placeholder="Informe senha provisória"/>
                    </div>
                </div>
                <button className="btn-primary">Salvar</button>
            </div>
        </div>
    )
}

export default Connect;