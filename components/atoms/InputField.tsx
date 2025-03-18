import { TextInput, StyleSheet, TextInputProps, Text, View } from 'react-native';



export interface InputProps extends TextInputProps {
    value: string;
    onChangeText: (text: string) => void;
    errorMessage?: string;
  }
  
  export const Input = ({ value, onChangeText,  errorMessage, ...props }: InputProps) => {
    return (
      <View testID="input-field" style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
     { errorMessage && <Text style={styles.error}>{errorMessage}</Text> }
      </View>
    );
  };
  


const styles = StyleSheet.create({
    container: {
      marginBottom: 15,
    },
    input: {
        backgroundColor: "#1C1C1E",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 12,
        color: "white",
        fontSize: 16,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: "#333",
      },
      error: { color: "red", fontSize: 12, marginBottom: 1 },
});