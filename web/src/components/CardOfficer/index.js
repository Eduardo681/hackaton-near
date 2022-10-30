import axios from "axios";

const CardOfficer = props => {
    const officer = props.officer;
    return <div className="card-officer">
        <div className="row">
            <div>
                <label>Razão social</label>
                <div className="texto">{officer.razao_social}</div>
            </div>
            <div>
                <label>CNPJ</label>
                <div className="texto">{officer.cnpj}</div>
            </div>
        </div>

        <div className="row">
            <div>
                <label>Telefone</label>
                <div className="texto">{officer.telefone}</div>
            </div>
            <div>
                <label>E-mail</label>
                <div className="texto">{officer.email}</div>
            </div>
        </div>
        <div className="exportar">
            <a href="https://c63c-177-69-47-81.sa.ngrok.io/exportfiles/1">
                <img src="exportar.svg" alt="Exportar"/>
            </a>
        </div>
    </div>
}

export default CardOfficer;