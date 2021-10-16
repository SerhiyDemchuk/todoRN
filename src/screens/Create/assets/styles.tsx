import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    label: {
        color: 'black',
        marginLeft: 20,
    },
    button: {
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        color: 'white',
        height: 40,
        width: 80,
        backgroundColor: '#76b0e6',
        borderRadius: 4
    },
    input: {
        backgroundColor: 'white',
        borderColor: 'black',
        height: 40,
        margin: 20,
        padding: 20,
        borderRadius: 4,
    },
    text: {
        color: '#fff',
        fontSize: 15,
        fontWeight: "bold",
        letterSpacing: 0.5,
        textTransform: 'uppercase'
    }
});

export default styles;
