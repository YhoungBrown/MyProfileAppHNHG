import { Texts } from '@/constants/Texts';
import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import SkillsContent from './SkillsContent';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const Skills = () => {
  const { theme } = useThemeContext();
  const [isPressed, setIsPressed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const cardStyle = {
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 16,
    borderRadius: 16,
    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#ffffff',
    shadowColor: theme === 'dark' ? '#000' : '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: isPressed 
      ? (theme === 'dark' ? 0.5 : 0.2) 
      : (theme === 'dark' ? 0.3 : 0.1),
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
    transform: [{ scale: isPressed ? 0.98 : 1 }],
    minHeight: 80,
  };

  return (
    <ThemedView style={{marginBottom: 10}}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={cardStyle}
      >
        {/* Skills Headline */}
        <ThemedView style={{ backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginTop: 8, marginBottom: 12 }}>
          <ThemedView style={{ backgroundColor: 'transparent', width: 100, height: 45, borderWidth: 1, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginTop: 4, padding: 5, borderColor: theme === 'dark' ? 'gray' : 'green' }}>
            <ThemedText
              type='subtitle'
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                color: theme === 'dark' ? 'white' : 'black'
              }}
            >
              {Texts.skillsHeadline}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Skills Content */}
        <SkillsContent isExpanded={isExpanded} />

        {/* Read More/Less Button */}
        <ThemedView style={{ marginTop: 8, backgroundColor: 'transparent' }}>
          <Pressable
            onPress={() => setIsExpanded(!isExpanded)}
          >
            <ThemedText 
              type='link'
              style={{
                color: theme === 'dark' ? '#81b0ff' : '#16a34a',
                fontSize: 14,
                fontWeight: '600'
              }}
            >
              {isExpanded ? 'Read less' : 'Read more'}
            </ThemedText>
          </Pressable>
        </ThemedView>
      </Pressable>
    </ThemedView>
  )
}

export default Skills