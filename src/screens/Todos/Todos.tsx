import styles from './assets/styles';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ItemView } from './components/ItemView';
import { FlatList, View } from 'react-native';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Splash from '../Splash/Splash';
import { fetchTodosRequest } from '../../store/sagas/todosSaga';

interface TodosProps {
    navigation: any
}

export const Todos: React.FunctionComponent<TodosProps> = ({ navigation }) => {

    const { todos, pending } = useTypedSelector(store => store.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodosRequest());
    }, []);

    if (pending) {
        return (
            <Splash />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                maxToRenderPerBatch={5}
                data={todos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <ItemView navigation={navigation} item={item} title={item.title} />
                )}
            />
        </View>
    );
};
