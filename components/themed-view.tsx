import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export const ThemedView: React.FC<Props> = ({ style, children }) => {
  const { theme } = useThemeContext();
  const backgroundColor = theme === 'dark' ? '#000' : '#fff';

  return <View style={[{ backgroundColor }, style]}>{children}</View>;
};
