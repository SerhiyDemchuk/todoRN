import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { getItem } from '../../../store/actions/detailsAction'
import styles from '../../../components/elements/assets/item-view'
import { DetailsItem } from '../../../store/types/detailsTypes'
import { getTodoDetailsAction } from '../../../store/sagas/detailsSaga'

interface ItemViewProps {
    title: string | number,
    item?: DetailsItem,
    navigation?: any
}

export const ItemView: React.FunctionComponent<ItemViewProps> = ({ title, item, navigation }) => {
    const dispatch = useDispatch();

    const getItemDetails = () => {
        dispatch(getTodoDetailsAction(item));
        navigation.navigate('Details');
    }

    return (
        <TouchableOpacity
            style={styles.todo}
            onPress={() => { getItemDetails() }}
        >
            <View>
                <Text numberOfLines={1}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
