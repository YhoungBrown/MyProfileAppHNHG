import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ProfileImageContainer: {
    width: '100%',
    height: height * 0.25, 
    position: 'relative',
  },

  ProfileCoverImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },

  ImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', 
  },

  Profilepicborder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: height * 0.13,
    right: width * 0.25,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, 
  },

  ProfilePic: {
    height: 140,
    width: 140,
    borderRadius: 70,
    resizeMode: 'cover',
  },

  BioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70, 
    paddingHorizontal: 20,
  },

  Bio: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.7,
  },
});

export default styles;
