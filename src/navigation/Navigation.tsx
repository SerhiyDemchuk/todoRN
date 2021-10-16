import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleProfile } from '../screens/SimpleProfile/SimpleProfile';
import { Create } from '../screens/Create/Create';
import { Todos } from '../screens/Todos/Todos';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={SimpleProfile} />
            <Tab.Screen name="Create" component={Create} />
            <Tab.Screen name="Todos" component={Todos} />
        </Tab.Navigator>
    );
};
