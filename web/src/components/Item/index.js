import { useNavigate } from "react-router-dom";

const Item = props => {
    const navigate = useNavigate();

    const clickButtonDetalhes = () => {
        navigate("/details-office/1");
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