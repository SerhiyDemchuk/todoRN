import React from 'react';
import styles from './assets/styles';
import { Text, View } from "react-native";
import { useForm } from "react-hook-form";
import Input from '../../components/elements/Input';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ItemView } from '../Todos/components/ItemView';

export const Create: React.FunctionComponent = () => {
    const { control, register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [ inputValue, setInputValue ] = useState([]);
    const onSubmit = (data: {todo: string}) => {
        setValue('todo', '');
        inputValue.push(data);
    };

    return (
        <View>
            <Input control={control} register={register} />
            {errors.todo && <Text style={styles.label}>This is required.</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
                <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
                {
                    inputValue.map((item, id) => (
                        <View key={id}>
                            <ItemView title={item.todo} />
                        </View>
                    ))
                }
        </View>
    );
};
