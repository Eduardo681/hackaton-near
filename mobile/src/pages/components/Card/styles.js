import styled from 'styled-components'

const CardContainer = styled.View`
    width: 370px;
    height: 75px;
   
    background: rgba(40, 43, 53, 0.5);
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
`;

const CardDate = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 10px;
    line-height: 27px;
   

    color: rgba(255, 255, 255, 0.3);
`;

const CardDesc = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    
    color: #FFFFFF;
`;

const CardPositive = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-top: -30px;
    text-align: right;
    
    color: #00CFC3;
`;

const CardNegative = styled.Text`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    margin-top: -30px;
    text-align: right;
    
    color: #F54968;
`;

export {CardContainer,CardDesc, CardDate, CardPositive, CardNegative}