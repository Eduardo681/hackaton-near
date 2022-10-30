import Sidebar from "../../components/Sidebar";
import Item from "../../components/Item";


const ListEscritorios = () => {
    const item = {
        razao_social: "Pedro Kruszynski ME",
        cnpj: "45.076.900/0001-55"
    }

    return (
        <div className="list">
            <Sidebar/>
            <div className="container">
                <div className="newContainer">
                    <button className="new">
                        <img src="novo-esc.svg" alt="novo"/>
                    </button>
                </div>
                <div className="titleContainer">
                    <div>
                        Escrítorios de contabilidade
                    </div>
                </div>
                <div className="baseItens">
                    <Item item={item} />
                </div>
            </div>
        </div>
    )
}

export default ListEscritorios;