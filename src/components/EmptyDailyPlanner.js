import React,{Component} from 'react';
import {TextInput,Dimensions} from 'react-native';
import {TouchableOpacity,ScrollView} from 'react-native-gesture-handler';
import moment from 'moment';


import itemsArr from '../components/Empty24HrCreation';
import api from '../services/ApiConfig';

const {width}=Dimensions.get('window')
export default class EmptyDailyPlanner extends Component{
    constructor(props){
        super(props);
        // console.log(props);

        this.state={
            text:'',
            date: this.props.date || moment().format('YYYY-MM-DD'),
            timeStamp: 0
        }
    }

    handleChange(t, h){
        this.setState({
            text:t,
            timeStamp: h 
        });
        // console.log('this is state currently:    ', this.state)
        this.handleEdit(h);
    };

    handleEdit(h){
        const data={
            event: this.state.text,
            date: this.state.date,
            timeStamp: h
        }
        // console.log(data, " ::::", h);
        // api.post("/createEvents", data); //create route for injecting this data
            // .then(response =>)
    }

    render(){
        // console.log(this.props.date.dateString);
        return(
            <ScrollView>
                {itemsArr.map((item, hourIndex)=>                                            
                    <TouchableOpacity
                        key={hourIndex}
                        style={{
                            backgroundColor: 'white',
                            width: width,
                            borderColor: 'black',
                            height:75
                        }}>
                        {item}
                        <TextInput 
                            autoCorrect={false}
                            placeholder={"...What's happenin"}
                            onChangeText={text=>this.handleChange(text, hourIndex)}
                        />
                    </TouchableOpacity>
                )}
            </ScrollView>
        )
    }
}