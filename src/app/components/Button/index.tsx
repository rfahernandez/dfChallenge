import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

export const Button: React.FC<TouchableOpacityProps> = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};
