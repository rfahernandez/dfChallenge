import React from 'react';
import { SafeAreaView, StatusBar, StatusBarProps, View } from 'react-native';

import { Colors } from '@/constants/colors';

import { styles } from './styles';

interface Props extends StatusBarProps {
  backgroundColor: Colors;
}

export const CustomStatusBar: React.FC<Props> = ({ backgroundColor, ...props }) => {
  return (
    <View testID="custom-status-bar" style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
};
