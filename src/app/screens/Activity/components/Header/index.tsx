import React, { memo } from 'react';
import { View } from 'react-native';

import { Text } from '@/app/components';

import { styles } from './styles';

const ActivityHeader = () => {
  return (
    <View>
      <Text style={styles.welcome}>Bienvenido de vuelta!</Text>
      <Text style={styles.name}>Ruben Rodriguez</Text>
    </View>
  );
};

export const MemoHeader = memo(ActivityHeader);
