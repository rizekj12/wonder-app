import React, { Component } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, StatusBar, Dimensions } from 'react-native';
import { Button, Input } from 'react-native-elements';
import axios from 'axios'
import moment from 'moment';

const { width, height } = Dimensions.get('window')

export default class Signin extends Component {
  render() {
    // In order to initialize an empty scheduler in the Agenda component
    // I've had to run the function in the previous screen IS THIS THE BEST METHOD??
    // and if so should it be in a better lifecycle method...
      let emptyAgendaCreation=(
        Template=()=>{
          let hourlyArr=[]
    
            for(let i=0;i<=23;i++){
                hourlyArr.push(
                    <Text
                      key={i}
                      style={{
                        fontSize:21,
                        
                      }}>{moment(`${i}`,'HH').format('hh:00 A')}
                    </Text>
                );
            };
          return hourlyArr;
          }
      )();


      return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar barStyle = 'light-content' />
          <View style = {styles.formContainer}>
            <Input 
              containerStyle={{
              width: 300,
              }}
              style={styles.input}
              placeholder='email'
              placeholderTextColor='black'
            />
            <Input 
              containerStyle = {{
                width: 300,
              }}
              style={styles.input}
              placeholder={'password'}
              placeholderTextColor='black'
            />
            <Button 
              title='Log In'
              titleStyle = {{
                color: 'white',
                fontWeight: 'bold',
              }}
              buttonStyle = {{
                  backgroundColor: 'transparent',
                  borderRadius: 25,
                  borderWidth: 2,
                  borderColor: 'white',
              }}
              onPress = {() => {this.props.navigation.navigate('HomePage',{
                name:'',
                itemsArr: emptyAgendaCreation
              })}}
            />
          </View>
          <View style={styles.buttons}>
            <Button 
              onPress={() => this.props.navigation.navigate('Registration')}
              title = 'Back'
              titleStyle = {{
                color: 'black',
                fontWeight: 'bold'
              }}
              buttonStyle = {{
                backgroundColor: 'transparent',
                borderColor: 'black',
                width: 100
              }}
              icon = {{
                type: 'font-awesome',
                name: 'arrow-left',
                size: 15,
            }}
            />
          </View>
        </KeyboardAvoidingView>
      )
    }
  }
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#30EA8A',
      alignItems: 'center',
      justifyContent: 'space-around'
  },
  headerText: {
      fontSize: 30,
      fontWeight: 'bold'
  },
  formContainer:{
      justifyContent: 'space-around',
      marginHorizontal: 50,
      height: 300,
  },
  input: {
      backgroundColor: 'transparent',
      borderColor: 'black',
      width: 100,
  },
  passwordText:{
      color: '#494C4A',
      marginHorizontal: 15
  }
})