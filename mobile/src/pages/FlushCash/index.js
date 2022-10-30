import {
    Center,
    Container,
    AccountIconText,
    ContainerAccountIcon,
    TopDashboardAndCashFlow, ImagePerson
} from "../../global-components";

import {View, ScrollView, Text, ActivityIndicator} from "react-native";

import PeriodFilter from '../components/PeriodFilter';

import {
    ContainerTopTitle,
    FinalBalance,
    InitialBalance,
    ContainerBalanceText
} from './styles';
import Card from "../components/Card";
import axios from "axios";
import {useEffect, useState} from "react";


const FlushCash = ({navigation}) => {

    navigation.setOptions({headerTitle: "Fluxo de caixa"});

    const [consolidation, setConsolidation] = useState([]);
    useEffect(() => {
        axios.get("https://c63c-177-69-47-81.sa.ngrok.io/transactions").then((res => {
            setConsolidation(res.data.results);
            console.log(res.data.results)
        }))
    }, [])

    const saldo = () => {
        let saldoTotal = 0;
        consolidation.map(e => {
            console.log(e)
            saldoTotal += e.amount;
        })

        return saldoTotal;
    }
    const person = require("../../public/person.png");
    return (
        <Container>
            <Center
                style={{
                    backgroundColor: '#121217'
                }}
            >
                <TopDashboardAndCashFlow>
                    <ContainerAccountIcon>
                        <ImagePerson source={person}/>
                    </ContainerAccountIcon>
                </TopDashboardAndCashFlow>
                <PeriodFilter/>
            </Center>
            <ContainerBalanceText>
                <View>
                    <FinalBalance>
                        Saldo final
                    </FinalBalance>
                       <View>
                           {
                               saldo() > 0 ? <Text style={{color: "#00CFC3", fontSize: 32, marginLeft: "5%"}}>
                                  R$ {saldo().toFixed(2)}
                               </Text> : <Text style={{color: "#F54968", fontSize: 32, marginLeft: "5%"}}>
                                  R$ {saldo().toFixed(2)}
                               </Text>
                           }
                       </View>
                    <InitialBalance>
                        Saldo inicial   R$ 15.000,00
                    </InitialBalance>
                </View>
            </ContainerBalanceText>
            <View style={{flex: 4, alignItems: "center"}}>
                <ScrollView>
                    {
                        consolidation === undefined || consolidation.length === 0 ? <Center>
                                <ActivityIndicator size="large" />
                            </Center> :
                            consolidation.map(e => <Card item={e}/>)
                    }
                </ScrollView>
            </View>
        </Container>
    );
}

export default FlushCash;