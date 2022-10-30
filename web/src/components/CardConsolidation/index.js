import Moment from 'moment';

const CardConsolidation = props => {
    const consolidation = props.consolidation;
    const type = props.hasData && consolidation.paymentData != null && consolidation.paymentData.payer.documentNumber.type === "CPF";
    return <div className="card-officer card-consolidation">
        <div className="general">
            <div>
                <div className="grey">{Moment(consolidation.date).format('dd/MM/YYYY')}></div>
                <div className="title">{consolidation.category}</div>
            </div>
            <div>
                {props.hasData && consolidation.paymentData != null ? <>
                    <div
                        className="grey">{consolidation.paymentData.payer.name} - {type ? "Pessoa fisíca" : "Pessoa juridica"}</div>
                    <div className="grey">{consolidation.paymentData.payer.documentNumber.value}</div>
                </> : <></>}
            </div>
        </div>
        <div className="method">
            {
                props.hasData && consolidation.paymentData != null ?
                    <div className="payment"> {consolidation.paymentData["paymentMethod"]}
                    </div> : <></>
            }

        </div>
        <div className="amount">
            <div className={consolidation.amount > 0 ? "positive" : "negative"}>
                {}
                R$ {consolidation.amount != null ? consolidation.amount.toFixed(2) : ""}
            </div>
        </div>
    </div>
}

export default CardConsolidation;