import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
    tracking: {
        position: "relative",
        height: 4,
        backgroundColor: "rgba(204, 204, 204, 0.3)",
        borderRadius: 50,
        overflow: "hidden"
    },
    indicator: {
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "#F01D7C",
        borderRadius: 50
    }
});