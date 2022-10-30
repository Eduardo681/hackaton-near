import styled from 'styled-components'

const ContainerTopTitle = styled.Text`
    margin-top: 5px
    font-size: 19.9695px;
    color: #FFF;
`;

const ContainerBalanceText = styled.View`
    flex: 1
`

const FinalBalance = styled.Text`
    margin-top: 3%
    margin-left: 5%;
    color: #FFF;
    flex-direction: column;
`

const InitialBalance = styled.Text`
    color: #FFF;
    margin-left: 50%
`

export {
    ContainerBalanceText,
    FinalBalance,
    ContainerTopTitle,
    InitialBalance
}
