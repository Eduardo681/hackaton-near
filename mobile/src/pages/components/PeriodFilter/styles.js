import styled from 'styled-components';

const PeriodOfFilter = styled.View`
    flex: 1;
`;

const TextInput = styled.Text`
    color: #FFF;
    margin: 5% 3%;
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
    height: 60px;
    color: white;
    background: #21242D;
    border-radius: 13.3249px;
`;

const InputValue = styled.Text`
    color: #fff
`;

const LabelPeriod = styled.Text`
    font-family: 'Poppins';
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