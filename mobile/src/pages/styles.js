import styled from 'styled-components'

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
    padding: 13.313px 22.1883px;
    gap: 11.09px;
    width: 168.63px;
    height: 53.25px;
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
    box-sizing: border-box;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8.87534px 160.866px;
    gap: 11.09px;
    
    width: 168.63px;
    height: 53.25px;
    
    border: 2.21883px solid #00CFC3;
    border-radius: 13.313px;
`;

const TextBtnSecondary = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 19.9695px;
    line-height: 27px;
    color: ${props => props.theme.background};
`;

export {Subtitle, LogoContainer, BtnPrimary, TextBtnPrimary, BtnSecondary, TextBtnSecondary};