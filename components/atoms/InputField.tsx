import { TextInput, StyleSheet, TextInputProps } from 'react-native';



export interface InputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
  }
  
  export const Input = ({ value, onChangeText, ...props }: InputProps) => {
    return (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...props} // Pass all native props
      />
    );
  };
  


const styles = StyleSheet.create({
    input: {
        backgroundColor: "#1C1C1E",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        color: "white",
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#333",
      },
});