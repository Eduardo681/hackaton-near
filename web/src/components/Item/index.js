import { useNavigate } from "react-router-dom";

const Item = props => {
    const navigate = useNavigate();

    const clickButtonDetalhes = () => {
        if (props.item.type_screen === "consolidation") {
            return navigate("/bank-consolidation");
        }
        return navigate("/details-office");
    }

    const item = props.item;
    return <>
        <div className="item"
            onClick={() => clickButtonDetalhes()}
        >
            <div className="itemText">
                <div className="title">
                    {item.razao_social}
                </div>
                <label>{item.cnpj}</label>
            </div>
            <button>
                <img src="excluir.svg" alt="excluir"/>
            </button>
        </div>
    </>
}

export default Item;