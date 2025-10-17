import { Bio, Name, Texts } from '@/constants/Texts';
import React from 'react';
import { Image, ImageBackground } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import styles from '../stylesheets/AboutSectionStyles';
import Details from './Details';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';
import ThemeSwitcher from './ThemeSwitcher';

const About = () => {
  const {theme} = useThemeContext();
  
  return (
    <ThemedView style={{marginBottom: 10}}>
      <ThemedView style={styles.ProfileImageContainer}>
          <ThemeSwitcher />
        <ImageBackground
          source={require('../assets/images/MyProfileAppHNG_CoverPic.jpg')}
          style={styles.ProfileCoverImage}
        >
          <ThemedView style={styles.ImageOverlay} />
        </ImageBackground>

        <ThemedView style={{
          backgroundColor: theme === 'dark' ? 'black' : 'white',
          ...styles.Profilepicborder}}>
          <Image 
             style={styles.ProfilePic}
             source={require('../assets/images/profile_pic.jpg')}
          />
        </ThemedView>
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
          marginBottom: 1,
          marginTop: 25,
          zIndex: 1
        }}/>
      </ThemedView>

      <Details headline={Texts.aboutHeadline} body={Texts.aboutBody} />
    </ThemedView>
  );
};

export default About;
