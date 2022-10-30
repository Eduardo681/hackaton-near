import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacity } from "react-native";
import moment from "moment";

import {
    PeriodOfFilter,
    TextInput,
    InputPeriod,
    InputPeriodContainer,
    LabelPeriod,
    IconPeriod,
    InputValue,
} from './styles';

import formatDate from "../../../utils/formatDate";

import {
    useFonts, 
    Poppins_400Regular, 
    Poppins_700Bold
} from "@expo-google-fonts/poppins";

const PeriodFilter = () => {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
    });

    if (!fontsLoaded) null;

    const [startDate, setStartDate] = useState(moment().startOf('month').format('DD/MM/YYYY'));
    const [endDate, setEndDate] = useState(moment().endOf('month').format('DD/MM/YYYY'));

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [datePickerValue, setDatePickerValue] = useState('');

    const showDatePicker = (nameDatePicker) => {
        setDatePickerValue(nameDatePicker);
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => setDatePickerVisibility(false);

    const handleConfirm = (date) => {
        if (datePickerValue === 'startDate') {
            setDatePickerVisibility(false);
            setDatePickerValue('');
            setStartDate(formatDate(date));
        }
        if (datePickerValue === 'endDate') {
            setDatePickerVisibility(false);
            setDatePickerValue('');
            setEndDate(formatDate(date));
        }
        
    };
    
    return (
        <PeriodOfFilter>
            <LabelPeriod>Período</LabelPeriod>
            <InputPeriodContainer>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <TouchableOpacity
                    onPress={() => showDatePicker('startDate')}
                >
                    <InputPeriod
                        placeholderTextColor={"#494D58"}
                    >
                        <InputValue>{startDate}</InputValue>
                    </InputPeriod>
                </TouchableOpacity>
                <TextInput>a</TextInput>
                <TouchableOpacity
                    onPress={() => showDatePicker('endDate')}
                >
                    <InputPeriod>
                        <InputValue>{endDate}</InputValue>
                    </InputPeriod>
                </TouchableOpacity>
                <IconPeriod>
                    <Ionicons
                        name="search-outline"
                        size={22}
                        color="white"
                    />
                </IconPeriod>
            </InputPeriodContainer>
        </PeriodOfFilter>
    )
}

export default PeriodFilter