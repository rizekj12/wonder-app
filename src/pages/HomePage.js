import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions, AsyncStorage } from 'react-native';
import { Button, ListItem } from 'react-native-elements';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';


import moment from 'moment';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window')

export default class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            name:this.props.navigation.state.params.name,
            date:moment().format('YYYY-MM-DD'),
            itemsArr:this.props.navigation.state.params.itemsArr
        }
    }

    static navigationOptions = {
        title: 'My Schedule',
        headerStyle: {
          backgroundColor: '#30EA8A',
        },
        headerRight: ()=>{(
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
        )},
        headerLeft:()=>{null},
    }

    render() {
        let currDate= this.state.date;
        let itemsArr=this.state.itemsArr;
        var pair = {
            [currDate]: [itemsArr]
        };
        let itemsObj={[currDate]:[]};
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
                </View>

                <View style = {styles.dateContainer}>
                    <Agenda 
                        selected={currDate}
                        onDayPress={(day)=>{
                            console.log(day);
                            // let selected=day.dateString;
                            // pair={
                            //     [selected]:itemsArr
                            // }
                        }}                        
                        items={
                            {...itemsObj, ...pair}
                        }
                        renderDay={(day, item)=>{
                            // console.log(moment().hour(23))
                            return (
                                <View>
                                    <FlatList
                                        data={item}
                                        renderItem={({item})=> 
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: 'white',
                                                width: width,
                                                borderColor: 'black',
                                                height:75
                                            }}
                                        >{item}</TouchableOpacity>}
                                    />
                                </View>
                            );
                        }}

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