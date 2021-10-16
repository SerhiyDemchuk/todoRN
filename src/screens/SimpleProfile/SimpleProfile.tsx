import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { loadProfileDataAction } from '../../store/sagas/profileSaga';
import Splash from '../Splash/Splash';
import styles from './assets/styles';

export const SimpleProfile: React.FunctionComponent = () => {
    const { isLoaded, profileData: { email, name, surname } } = useTypedSelector(store => store.profile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProfileDataAction());
    }, [])

    if (!isLoaded) {
        return (
            <Splash />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemHeader}>User email: </Text>
                <Text style={styles.itemValue}>{email}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemHeader}>User name: </Text>
                <Text style={styles.itemValue}>{name}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemHeader}>User surname: </Text>
                <Text style={styles.itemValue}>{surname}</Text>
            </View>
        </View>
    );
};
