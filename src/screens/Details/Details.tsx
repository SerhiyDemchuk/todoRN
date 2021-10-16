import { toString } from 'lodash';
import React from 'react';
import { Text, View } from 'react-native';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './assets/styles';

export const Details: React.FunctionComponent = () => {
    const { todoItem: { userId, id, title, completed} } = useTypedSelector(store => store.details);
    
	return (
		<View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemHeader}>User id: </Text>
                <Text style={styles.itemValue}>{userId}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemHeader}>Id: </Text>
                <Text style={styles.itemValue}>{id}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemHeader}>Title: </Text>
                <Text style={styles.itemValue}>{title}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemHeader}>Status: </Text>
                <Text style={styles.itemValue}>{toString(completed)}</Text>
            </View>
		</View>
	);
};
