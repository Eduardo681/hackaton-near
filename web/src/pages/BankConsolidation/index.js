import Sidebar from "../../components/Sidebar";
import CardOfficer from "../../components/CardOfficer";
import CardConsolidation from "../../components/CardConsolidation";
import {useEffect} from "react";
import axios from "axios";

const BankConsolidation = () => {
    const officer = {
        "razao_social": "Enzo e Jéssica Construções ME",
        "cnpj": "02.213.088/0001-55",
        "telefone": "(14) 99280-5093",
        "email": "contato@construcoesme.com.br"
    }

    let consolidation = [];
    useEffect(() => {
        axios.get("https://c63c-177-69-47-81.sa.ngrok.io/transactions").then((res => {
            consolidation = res.data.results
        }))
    }, consolidation)

    const saldo = () => {
        let saldoTotal = 0;
        consolidation.map(e => {
            console.log(e)
            saldoTotal += e.amount;
        })

        return saldoTotal;
    }
    return (
        <div className="consolidation">
            <Sidebar/>
            <div className="container">
                <div className="title">Demonstração bancária</div>
                <CardOfficer officer={officer}></CardOfficer>
                <div className="saldo title">
                    Saldo final
                    <br/>
                    <div className={saldo() > 0 ? "positive" : "negative"}>
                        R$ {saldo()}
                    </div>
                </div>
                {
                    consolidation.map(e => <CardConsolidation key={e.id} consolidation={e}
                                                              hasData={e.paymentData !== null}/>)
                }
            </div>
        </div>
    )
}

export default BankConsolidation;