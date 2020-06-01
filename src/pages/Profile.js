import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, View, Text } from 'react-native';
import { Button, Input, Avatar, Overlay } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';


const { width, height }=Dimensions.get('window');


export default class Profile extends React.Component {
    constructor(props){
        super(props);

        this.state={
            f_name:'',
            l_name:'',
            serviceLocations:{},
            avatarPic: ''
        }
    }
    
    static navigationOptions={
        title: 'Create Profile',
        headerStyle: {
            backgroundColor: '#30EA8A',
        },
        headerRight: ()=>{(
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Save"
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
            
            this.setState({
                avatarPic: response.uri
            })
            console.log('Response = ', response.uri);
        });
        
    }

    _onChange=(text)=>{
        console.log(text)
    }

    _submitProfile=()=>{

    }

    render(){
        // const [visible, setVisible] = useState(false);
        
        // const toggleOverlay = () => {
        //     setVisible(!visible);
        // };
        return(
            <View style={styles.container}>

                <Avatar
                    size='xlarge'
                    rounded
                    icon={{name: 'user', type: 'font-awesome'}}
                    source={{ uri: this.state.avatarPic}}
                    onPress={()=>{this._handleReq()}}
                    showAccessory
                />

                <View style={styles.formContainer}>

                    <Input
                        containerStyle = {{
                            width: 300,
                        }}
                        placeholder = 'First Name'
                        placeholderTextColor = 'black'
                        onChangeText={(f_name)=>this.setState({f_name: f_name})}
                        />
                    <Input
                        containerStyle = {{
                            width: 300,
                        }}
                        placeholder='Last Name'
                        placeholderTextColor = 'black'
                        onChangeText={(l_name)=>this.setState({l_name :l_name})}
                        />
                    <Input 
                        containerStyle={{
                            width: 300,
                        }}
                        placeholder='Work Place'
                        placeholderTextColor='black'
                        // onChangeText={(text)=>this._onChange(text)}
                        rightIcon={{
                            type:'font-awesome', 
                            name: 'plus',
                            onPress: () => { alert('my right press') }
                        }}
                    />
                    {/* <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                        <Text>Hello from Overlay!</Text>
                    </Overlay> */}
                    <Button
                        title='Save'
                        // onPress={()=>{this.}}
                    />
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
})
