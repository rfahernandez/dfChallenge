import { StyleSheet } from 'react-native';

import { Colors } from '@/constants/colors';
import { verticalScale } from '@/utils/scale';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blueRibbon,
    width: '100%',
    height: verticalScale(50),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
