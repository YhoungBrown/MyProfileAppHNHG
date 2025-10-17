import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    ProfileImageContainer: {
        width: '100%',
        height: height * 0.2,
        
        position: 'relative'
    },
    ProfileCoverImage: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    Profilepicborder: {
        width: 150,
        height: 150,
        borderRadius: 350,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 25,
        right: 100,
        zIndex: 10
    },
    ProfilePic: {
        height: 140,
        width: 140,
        borderRadius: 130,
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 10,
        resizeMode: 'cover'
    },
    BioContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    Bio: {
        fontSize: 10
    }
});

export default styles;
