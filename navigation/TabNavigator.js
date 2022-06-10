import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () =>{
    <Tab.Navigator>
        <Tab.Screen name = "Feed" component={Feed} options={{headerShown: false}}/>
        <Tab.Screen name = "CreatePost" component={CreatePost} options= {{headerShown: false}} />
    </Tab.Navigator>
}
export default BottomTabNavigator;