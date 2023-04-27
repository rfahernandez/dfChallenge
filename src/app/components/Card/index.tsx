import React from 'react';
import { View, ViewProps } from 'react-native';

import { styles } from './styles';

export const Card: React.FC<ViewProps> = ({ children, style }) => {
  return (
    <View testID="card-container" style={[styles.container, style]}>
      {children}
    </View>
  );
};
