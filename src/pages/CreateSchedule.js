import React, { useState } from 'react'
import { View, Button, ScrollView, Text, DatePickerAndroid, Platform, TouchableOpacity} from 'react-native';
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";


const createSchedule = () => {

  const [date, setDate] = useState('')

  const [startTime, setStartTime] = useState('')

  const [endTime, setEndTime] = useState('')

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const [isStartTimePickerVisible, setStartTimePickerVisibility] = useState(false);

  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideStartTimePicker = () => {
    setStartTimePickerVisibility(false);
  };

  const hideEndTimePicker = () => {
    setEndTimePickerVisibility(false);
  };

  const showStartTimePicker = () => {
    setStartTimePickerVisibility(true);
  };

  const showEndTimePicker = () => {
    setEndTimePickerVisibility(true);
  };

  const handleConfirm = (time) => {
    // console.warn("A date has been picked: ", time);
    hideDatePicker();
  };

  const handleStartTimeConfirm = (datetime) => {
    // console.warn("A time has been picked: ", datetime);
    hideTimePicker();
  };
  
  const handleEndTimeConfirm = (datetime) => {
    // console.warn("A time has been picked: ", datetime);
    hideEndTimePicker();
  };
        return (
           <View>

         <Button title="Date" onPress={showDatePicker} />
         <DateTimePickerModal
         isVisible={isDatePickerVisible}
         mode='date'
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}
         />
  
  <Button title="Start Time" onPress={showStartTimePicker} />
         <DateTimePickerModal
         isVisible={isStartTimePickerVisible}
         mode='time'
         onConfirm={handleStartTimeConfirm}
         onCancel={hideStartTimePicker}
         />

<Button title="End Time" onPress={showEndTimePicker} />
         <DateTimePickerModal
         isVisible={isEndTimePickerVisible}
         mode='time'
         onConfirm={handleEndTimeConfirm}
         onCancel={hideEndTimePicker}
         />

         <Button title="Submit"/>

           </View>
        )
  
  


}



export default createSchedule

