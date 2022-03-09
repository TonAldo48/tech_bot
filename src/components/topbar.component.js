import React from 'react';
import { View, Text } from 'react-native-ui-lib';

export const TopBar = () => {
    return (
        <View center spread row centerV style={{ height: 50, backgroundColor: 'rgb(20,20,20)' }}>
            <Text white text40>TECHBOT</Text>
        </View>
    )
}