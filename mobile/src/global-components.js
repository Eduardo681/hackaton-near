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
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export {Container, Title, Center};