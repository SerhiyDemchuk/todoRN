import React from 'react'
import { Control, Controller, FieldValues, UseFormRegister } from 'react-hook-form';
import { TextInput } from 'react-native';
import styles from './assets/input';

interface InputProps {
    control: Control,
    register: UseFormRegister<FieldValues>,
}

const Input: React.FunctionComponent<InputProps> = ({ control, register }) => {
    return (
        <Controller
            name="todo"
            defaultValue=""
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    placeholder={value} {...register('todo', { required: true, minLength: 2 })}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                />
            )}
        />
    )
}

export default Input;
