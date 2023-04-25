import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

interface Props {}

export const Activity: React.FC<Props> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header} />
      <View style={styles.content}>
        <Text>Activity</Text>
      </View>
    </SafeAreaView>
  );
};
