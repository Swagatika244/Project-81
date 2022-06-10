import React from 'react';
import {View, Text} from 'react-native';

export default class Profile extends React.Component{
    render(){
        return (
            <View style = {{
                justifyContent: 'center',
                flex: 1,
                alignContent: 'center'
            }}>
                <Text>Profile</Text>
            </View>
        );
    }
}