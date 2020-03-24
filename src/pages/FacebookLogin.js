import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window')

export default class FacebookLogin extends Component {
    render() {
        return (
            <View style = {styles.container}>

                <View style = {styles.headerContainer}>
                    <Text style = {styles.headerText}>Hey There!</Text>
                </View>

                <View style = {styles.facebookContainer}>
                    <Text style = {styles.fbText}>We know only certain baristas can make your perfect cup of coffee, so sign up, follow your favorites, and know when to go!
                    </Text>
                    <Button 
                        title = "Facebook"
                        titleStyle = {{
                            color: 'white',
                            fontWeight: 'bold'
                        }}
                        type = "outline"
                        buttonStyle = {{
                            backgroundColor: 'transparent',
                            borderColor: 'white',
                            width: (width / 2),
                            marginLeft: 90,
                            marginTop: 50,
                            borderRadius: 25,
                            borderWidth: 2,
                        }}
                    />
                </View>

                <View style = {styles.buttonContainer}>
                    <Button
                        title = "MAYBE LATER"
                        titleStyle = {{
                            color: 'black'
                        }}
                        buttonStyle = {{
                            backgroundColor: 'transparent'
                        }}
                        onPress={() =>{this.props.navigation.navigate('Registration')}}
                    />
                </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#30EA8A',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    fbText: {
        textAlign: 'center',
        marginHorizontal: 30,
        fontSize: 18,
    }

})