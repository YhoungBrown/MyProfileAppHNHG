import { Dimensions, StyleSheet } from 'react-native';
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  ProfileImageContainer: {
    width: '100%',
    height: Math.max(height * 0.25, 200), 
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
    width: Math.min(150, width * 0.35),
    height: Math.min(150, width * 0.35),
    borderRadius: Math.min(75, width * 0.175),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Math.max(height * 0.13, 100),
    left: (width - Math.min(150, width * 0.35)) / 2,
    zIndex: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6, 
  },

  ProfilePic: {
    height: Math.min(140, width * 0.32),
    width: Math.min(140, width * 0.32),
    borderRadius: Math.min(70, width * 0.16),
    resizeMode: 'cover',
  },

  BioContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Math.max(50, height * 0.06), 
    paddingHorizontal: 16,
  },

  Bio: {
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    opacity: 0.7,
  },
});

export default styles;
