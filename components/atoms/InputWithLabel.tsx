import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';
import { Input } from './InputField';

interface InputWithLabelProps {
    label: string;
    placeholder: string;
    value: string;
    errorMessage?: string;
    inputProps?: TextInputProps;
    onChangeText: (value: string) => void;
}

export const InputWithLabel = ({ label, placeholder, value, onChangeText, inputProps, errorMessage }: InputWithLabelProps) => {
    return (
        <>
                     <Text style={styles.label}>{label}</Text>
                     <Input 
                     {...inputProps}
                     placeholder={ placeholder }
                     placeholderTextColor="gray" 
                     value={value} 
                     errorMessage={errorMessage}
                     onChangeText={onChangeText}
                      />
        </>
    )
}


const styles = StyleSheet.create({
    label: {
        color: "white",
        fontSize: 16,
        marginTop: 15,
        marginBottom: 5,
    },
});