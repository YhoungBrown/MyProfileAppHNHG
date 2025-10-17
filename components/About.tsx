import { Bio, Name, Texts } from '@/constants/Texts';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, ImageBackground } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import styles from '../stylesheets/AboutSectionStyles';
import Details from './Details';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import ThemeSwitcher from './ThemeSwitcher';

const About = () => {
  const {theme} = useThemeContext();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);
  
  return (
    <ThemedView style={{marginBottom: 10}}>
      <ThemedView style={styles.ProfileImageContainer}>
          <ThemeSwitcher />
        <ImageBackground
          source={require('../assets/images/MyProfileAppHNG_CoverPic.jpg')}
          style={styles.ProfileCoverImage}
        >
          <LinearGradient
            colors={theme === 'dark' 
              ? ['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.6)'] 
              : ['rgba(0,0,0,0.2)', 'rgba(0,0,0,0.4)']}
            style={styles.ImageOverlay}
          />
        </ImageBackground>

        <Animated.View style={{
          backgroundColor: theme === 'dark' ? 'black' : 'white',
          borderWidth: 2,
          borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
          ...styles.Profilepicborder,
          opacity: fadeAnim,
        }}>
          <Image 
             style={styles.ProfilePic}
             source={require('../assets/images/profile_pic.jpg')}
          />
        </Animated.View>
      </ThemedView>

      <ThemedView style={styles.BioContainer}>
        <ThemedText type="subtitle" 
        style={{
        color: theme === 'dark' ? 'white' : 'black'
      }}>
        {Name}
      </ThemedText>
        <ThemedText style={{
          color: theme === 'dark' ? 'white' : 'green',
          ...styles.Bio
        }}>
          {Bio}
        </ThemedText>
      </ThemedView>

      <ThemedView style={{ 
        marginRight: 10,
        marginLeft: 10
      }}>
        <ThemedView style={{ 
          height: 0.5,
          flexDirection: 'row',
          width: '100%',
          backgroundColor: theme === 'dark' ? 'gray' : 'green',
          marginBottom: 8,
          marginTop: 20,
          zIndex: 1
        }}/>
      </ThemedView>

      <Details headline={Texts.aboutHeadline} briefText={Texts.aboutBrief} fullText={Texts.aboutFull} />
    </ThemedView>
  );
};

export default About;
