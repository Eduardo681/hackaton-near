import Sidebar from "../../components/Sidebar";
import Item from "../../components/Item";


const BankConsolidation = () => {
    const item = {
        razao_social: "Giovanni e Samuel Marcenaria ME",
        cnpj: "85.034.915/0001-70"
    }
    return (
        <div className="list">
            <Sidebar/>
            <div className="container">
                <div className="newContainer">
                    <button className="new">
                        <img src="novo.svg" alt="novo"/>
                    </button>
                </div>
                <div className="titleContainer">
                    <div>
                        Empresas
                    </div>
                </div>
                <div className="baseItens">
                    <Item item={item} />
                </div>
            </div>
        </div>
    )
}

export default BankConsolidation;