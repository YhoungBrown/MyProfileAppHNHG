import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    ProfileImageContainer: {
        width: '100%',
        height: height * 0.4,
        overflow: 'hidden',
    },
    ProfileImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
});

export default styles;
