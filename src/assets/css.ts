import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    tracking: {
        position: "relative",
        height: 4,
        backgroundColor: "#ccc",
        borderRadius: 50
    },
    indicator: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "orange",
        borderRadius: 50
    }
});