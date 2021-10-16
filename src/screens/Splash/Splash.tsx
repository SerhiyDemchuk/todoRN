import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import styles from './assets/styles';

const Splash = () => {
    return (
        <View style={styles.splash}>
            <ActivityIndicator color="#0000ff" size="large" />
            <Text>
                Loading...
            </Text>
        </View>
    )
}

export default Splash;
