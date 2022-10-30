import {
    Center,
    Container,
    AccountIconText,
    ContainerAccountIcon,
    TopDashboardAndCashFlow
} from "../../global-components";
import Ionicons from '@expo/vector-icons/Ionicons';

import {View, ScrollView} from "react-native";

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
    const [consolidation, setConsolidation] = useState(undefined);
    useEffect(() => {
        axios.get("https://c63c-177-69-47-81.sa.ngrok.io/transactions").then((res => {
            setConsolidation(res.data.results);
            console.log(res.data.results)
        }))
    }, consolidation)

    return (
        <Container>
            <Center
                style={{
                    backgroundColor: '#121217'
                }}
            >
                <TopDashboardAndCashFlow>
                    <ContainerTopTitle>
                        Fluxo de caixa
                    </ContainerTopTitle>
                    <ContainerAccountIcon>
                        <Ionicons name="ios-person-circle-outline" size={32} color="green"/>
                        <AccountIconText>
                            Dados Pessoais
                        </AccountIconText>
                    </ContainerAccountIcon>
                </TopDashboardAndCashFlow>
                <PeriodFilter/>
            </Center>
            <ContainerBalanceText>
                <View>
                    <FinalBalance>
                        Saldo final
                    </FinalBalance>
                    <InitialBalance>
                        Saldo inicial
                    </InitialBalance>
                </View>
            </ContainerBalanceText>
            <View style={{flex: 4, alignItems: "center"}}>
                <ScrollView>
                    {
                        consolidation === undefined ? <></> :
                            consolidation.map(e => <Card item={e} />)
                    }
                </ScrollView>
            </View>
        </Container>
    );
}

export default FlushCash;