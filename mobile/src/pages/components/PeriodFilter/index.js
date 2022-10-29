import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from '@expo/vector-icons/Ionicons';

import {
    PeriodOfFilter,
    TextInput,
    InputPeriod,
    InputPeriodContainer,
    LabelPeriod,
    IconPeriod
} from './styles';
import { TouchableOpacity } from "react-native";




const PeriodFilter = () => {

    const {startDate, setStartDate} = useState(new Date());
    const {endDate, setEndDate} = useState('');

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dataPickerValue, setdataPickerValue] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => setDatePickerVisibility(false);

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    
    return (
        <PeriodOfFilter>
            <LabelPeriod>Período</LabelPeriod>
            <InputPeriodContainer>
                <TouchableOpacity
                    onPress={() => showDatePicker('startDate')}
                >
                    <InputPeriod
                        onChangeText={t => setEndDate(t)}
                        value={startDate}
                        placeholderTextColor={"#494D58"}
                    />
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
                <TextInput>a</TextInput>
                <InputPeriod
                    onChangeText={t => setEndDate(t)}
                    value={endDate}
                    placeholderTextColor={"#494D58"}
                />
                <IconPeriod>
                    <Ionicons
                        name="search-outline"
                        size={32}
                        color="white"
                    />
                </IconPeriod>
            </InputPeriodContainer>
        </PeriodOfFilter>
    )
}

export default PeriodFilter