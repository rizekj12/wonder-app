import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


import moment from 'moment';
const { width, height } = Dimensions.get('window')

export default class HomePage extends Component {
    static navigationOptions = {
        title: 'My Schedule',
        headerStyle: {
          backgroundColor: '#30EA8A',
        },
        headerRight: (
            <Button
            onPress={() => alert('This is a button!')}
            title = {null}
            color="#fff"
            icon = {{
                type: 'font-awesome',
                name: 'plus',
            }}
            buttonStyle = {{
                backgroundColor: 'transparent',
                marginRight: 14.5,
            }}
          />
        ),
        headerLeft: null,
      }

      state = {
          name: '',
          date: '',
          itemsArr: []
      }

      getData = async () => {
          try {
              await AsyncStorage.getItem('name')
              if (name !== null) {
                console.log(name);
              }
          } catch (error){
              console.log(error.message)
          }
      }
      UNSAFE_componentWillMount(){
        let name = this.props.navigation.getParam('profilename')
        // console.log('this is in component will mount on Homepage', name)
        this.setState({
          name: name
        })
      }

      handleUpdate=(e)=>{
        // console.log('this is inside handle: ', e);

        this.setState({
            date: e.dateString
        })
      }
      componentDidUpdate(day){
        // console.log(day)
        const daySelected=day.dateString;
      }

    //   testing new function that will render every hour slot in the day to render
    // inside the ITEMS <Agenda /> component here I will also add the item state
      dailyPlanner=()=>{
// Moment.js built-in hour format can help build array in order to render a styled 
// text area to fill
        let dayStart=moment().local().startOf('day').format('hhmm A');
        let dayEnd=moment().local().endOf('day').format('hhmm A');

        // while (dayStart < dayEnd){
            console.log(dayStart);
            // moment(dayStart).add(1, 'h');
        // }
        // dayStart=moment(dayStart).add(1, 'h');
        // console.log(dayStart);
      };

    render() {
        // console.log(this.state.date.toString())
        let currDate= this.state.date;
        // console.log(currDate);
        let initialDay= moment().format('YYYY-MM-DD');
        // console.log(initialDay)
        let itemsArr=this.state.itemsArr;
        var pair = {
            [currDate]: [itemsArr]
        };
        let itemsObj={[initialDay]:[]};
        // console.log(itemsObj);

        // console.log('this is pair: ',pair)
        return(
            <View style = {styles.container}>
            
                <ImageBackground 
                    source = {require('../assets/homeCoffee.jpg')} 
                    style = {{width: width, height: 200,}}
                >
                    <Text style = {styles.imageText}>{this.state.name}</Text>
                </ImageBackground>


                <View style = {styles.dateSelector}> 
                    <Text style = {styles.dateHeader}>You're all set!</Text>
                    {/* <Text style = {styles.dateFooter}>Let's create some schedule</Text>
                    <Button 
                        title = 'Add New'
                        buttonStyle = {{
                            width: 200,
                            alignSelf: 'center',
                            backgroundColor: '#1AEC86',
                            borderRadius: 25,
                            marginVertical: 12
                        }}
                    /> */}
                </View>

                <View style = {styles.dateContainer}>
                    <Agenda 
                        selected={initialDay}    
                        onDayPress={(day)=>{
                            // this.handleUpdate(day);
                            this.dailyPlanner();
                        }}

                        items={
                            {...itemsObj, ...pair}
                        }

                        theme={{
                            agendaDayTextColor: 'black',
                            agendaDayNumColor: 'green',
                            agendaTodayColor: 'red',
                            agendaKnobColor: 'blue'
                        }}

                        style={{}}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    dateSelector:{
        width: '100%',
        height: '5%',
        backgroundColor: 'orange',
    },
    dateContainer:{
        flex: 3,
        backgroundColor: 'gray',
        justifyContent: 'center',
        width: '100%',
    },
    dateHeader: {
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 4
    },
    dateFooter: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 6
    },
})