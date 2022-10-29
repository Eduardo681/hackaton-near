import {
    Center,
    Container,
    AccountIconText,
    ContainerAccountIcon,
    TopDashboardAndCashFlow
} from "../../global-components";

import PeriodFilter from '../components/PeriodFilter';

import {ContainerTopTitle} from './styles';

import Ionicons from '@expo/vector-icons/Ionicons';

const Dashboard = ({ navigation }) => {
    return (
        <Container>
            <Center>

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
        </Container>
    );
}

export default Dashboard;