import React from 'react';
import { View } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';

interface SectionDividerProps {
  insetHorizontal?: number;
  marginVertical?: number;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  insetHorizontal = 10,
  marginVertical = 12,
}) => {
  const { theme } = useThemeContext();
  return (
    <View
      style={{
        marginLeft: insetHorizontal,
        marginRight: insetHorizontal,
        marginVertical,
      }}
    >
      <View
        style={{
          height: 0.75,
          width: '100%',
          backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.25)' : '#16a34a',
        }}
      />
    </View>
  );
};

export default SectionDivider;


