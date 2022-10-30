import styled from 'styled-components';

const PeriodOfFilter = styled.View`
    flex: 2;
    margin-bottom: 20%;
`;

const TextInput = styled.Text`
    font-family: "Poppins_400Regular";
    color: #FFF;
    margin-top: 4%;
    margin-right: 3%;
    margin-left: 3%;
`;

const InputPeriodContainer = styled.View`
    display: flex;
    flex-direction: row;
`;

const InputPeriod = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 14px 22px 14px 17px;
    gap: 11.1px;
    width: 150px;
    height: 45px;
    color: white;
    background: #21242D;
    border-radius: 13.3249px;
    font-family: "Poppins_400Regular";
`;

const InputValue = styled.Text`
    font-family: "Poppins_400Regular";
    color: #fff
`;

const LabelPeriod = styled.Text`
    font-family: 'Poppins_400Regular';
    font-style: normal;
    font-weight: 500;
    font-size: 15.5457px;
    line-height: 22px;
    color: #A7AEBF;
    margin-left: 2%;
    margin-bottom: 2%;
`;

const IconPeriod = styled.TouchableOpacity`
    margin-top: 3%;
    margin-left: 2%
`;

export {
    PeriodOfFilter,
    TextInput,
    InputPeriod,
    InputPeriodContainer,
    LabelPeriod,
    IconPeriod,
    InputValue
}