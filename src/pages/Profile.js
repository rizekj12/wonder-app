import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, View, Text } from 'react-native';
import { Button, Input } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';


const { width, height }=Dimensions.get('window');


export default class Profile extends React.Component{
    constructor(){
        super();

    }
    
    static navigationOptions={
        title: 'Create Profile',
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

    _handleReq=()=>{
        ImagePicker.showImagePicker({},(response) => {
            console.log('Response = ', response);
        });
        
    }
    render(){
        return(
            <View style={styles.formContainer}>
                <Input
                    containerStyle = {{
                        width: 300,
                    }}
                    placeholder = 'First Name'
                    placeholderTextColor = 'black'
                />
                <Input
                    containerStyle = {{
                        width: 300,
                    }}
                    placeholder='Last Name'
                    placeholderTextColor = 'black'
                />
                <Button
                    title='Upload Photo'
                    onPress={()=>{this._handleReq()}}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
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
})
