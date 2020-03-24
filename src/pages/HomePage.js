import React, { Component } from 'react';
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';

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
      componentWillMount(){
        let name = this.props.navigation.getParam('profilename')
        console.log('this is in component will mount on Homepage', name)
        this.setState({
          name: name,
        })
      }


    render() {
        return(
            <View style = {styles.container}>
            
            <ImageBackground 
                source = {require('../assets/homeCoffee.jpg')} 
                style = {{width: width, height: 200,}}
            >
                <Text style = {styles.imageText}>{this.state.name}</Text>
            </ImageBackground>

                <View style = {styles.dateSelector}>
                    <Text>This is for the date selector for calendar</Text>
                </View>

                <View style = {styles.dateContainer}> 
                    <Text style = {styles.dateHeader}>You're all set!</Text>
                    <Text style = {styles.dateFooter}>Let's create some schedule</Text>
                    <Button 
                        title = 'Add New'
                        buttonStyle = {{
                            width: 200,
                            alignSelf: 'center',
                            backgroundColor: '#1AEC86',
                            borderRadius: 25,
                            marginVertical: 12
                        }}
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