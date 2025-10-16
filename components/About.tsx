import { Texts } from '@/constants/Texts';
import React from 'react';
import { ImageBackground } from 'react-native';
import styles from '../stylesheets/AboutSectionStyles';
import Details from './Details';
import { ThemedView } from './themed-view';
import ThemeSwitcher from './ThemeSwitcher';

const About = () => {
  
  return (
    <ThemedView style={{marginBottom: 10}}>
      <ThemedView style={styles.ProfileImageContainer}>
          <ThemeSwitcher />
        <ImageBackground
          source={require('../assets/images/profile_pic.jpg')}
          style={styles.ProfileImage}
        />
      </ThemedView>

      <Details headline={Texts.aboutHeadline} body={Texts.aboutBody} />
    </ThemedView>
  );
};

export default About;
