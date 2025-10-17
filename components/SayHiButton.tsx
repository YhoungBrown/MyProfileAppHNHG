import React, { useState } from 'react';
import { Animated, Pressable } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import { ThemedText } from './themed-text';

interface SayHiButtonProps {
  onPress: () => void;
}

const SayHiButton: React.FC<SayHiButtonProps> = ({ onPress }) => {
  const { theme } = useThemeContext();
  const [isPressed, setIsPressed] = useState(false);
  const waveAnim = useState(new Animated.Value(0))[0];

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  // Continuous waving animation
  React.useEffect(() => {
    const startWaving = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(waveAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
          }),
          Animated.timing(waveAnim, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };
    startWaving();
  }, [waveAnim]);

  const waveRotation = waveAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '25deg'],
  });

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={({ pressed }) => [
        {
          backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
          borderWidth: 2,
          borderColor: theme === 'dark' ? '#16a34a' : '#16a34a',
          borderRadius: 5,
          width: 100,
          height: 45,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: theme === 'dark' ? 0.3 : 0.1,
          shadowRadius: 4,
          elevation: 3,
          transform: [{ scale: pressed ? 0.95 : 1 }],
        }
      ]}
    >
      <Animated.Text
        style={{
          fontSize: 18,
          transform: [{ rotate: waveRotation }],
          marginRight: 4,
        }}
      >
        👋
      </Animated.Text>
      <ThemedText
        type="subtitle"
        style={{
          color: theme === 'dark' ? 'white' : '#16a34a',
          fontSize: 14,
          fontWeight: 'bold',
        }}
      >
        Say Hi
      </ThemedText>
    </Pressable>
  );
};

export default SayHiButton;
