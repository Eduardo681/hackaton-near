import styled from 'styled-components';
import { Title, Container } from '../../global-components';

const Next = styled.TouchableOpacity`
    
`;

const NextContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: flex-end;
    padding-right: 15px;
`;

const NextImage = styled.Image`
    width: 50px;
    height: 50px;
`;

const TitleWelcome = styled(Title)`
    margin: 0 50px;
`;

const ContainerStyled = styled(Container)`
    padding-top: 150px;
`;

export {
    Next, 
    NextContainer, 
    NextImage,
    TitleWelcome,
    ContainerStyled,
};