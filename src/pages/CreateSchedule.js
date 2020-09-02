import React, { useState } from 'react'
import { View, Button, ScrollView, Text, DatePickerAndroid, Platform, TouchableOpacity} from 'react-native';
import moment from 'moment'
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

         <Button title="Date" onPress={showDatePicker} />
         <DateTimePickerModal
         isVisible={isDatePickerVisible}
         mode='date'
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}
         />

<Button title="Start Time" onPress={showDatePicker} />
         <DateTimePickerModal
         isVisible={isDatePickerVisible}
         mode='time'
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}
         />

<Button title="End Time" onPress={showDatePicker} />
         <DateTimePickerModal
         isVisible={isDatePickerVisible}
         mode='time'
         onConfirm={handleConfirm}
         onCancel={hideDatePicker}
         />
  
           </View>
        )
  
  


}



export default createSchedule

