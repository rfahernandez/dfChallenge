import React from 'react';
import { View, ViewProps } from 'react-native';

import { styles } from './styles';

export const Card: React.FC<ViewProps> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};
