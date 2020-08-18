import React, { useState } from 'react'
import { View, Button, ScrollView, Text, DatePickerAndroid, Platform, TouchableOpacity} from 'react-native';
import moment from 'moment'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const createSchedule = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const handleConfirm = (datetime) => {
    console.warn("A date has been picked: ", datetime);
    hideDatePicker();
  };
  
        return (
           <View>

         <Button title="Show Date Picker" onPress={showDatePicker} />
         <DateTimePickerModal
         isVisible={isDatePickerVisible}
         mode='datetime'
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}
         />
  
           </View>
        )
  
  


}



export default createSchedule

