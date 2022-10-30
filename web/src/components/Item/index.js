const Item = props => {
    const item = props.item;
    return <>
        <div className="item">
            <div className="itemText">
                <div className="title">{item.razao_social}</div>
                <label>{item.cnpj}</label>
            </div>
            <button>
                <img src="excluir.svg" alt="excluir"/>
            </button>
        </div>
    </>
}

export default Item;