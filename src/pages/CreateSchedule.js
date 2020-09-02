import React, { useState } from 'react'
import { View, Button, ScrollView, Text, DatePickerAndroid, Platform, TouchableOpacity} from 'react-native';
import moment from 'moment'
import DateTimePickerModal from "react-native-modal-datetime-picker";


const createSchedule = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const handleConfirm = (time) => {
    console.warn("A time has been picked: ", time);
    hideTimePicker();
  };

  const handleTimeConfirm = (datetime) => {
    console.warn("A date has been picked: ", datetime);
    hideDatePicker();
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
  
  <Button title="Start Time" onPress={showTimePicker} />
         <DateTimePickerModal
         isVisible={isTimePickerVisible}
         mode='time'
         onConfirm={handleTimeConfirm}
         onCancel={hideTimePicker}
         />

<Button title="End Time" onPress={showTimePicker} />
         <DateTimePickerModal
         isVisible={isTimePickerVisible}
         mode='time'
         onConfirm={handleTimeConfirm}
         onCancel={hideTimePicker}
         />

         <Button/>

           </View>
        )
  
  


}



export default createSchedule

