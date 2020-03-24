import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

export default class Splash extends Component {
    render() {
        setTimeout(() => {
            this.props.navigation.navigate('FacebookLogin')
          }, 3000)
        return (
            <View style = {styles.container}>

                <View style = {styles.textContainer}>
                    <Text style = {styles.welcome}>Welcome Barista!</Text>
                </View>
                
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30EA8A',
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height
    },
    welcome: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})