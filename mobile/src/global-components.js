import styled from 'styled-components'

const Container = styled.SafeAreaView`
    background-color: ${props => props.theme.background};
    flex: 1;
`;

const Title = styled.Text`
    font-family: 'Poppins, roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 58px;
    color: white;
`;

const Center = styled.View`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

const Subtitle = styled.Text`
    color: ${props => props.theme.primary};
`;


const LogoContainer = styled.View`
    flex: 3;
    justify-content: center;
`;

const BtnPrimary = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    text-align: center;
    padding: 13.313px 22.1883px;
    gap: 11.09px;
    width: 100%;
    height: 60px;
    background: ${props => props.theme.primary};;
    border-radius: 13.313px;
`;

const TextBtnPrimary = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 19.9695px;
    line-height: 27px;
    color: ${props => props.theme.background};
`;

const BtnSecondary = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13.313px 22.1883px;
    gap: 11.09px;
    width: 100%;
    height: 60px;
    background: transparent;
    border: 2.21883px solid #00CFC3;
    border-radius: 13.313px;
`;

const TextBtnSecondary = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 19.9695px;
    line-height: 27px;
    color: ${props => props.theme.primary};
`;

const ContainerBtns = styled.View`
    flex: 1;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
`;

const Input = styled.TextInput`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 22px 14px 17px;
    gap: 11.1px;
    width: 350px;
    height: 60px;
    color: white;
    
    background: #21242D;
    border-radius: 13.3249px;
`;

const Label = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 15.5457px;
    line-height: 22px;
    color: #A7AEBF;
`;

const ContainerBtnM = styled.View`
    width: 180px;
    margin-right: 20px;
`;

const TopDashboardAndCashFlow = styled.View`
    flex: 5;
    align-items: center;
    margin-top: 10%
`

const ContainerAccountIcon = styled.View`
    align-items: center;
    margin-left: 260px;
    margin-bottom: 10%;
`;

const AccountIconText = styled.Text`
    margin-top: 3px;
    color: #fff;
`;

export {
    Subtitle, LogoContainer, BtnPrimary, TextBtnPrimary, BtnSecondary,
    TextBtnSecondary, ContainerBtns, Input, Container, Title, Center, Label, ContainerBtnM,
    ContainerAccountIcon, AccountIconText, TopDashboardAndCashFlow
};