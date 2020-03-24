import React, { Component } from 'react';
// import axios from 'axios';
import { StyleSheet, Text, View, KeyboardAvoidingView, StatusBar } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { AsyncStorage } from 'react-native';

export default class Registration extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        newId: '',
        profilename: '',
      }

    //   handleSubmit() {
    //       console.log('inside handleSubmit')
    //     axios.post('http://localhost:3001/register/register/create', {
    //         F_NAME: this.state.first_name,
    //         L_NAME: this.state.last_name,
    //         PASS_W: this.state.password,
    //         EMAIL: this.state.email
    //     }).then(res => {
    //       console.log('this is res.data.user: ', res)
    //       this.setState({
    //         newId: res.data.user.id,
    //         fireRedirect: true
    //       })
    //     })
        //   this.setState ({
        //     first_name: this.state.first_name,
        //     last_name: this.state.last_name,
        //     email: this.state.email,
        //     password: this.state.password,
        //   })
        //   console.log(this.state.first_name)
        //   console.log(this.state.last_name)
        //   console.log(this.state.email)
        //   console.log(this.state.password)
    // }
        


    //   setData = async () => {
    //     let results = await axios.put(`/register/register/create`, {
    //         first_name: this.state.first_name,
    //         last_name: this.state.last_name,
    //         email: this.state.email,
    //         password: this.state.password
    //     }).then(res => {
    //         console.log('this is res.data.user: ', res)
    //         // this.setState({
    //         //   newId: res.data.user.id,
    //         //   fireRedirect: true
    //         // })
    //       })
    //     let id = this.state.id
    //     this.props.navigation.navigate('HomePage', { profilename: profileName })
    //   }

    render() {
        return (
            <KeyboardAvoidingView  behavior = 'padding' style ={styles.container}>
                <StatusBar barStyle = 'light-content' />

                <View style = {styles.headerContainer}>
                    <Text style = {styles.headerText}> Welcome Barista! </Text>
                </View>

                <View style = {styles.formContainer}>
                    <Input
                        containerStyle = {{
                            width: 300,
                        }}
                        value = {this.state.first_name}
                        style = {styles.input}
                        placeholder = 'First Name'
                        placeholderTextColor = 'black'
                        returnKeyType = 'next'
                        onSubmitEditing = {() => this.last_name.focus()}
                        onChangeText= {(first_name) => this.setState({first_name})}
                        autoCapitalize = 'words'
                        autoCorrect = {false}
                    />
                    <Input
                        containerStyle = {{
                            width: 300,
                        }}
                        value = {this.state.last_name}
                        style = {styles.input}
                        placeholder = 'Last Name'
                        placeholderTextColor = 'black'
                        returnKeyType = 'next'
                        onSubmitEditing = {() => this.email.focus()}
                        onChangeText= {(last_name) => this.setState({last_name})}
                        autoCapitalize = 'words'
                        autoCorrect = {false}
                    />
                    <Input
                        containerStyle = {{
                            width: 300,
                        }}
                        value = {this.state.email}
                        style = {styles.input}
                        placeholder = 'Email'
                        placeholderTextColor = 'black'
                        returnKeyType = 'next'
                        ref = {(input) => this.email = input}
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        onChangeText={(email) => this.setState({email})}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                    />
                    <Input
                        containerStyle = {{
                            width: 300,
                        }}
                        value = {this.state.password}
                        style = {styles.input}
                        placeholder = 'Password'
                        placeholderTextColor = 'black'
                        secureTextEntry
                        returnKeyType = 'go'
                        ref = {(input) => this.passwordInput = input}
                        onChangeText={(password) => this.setState({password})}
                    />
                    <Text style = {styles.passwordText}>Password must be at least 8 characters long and contain a number.</Text>
                    <Button
                        title = 'Sign Up!'
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
                        onPress = {() => {this.handleSubmit()}}
                    />
                    
                    {/*This is the sign up button*/}
                    <Button
                        title = 'Sign In!'
                        titleStyle = {{
                            color: 'black',
                            fontWeight: 'bold'
                        }}
                        buttonStyle = {{
                            backgroundColor: 'white',
                            borderRadius: 25,
                            borderWidth: 2,
                            borderColor: 'white',
                            marginTop: 10
                        }}
                        // testing how to change screens
                        onPress={() => this.props.navigation.navigate('Signin')}
                    />
                </View>

                <View style = {styles.buttons}>
                    <Button
                        onPress={() => this.props.navigation.navigate('FacebookLogin')}
                        title = 'Back'
                        titleStyle = {{
                            color: 'black',
                            fontWeight: 'bold',
                        }}
                        buttonStyle = {{
                            backgroundColor: 'transparent',
                            borderColor: 'black',
                            width: 100,
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