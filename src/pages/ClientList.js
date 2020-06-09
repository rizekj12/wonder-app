import React, { Component } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';

export default class ClientList extends React.Component{
    constructor(props){
        super();

        this.state={
            list:[]
        }
    };

    componentDidMount(){
        
        this.setState({
            list:this.props.navigation.state.params.d
        });
    }

    
    render(){
        return(
            <View>
                {
                    this.state.list.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ 
                                source: { url: l.local.avatarPic},
                                style: { width: 40, height: 40 } 
                            }}
                            title={l.local.f_name}
                            subtitle={l.local.l_name}
                            bottomDivider
                        />
                    ))
                }
            </View>
        )
    }

}