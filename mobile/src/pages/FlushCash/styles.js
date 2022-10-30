import styled from 'styled-components'

const ContainerTopTitle = styled.Text`
    font-family: "Poppins_400Regular";
    margin-top: 5px;
    font-size: 19.9695px;
    color: #FFF;
`;

const ContainerBalanceText = styled.View`
    flex: 1;
`

const FinalBalance = styled.Text`
    font-family: "Poppins_400Regular";
    margin-top: 3%;
    margin-left: 5%;
    color: #FFF;
    flex-direction: column;
`

const InitialBalance = styled.Text`
    font-family: "Poppins_400Regular";
    color: #FFF;
    margin-left: 50%;
`

export {
    ContainerBalanceText,
    FinalBalance,
    ContainerTopTitle,
    InitialBalance
}
