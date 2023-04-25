import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import styles from './styles';

interface Props {}

export const Details: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Details</Text>
    </SafeAreaView>
  );
};
