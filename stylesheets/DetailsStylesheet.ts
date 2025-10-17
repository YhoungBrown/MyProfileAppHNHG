import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    DetailsHeadline: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    DetailsHeadlineContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 12,
    },
    DetailsHeadlinesquare: {
        width: 100,
        height: 45,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 4,
        padding: 5
    },
    DetailsBody: {
        fontSize: 15,
        lineHeight: 24,
        opacity: 0.9,
        textAlign: 'justify',
    },
});

export default styles;