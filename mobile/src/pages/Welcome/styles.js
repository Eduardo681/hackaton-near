import styled from 'styled-components'

const Next = styled.TouchableOpacity`
    
`;

const NextContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: flex-end;
`;

const Subtitle = styled.Text`
    color: ${props => props.theme.primary};
`;


const LogoContainer = styled.View`
    flex: 3;
    justify-content: center;
`;

const NextImage = styled.Image`
     width: 48px;
    height: 48px;
`;

export {Next, NextContainer, Subtitle, LogoContainer, NextImage};