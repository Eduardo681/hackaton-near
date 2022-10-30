import {
    Center,
    Container,
    AccountIconText,
    ContainerAccountIcon,
    TopDashboardAndCashFlow
} from "../../global-components";
import Ionicons from '@expo/vector-icons/Ionicons';

import { View } from "react-native";

import PeriodFilter from '../components/PeriodFilter';

import {
    ContainerTopTitle,
    FinalBalance,
    InitialBalance,
    ContainerBalanceText
} from './styles';


const FlushCash = ({ navigation }) => {
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
                        <Ionicons name="ios-person-circle-outline" size={32} color="green" />
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
        </Container>
    );
}

export default FlushCash;